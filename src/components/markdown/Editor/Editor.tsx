import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../app/store'
import { useEffect, useState } from 'react'
import { MarkdownEditorArea, MarkdownRenderedArea } from './components/markdown'
import { LatexEditorArea, LatexRenderedArea } from './components/latex'
import { TabInfo } from '../../../areas/markdown/EditorArea'
import { EditorType } from '../../../types/editor'

import 'prismjs/components/prism-markdown'

type EditorProps = {
    isActive: boolean
    layer: number
    editorType?: EditorType
}

const Editor: React.FC<EditorProps> = ({ isActive, layer, editorType = 'markdown' }) => {
    /** Global States */
    const { background, font, ui } = useSelector((state: RootState) => state.theme)

    const [code, setCode] = useState<string>('')

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
                overflow: 'hidden',
                backgroundColor: background.editorColor,
                color: font.contentColor,
                gap: ui.uiSpacing,
                boxSizing: 'border-box',
            }}
        >
            {
                (editorType === 'markdown') &&
                <>
                    <MarkdownEditorArea markdown={code} setMarkdown={setCode} />
                    <MarkdownRenderedArea markdownSrc={code} />
                </>
            }

            {
                (editorType === 'latex') &&
                <>
                    <LatexEditorArea latex={code} setLatex={setCode} />
                    <LatexRenderedArea latexSrc={code} />
                </>
            }
            
            {
                (editorType == 'quick notes') && 
                <>
                    This editor type has not yet been implemented
                </>
            }

        </div>
    )
}

export default Editor
