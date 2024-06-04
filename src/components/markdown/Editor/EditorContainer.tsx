import { useSelector } from "react-redux"
import { RootState } from "../../../app/store"
import Editor from "./Editor"
import { TabInfo } from "../../../areas/markdown/EditorArea"

type EditorContainerProps = {
    tabs: TabInfo[]
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
                overflowY: 'auto',
                scrollbarWidth:'thin',
                borderRadius: ui.elementBorderRadius,
                boxSizing: 'border-box',
                padding: '5px 5px',
                backgroundColor: background.editorColor ? background.editorColor : background.mainColor,
                border: ui.border ,
            }}
        >
            {/* <TabEditorSpacing /> */}

            {tabs.map((tab, index) => {
                const currId = `editor-${tab.tabName}`
                return (
                    <Editor
                        key={currId}
                        isActive={focusedTab === `tab-${tab.tabName}`}
                        layer={layer}
                        editorType={tab.tabType}
                    />
                )
            })}
        </div>
    )
}

export default EditorContainer