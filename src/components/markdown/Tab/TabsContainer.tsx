import { useEffect, useState } from "react"
import AddTab from "./components/AddTab"
import { useSelector } from "react-redux"
import { RootState } from "../../../app/store"
import Tab from "./components/Tab"
import { TabInfo } from "../../../areas/markdown/EditorArea"

type TabsContainerProps = {
    focusedTab: string
    setFocusedTab: (id: string) => void
    openTabs: TabInfo[]
    setOpenTabs: (tabs: TabInfo[]) => void
    layer: number
    mandatory?: boolean
}

const TabsContainer: React.FC<TabsContainerProps> = ({ focusedTab, setFocusedTab, openTabs, setOpenTabs, mandatory = false, layer }) => {
    const { background, font, ui } = useSelector((state: RootState) => state.theme)

    const closeTab = (tabToClose: TabInfo) => {
        const newTabs = openTabs.filter(tab => tab.tabName !== tabToClose.tabName)
        setOpenTabs(newTabs)
    }

    const addTab = (tab: TabInfo) => {
        setOpenTabs([...openTabs, tab])
        setFocusedTab(`tab-${tab.tabName}`)

    }

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                height: '45px',
                width: '100%',
                maxWidth: '100%',
                position: 'relative',
                boxSizing: 'border-box',
                borderRadius: ui.elementBorderRadius,
                backgroundColor: background.mainColor,
            }}
        >
                <div
                    className="hide-scrollbar"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: ui.uiSpacing,
                        height: '100%',
                        overflowX: 'auto',
                        scrollbarWidth: 'none',
                        boxSizing: 'border-box',
                        flexGrow: 1,
                        padding: '5px 5px',
                    }}
                >
                    {openTabs.map((v, i) => (
                        <Tab
                            key={`tab-${i}`}
                            currTab={v}
                            focusedTab={focusedTab}
                            setFocusedTab={setFocusedTab}
                            closeTab={closeTab}
                            mandatory={mandatory}
                        />
                    ))}
                </div>
            {!mandatory && (
                <div
                >
                    <AddTab addTab={addTab} openTabs={openTabs} />
                </div>
            )}
        </div>
    )
}

export default TabsContainer
