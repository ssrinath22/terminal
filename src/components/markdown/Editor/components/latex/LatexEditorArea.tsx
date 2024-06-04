import Editor from "react-simple-code-editor"
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import { useSelector } from "react-redux"
import { RootState } from "../../../../../app/store"
import replaceRules from "../latex/function/ReplaceRules"

import 'prismjs/components/prism-latex'

type LatexEditorAreaProps = {
    latex: string
    setLatex: (arg0: string) => void
}

const LatexEditorArea: React.FC<LatexEditorAreaProps> = ({ latex, setLatex }) => {
    const highlight = (code: string) => Prism.highlight(code, Prism.languages.latex, 'latex')

    const { background, font, ui } = useSelector((state: RootState) => state.theme)

    const handleValueChange = (code: string) => {
        const parsedCode = replaceRules(code)
        setLatex(parsedCode)
    }

    return (
        <div
            style={{
                zIndex: 0,
                position: 'relative',
                height: '100%',
                maxHeight: '100%',
                width: '100%',
                fontFamily: font.editorFont,
                fontSize: font.editorFontSize,
                boxSizing: 'border-box',
                borderRadius: ui.elementBorderRadius,
                textAlign: 'left',
                overflowY: 'auto',
                backgroundColor: background.editorColor,
                // border: ui.border,
            }}
        >
            <Editor
                value={latex}
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
                    display: (latex.length === 0) ? 'flex' : 'none',
                    position: 'absolute',
                    zIndex: -1,
                    top: ui.uiSpacing,
                    left: ui.uiSpacing,
                    // fontFamily: font.editorFont,
                    // fontSize: font.editorFontSize,
                    color: '#999999',
                }}
            >
                {'Hello World'}
            </div>
        </div>
    )
}
export default LatexEditorArea