import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../../app/store"
import { MarkdownIcon, LatexIcon, QuickNotesIcon } from "../../../../assets/typeIcons"
import EditorTypeOptionButton from "./EditorTypeOptionButton"
import { EditorType } from "../../../../types/editor"
import { EditorTypeIcon } from "./Tab"

type EditorOptionsProps = {
    onSelect: (type: EditorType) => void
}

const EditorOptions: React.FC<EditorOptionsProps> = ({ onSelect }) => {
    const { background, font, ui, icon } = useSelector((state: RootState) => state.theme)

    return (
        <div
            style={{
                zIndex: 10102020001,
                position: 'absolute',
                top: '100%',
                right: 0,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                padding: '10px',
                borderRadius: ui.elementBorderRadius,
                backgroundColor: background.editorColor,
                boxSizing: 'border-box',
                gap: '10px',
                boxShadow: `#00000077 0px 0px 5px`,
            }}
        >

            <EditorTypeOptionButton optionName={'quick notes'} size={"full"} onSelect={onSelect}>
                <EditorTypeIcon type={'quick notes'} />
            </EditorTypeOptionButton>

            <EditorTypeOptionButton optionName={'markdown'} onSelect={onSelect}>
                <EditorTypeIcon type={'markdown'} />
            </EditorTypeOptionButton>

            <EditorTypeOptionButton optionName={'latex'} onSelect={onSelect}>
                <EditorTypeIcon type={'latex'} />
            </EditorTypeOptionButton>
        </div>

    )
}

export default EditorOptions