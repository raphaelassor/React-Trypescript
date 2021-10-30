import MonacoEditor, { OnChange, OnMount } from "@monaco-editor/react";
import prettier from 'prettier'
import parser from 'prettier/parser-babel'
import { useRef } from "react";
import '../assets/styles/cmps/_code-editor.scss'

interface CodeEditorProps {
    initialValue: string;
    onChange(value: string): void;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {

    const editor = useRef<any>()
    const onCodeChange: OnChange = (value, ev) => {
        if (value === undefined) value = ''
        onChange(value)
    }
    const onEditorMount: OnMount = (monacoEditor) => {
        editor.current = monacoEditor
    }
    const onFormatClick = () => {

        const unformattedCode = editor.current.getValue()
        const formattedCode = prettier.format(unformattedCode, {
            parser: 'babel',
            plugins: [parser],
            singleQuote: true
        }).replace(/\n$/, '')
        editor.current.setValue(formattedCode)
    }
    return <div className="editor-wrapper">
        <button className="button button-format is-primary is-small" onClick={onFormatClick}>format</button>
        <MonacoEditor
            onMount={onEditorMount}
            onChange={onCodeChange}
            value={initialValue}
            height="500px"
            language="javascript"
            theme="vs-dark"
            options={{
                wordWrap: "on",
                minimap: { enabled: false },
                showUnused: false,
                folding: false,
                lineNumbersMinChars: 3,
                fontSize: 16,
                scrollBeyondLastLine: false,
                automaticLayout: true
            }}
        />
    </div>
}