import Editor from "react-simple-code-editor"
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import { useSelector } from "react-redux"
import { RootState } from "../../../../app/store"

type MarkdownEditorAreaProps = {
    markdown: string 
    setMarkdown: (arg0: string) => void
}

const MarkdownEditorArea: React.FC<MarkdownEditorAreaProps> = ({ markdown, setMarkdown }) => {
    const highlight = (code: string) => Prism.highlight(code, Prism.languages.markdown, 'markdown')
    const { background, font, ui } = useSelector((state: RootState) => state.theme)

    return (
        <div
            style={{
                padding: ui.uiSpacing,
                height: '100%',
                maxHeight: '100%',
                width: '100%',
                fontFamily: font.editorFont,
                fontSize: font.editorFontSize,
                boxSizing: 'border-box',
                borderRadius: ui.elementBorderRadius,
                textAlign: 'left',
                overflowY: 'auto',
            }}
        >
            <Editor
                value={markdown}
                padding={10}
                onValueChange={(code) => setMarkdown(code)}
                highlight={highlight}
                style={{
                    width: '100%',
                    fontFamily: font.editorFont,
                    fontSize: font.editorFontSize,
                }}
            />

        </div>
    )
}

export default MarkdownEditorArea