import ReactMarkdown from "react-markdown"
import { useSelector } from "react-redux"
import { RootState } from "../../../../app/store"

type MarkdownRenderedAreaProps = {
    markdownSrc:string
}

const MarkdownRenderedArea:React.FC<MarkdownRenderedAreaProps> = ({markdownSrc}) => {
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
                    border: ui.border,
                    backgroundColor: background.mainColor,
                    color: background.accentColor,
                }}>
                <ReactMarkdown
                    children={markdownSrc}
                />
            </div>
    )
}

export default MarkdownRenderedArea