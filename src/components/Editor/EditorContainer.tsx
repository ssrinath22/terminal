import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import Editor from "./Editor"

type EditorContainerProps = {
    tabs: string[]
    focusedTab: string
    layer: number
}

const EditorContainer: React.FC<EditorContainerProps> = ({ tabs, focusedTab, layer }) => {
    const { background, font, ui } = useSelector((state: RootState) => state.theme)


    return (
        <div
            style={{
                zIndex:layer,
                width: '100%',
                height: '100%',
                maxHeight: '100%',
                maxWidth: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'start',
                // scrollbarGutter:'stable',
                overflowY: 'auto',
                border: ui.border ,
                borderRadius: ui.elementBorderRadius,
                boxSizing: 'border-box',
                padding: '5px 5px',
                backgroundColor: background.editorColor ? background.editorColor : background.mainColor,
            }}
        >
            {/* <TabEditorSpacing /> */}

            {tabs.map((tab, index) => {
                const currId = `editor-${tab}`
                return (
                    <Editor
                        key={currId}
                        tab={tab}
                        isActive={focusedTab === `tab-${tab}`}
                        layer={layer}
                    />
                )
            })}
        </div>
    )
}

export default EditorContainer