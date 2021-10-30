import React, { useState, useEffect, useRef } from "react"
import * as esbuild from 'esbuild-wasm'
import { unpkgPathPlugin } from '../plugins/unpkg-path-plugin'
import { fetchPlugin } from "../plugins/fetch-plugin"
import { CodeEditor } from "./CodeEditor"

export const CodeBox = () => {

    const [input, setInput] = useState('')
    const ref = useRef<any>()
    const iframe = useRef<any>()

    const startService = async () => {
        ref.current = await esbuild.startService({
            worker: true,
            wasmURL: './esbuild.wasm'
        })
    }

    useEffect(() => {
        startService();
    }, [])


    const onSubmit = async () => {
        if (!ref.current) return
        iframe.current.srcDoc = html;
        const res = await ref.current.build({
            entryPoints: ['index.js'],
            bundle: true,
            write: false,
            plugins: [
                unpkgPathPlugin(),
                fetchPlugin(input)
            ],
            define: {
                'process.env.NODE_ENV': '"production"',
                global: 'window'
            }
        })

        iframe.current.contentWindow.postMessage(res.outputFiles[0].text, '*')

    }
    const html = `
    <html>
    <body>
        <div id="root"></div>
        <script>
        window.addEventListener('message',(event)=>{
            try {
                eval(event.data)
            } catch (err) { 
                const root=document.querySelector('#root')
                root.innerHTML= '<div>' + err + '</div>' 
                console.error(err)
            }
        })
        </script>
    </body>
</html>
    `

    return <div>
        <h1>CODE EDITOR </h1>
        <textarea name="" id="" value={input} onChange={(ev) => setInput(ev.target.value)} ></textarea>
        <CodeEditor
            initialValue={"import React from 'react'"}
            onChange={(value: string) => setInput(value)}
        />
        <button onClick={onSubmit}>Submit </button>
        <iframe ref={iframe} sandbox="allow-scripts" srcDoc={html} title="codeBox" />
    </div>
}

