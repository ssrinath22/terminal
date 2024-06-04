import { useState, useEffect } from "react"
import EditorContainer from "../../components/markdown/Editor/EditorContainer"
import TabsContainer from "../../components/markdown/Tab/TabsContainer"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { EditorType } from "../../types/editor"

export type TabInfo = {
    tabName: string
    tabType: EditorType
}

type EditorArea = {
    name: string
    activeSection: string
}

const EditorArea: React.FC<EditorArea> = ({ name, activeSection}) => {
    const [focusedTab, setFocusedTab] = useState<string>('')
    const [openTabs, setOpenTabs] = useState<TabInfo[]>([{tabName: 'hello world', tabType: 'latex'}])

    const { background, font, ui } = useSelector((state: RootState) => state.theme)

    const currId = `section-${name}`

    /* default focused tab to first tab if there is more than one tab*/
    useEffect(() => {
        if (openTabs.length > 0) {
            console.log(`tab-${openTabs[0].tabName}`)
            setFocusedTab(`tab-${openTabs[0].tabName}`)
        }
    }, [])

    useEffect(() => {
        console.log(focusedTab)
    }, [focusedTab])


    return (
        <div
            style={{
                position: 'relative',
                display: (activeSection === currId) ? 'flex' : 'none',
                // display:'flex',
                maxHeight: '100%',
                width: `100%`,
                overflow:'hidden',
                flexDirection: 'column',
                padding: '5px 6px',
                gap: ui.uiSpacing,
            }}
        >
            <TabsContainer
                layer={1}
                focusedTab={focusedTab}
                setFocusedTab={setFocusedTab}
                openTabs={openTabs}
                setOpenTabs={setOpenTabs}
            />

            <EditorContainer
                layer={1}
                tabs={openTabs}
                focusedTab={focusedTab}
            />
        </div>

    )
}

export default EditorArea