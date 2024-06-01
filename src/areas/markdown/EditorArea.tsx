import { useState, useEffect } from "react"
import EditorContainer from "../../components/markdown/Editor/EditorContainer"
import TabsContainer from "../../components/markdown/Tab/TabsContainer"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"

type EditorArea = {
    name: string
    activeSection: string
}


const EditorArea: React.FC<EditorArea> = ({ name, activeSection}) => {
    const [focusedTab, setFocusedTab] = useState<string>('')
    const [openTabs, setOpenTabs] = useState<string[]>(['hello world', 'yep'])

    const { background, font, ui } = useSelector((state: RootState) => state.theme)

    const currId = `section-${name}`
    const altId = `section-${"environment"}`

    /* default focused tab to first tab if there is more than one tab*/
    useEffect(() => {
        if (openTabs.length > 0) {
            setFocusedTab(`tab-${openTabs[0]}`)
        }
    }, [])

    /* default focused tab to last tab if when current tab is closed*/
    useEffect(() => {
        if (openTabs.length > 0) {
            setFocusedTab(`tab-${openTabs[openTabs.length - 1]}`)
        }
    }, [openTabs])


    return (
        <div
            style={{
                position: 'relative',
                display: (activeSection === currId || activeSection === altId) ? 'flex' : 'none',
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