import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../app/store'
import { useEffect, useState } from 'react'
import { MarkdownEditorArea, MarkdownRenderedArea } from './components'

import 'prismjs/components/prism-markdown'

type EditorProps = {
    tab: string
    isActive: boolean
    layer: number
}

const Editor: React.FC<EditorProps> = ({ tab, isActive, layer }) => {
    /** Global States */
    const { background, font, ui } = useSelector((state: RootState) => state.theme)
    const dispatch = useDispatch()

    // Local state for markdown content
    const [markdown, setMarkdown] = useState<string>('')
    //'"Fira code", "Fira Mono", monospace'

    return (
        <div
            style={{
                zIndex: layer,
                height: '100%',
                width: '100%',
                maxWidth: '100%',
                display: isActive ? 'flex' : 'none',
                justifyContent: 'start',
                flexDirection: 'row',
                alignItems: 'start',
                overflowX: 'hidden',
                scrollbarWidth: 'thin',
                scrollbarGutter: 'stable',
                backgroundColor: background.editorColor,
                color: font.contentColor,
                gap: ui.uiSpacing,
                boxSizing: 'border-box',
            }}
        >
            <MarkdownEditorArea markdown={markdown} setMarkdown={setMarkdown} />

            {/* <MarkdownRenderedArea markdownSrc={markdown} /> */}

        </div>
    )
}

export default Editor
