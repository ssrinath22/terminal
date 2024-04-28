import { useState, useEffect } from "react"
import EditorContainer from "../components/Editor/EditorContainer"
import TabsContainer from "../components/Tab/TabsContainer"
import { useSelector } from "react-redux"
import { RootState } from "../app/store"

type EditorArea = {
    name: string
    activeSection: string
}


const EditorArea: React.FC<EditorArea> = ({ name, activeSection }) => {
    const [focusedTab, setFocusedTab] = useState<string>('')
    const [openTabs, setOpenTabs] = useState<string[]>([])

    const { background, font } = useSelector((state: RootState) => state.theme)

    const currId = `section-${name}`

    /* default focused tab to first tab if there is more than one tab*/
    useEffect(() => {
        if (openTabs.length > 0) {
            setFocusedTab(`tab-${openTabs[0]}`)
        }
    }, [])


    return (
        <div
            style={{
                position: 'relative',
                height: '100%',
                width: '100%',
                display: (activeSection === currId) ? 'flex' : 'none',
                flexDirection: 'column',
            }}
        >
            {/** Background */}
            { (openTabs.length === 0) && 
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontFamily: font.contentFont,
                        fontSize: 40,
                        backgroundColor: `${background.accentColor}40`,
                        color: background.accentColor,
                    }}
                >
                    Open a new tab to start coding!
                </div>
            }

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