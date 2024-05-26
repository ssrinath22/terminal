// import { useEffect, useState } from "react"
// import Tab from "./components/Tab"
// import AddTab from "./components/AddTab"
// import { useSelector } from "react-redux"
// import { RootState } from "../../app/store"
// import { Add, Close, PlusOne } from "@mui/icons-material"

// type TabsContainerProps = {
//     focusedTab: string
//     setFocusedTab: (id: string) => void
//     openTabs: string[]
//     setOpenTabs: (tabs: string[]) => void
//     layer: number
//     mandatory?: boolean
// }

// const TabsContainer: React.FC<TabsContainerProps> = ({ focusedTab, setFocusedTab, openTabs, setOpenTabs, mandatory = false, layer }) => {
//     const { background, font, ui } = useSelector((state: RootState) => state.theme)

//     const closeTab = (tabId: string) => {
//         const newTabs = openTabs.filter(tab => tab !== tabId)
//         setOpenTabs(newTabs)
//     }
//     const addTab = (tabId: string) => {
//         setOpenTabs([...openTabs, tabId])
//         setFocusedTab(tabId)
//         setFocusedTab(`tab-${tabId}`)
//     }
//     return (
//         <div
//             style={{
//                 display: 'flex',
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 gap: ui.uiSpacing,
//                 height: '45px',
//                 width: '100%',
//                 overflow:'scroll',
//                 padding: '5px 5px',
//                 boxSizing: 'border-box',
//                 borderRadius: ui.elementBorderRadius,
//             }}
//         >
//             {openTabs.map((v, i) => (
//                 <Tab
//                     key={`tab-${i}`}
//                     name={v}
//                     focusedTab={focusedTab}
//                     setFocusedTab={setFocusedTab}
//                     closeTab={closeTab}
//                     mandatory={mandatory}
//                 />
//             ))}

//             {!mandatory &&
//                 <AddTab
//                     addTab={addTab}
//                 />
//             }
//         </div>
//     )
// }

// export default TabsContainer
import { useEffect, useState } from "react"
import Tab from "./components/Tab"
import AddTab from "./components/AddTab"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { Add, Close, PlusOne } from "@mui/icons-material"

type TabsContainerProps = {
    focusedTab: string
    setFocusedTab: (id: string) => void
    openTabs: string[]
    setOpenTabs: (tabs: string[]) => void
    layer: number
    mandatory?: boolean
}

const TabsContainer: React.FC<TabsContainerProps> = ({ focusedTab, setFocusedTab, openTabs, setOpenTabs, mandatory = false, layer }) => {
    const { background, font, ui } = useSelector((state: RootState) => state.theme)

    const closeTab = (tabId: string) => {
        const newTabs = openTabs.filter(tab => tab !== tabId)
        setOpenTabs(newTabs)
    }
    const addTab = (tabId: string) => {
        setOpenTabs([...openTabs, tabId])
        setFocusedTab(tabId)
        setFocusedTab(`tab-${tabId}`)
    }
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                height: '45px',
                width: '100%',
                maxWidth: '100%',
                position: 'relative', // Ensures AddTab is positioned relative to this container
                boxSizing: 'border-box',
                borderRadius: ui.elementBorderRadius,
                backgroundColor: background.mainColor,
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: ui.uiSpacing,
                    height: '100%',
                    overflowX: 'auto',
                    scrollbarWidth:'none',
                    boxSizing: 'border-box',
                    flexGrow: 1,
                    padding: '5px 5px',
                }}
            >
                {openTabs.map((v, i) => (
                    <Tab
                        key={`tab-${i}`}
                        name={v}
                        focusedTab={focusedTab}
                        setFocusedTab={setFocusedTab}
                        closeTab={closeTab}
                        mandatory={mandatory}
                    />
                ))}
            </div>
            
            {!mandatory && (
                <div
                    style={{
                        // position: 'absolute',
                        // right: '10px', // Adjust as needed to match container padding
                    }}
                >
                    <AddTab addTab={addTab} openTabs={openTabs}/>
                </div>
            )}
        </div>
    )
}

export default TabsContainer
