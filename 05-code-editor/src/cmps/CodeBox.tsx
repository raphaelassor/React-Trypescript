import React, { useState, useEffect, useRef } from "react"
import * as esbuild from 'esbuild-wasm'
import { unpkgPathPlugin } from '../plugins/unpkg-path-plugin'
import { fetchPlugin } from "../plugins/fetch-plugin"
export const CodeBox = () => {

    const [input, setInput] = useState('')
    const [code, setCode] = useState('')
    const ref = useRef<any>()

    useEffect(() => {
        startService();
    }, [])

    const startService = async () => {
        ref.current = await esbuild.startService({
            worker: true,
            wasmURL: './esbuild.wasm'
        })
    }

    const onSubmit = async () => {
        if (!ref.current) return
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
        setCode(res.outputFiles[0].text)
    }

    return <div>
        <h1>CODE EDITOR </h1>
        <textarea name="" id="" value={input} onChange={(ev) => setInput(ev.target.value)} ></textarea>
        <button onClick={onSubmit}>Submit </button>
        <pre>
            {code}
        </pre>
    </div>
}