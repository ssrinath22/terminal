import Editor from "react-simple-code-editor"
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import { useSelector } from "react-redux"
import { RootState } from "../../../../../app/store"
import replaceRules from "./function/ReplaceRules"

import 'prismjs/components/prism-latex'

type MarkdownEditorAreaProps = {
    markdown: string
    setMarkdown: (arg0: string) => void
}

const MarkdownEditorArea: React.FC<MarkdownEditorAreaProps> = ({ markdown, setMarkdown }) => {
    const highlight = (code: string) => Prism.highlight(code, Prism.languages.markdown, 'markdown')

    const { background, font, ui } = useSelector((state: RootState) => state.theme)

    const handleValueChange = (code: string) => {
        const parsedCode = replaceRules(code)
        setMarkdown(parsedCode)
    }

    return (
        <div
            style={{
                position: 'relative',
                // padding: ui.uiSpacing,
                height: '100%',
                maxHeight: '100%',
                width: '100%',
                fontFamily: font.editorFont,
                fontSize: font.editorFontSize,
                boxSizing: 'border-box',
                borderRadius: ui.elementBorderRadius,
                textAlign: 'left',
                overflowY: 'auto',
                // border: ui.border,
            }}
        >
            <Editor
                value={markdown}
                padding={ui.uiSpacing}
                onValueChange={handleValueChange}
                highlight={highlight}
                style={{
                    width: '100%',
                    fontFamily: font.editorFont,
                    fontSize: font.editorFontSize,
                }}
            />
            <div 
                style={{
                    display: (markdown.length === 0) ? 'flex' : 'none',
                    position: 'absolute',
                    zIndex: -1,
                    top: ui.uiSpacing,
                    left: ui.uiSpacing,
                    fontFamily: font.editorFont,
                    fontSize: font.editorFontSize,
                    color: '#999999',
                }}
            >
                {'# Hello World'}
            </div>
        </div>
    )
}
export default MarkdownEditorArea