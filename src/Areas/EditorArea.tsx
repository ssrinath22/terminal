import { useState, useEffect } from "react"
import EditorContainer from "../components/Editor/EditorContainer"
import TabsContainer from "../components/Tab/TabsContainer"
import { useSelector } from "react-redux"
import { RootState } from "../app/store"

type EditorArea = {
    name: string
    activeSection: string
}


const EditorArea: React.FC<EditorArea> = ({ name, activeSection}) => {
    const [focusedTab, setFocusedTab] = useState<string>('')
    const [openTabs, setOpenTabs] = useState<string[]>(['hello world', 'yep','1','2','3','4','6','7','9','10','98','123','2134','1214','325','252456'])

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