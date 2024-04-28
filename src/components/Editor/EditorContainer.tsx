import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import Editor from "./Editor"

const TabEditorSpacing = () => {
    const {background} = useSelector((state: RootState) => state.theme)

    return (
        <div
            style={{
                height: '5px',
                width: '100%',
                backgroundColor: background.mainColor,
            }}
        />
    )
}


type EditorContainerProps = {
    tabs: string[]
    focusedTab: string
    layer: number
}

const EditorContainer: React.FC<EditorContainerProps> = ({ tabs, focusedTab, layer }) => {

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
                overflow: 'scroll',
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