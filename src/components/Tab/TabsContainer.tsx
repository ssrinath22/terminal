import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import SingleTab from "./components/SingleTab"
import { Add } from "@mui/icons-material"
import { useState } from "react"

type TabsContainerProps = {
    focusedTab: string
    setFocusedTab: (id: string) => void
    openTabs: string[]
    setOpenTabs: (tabs: string[]) => void
    layer: number
}

const TabsContainer: React.FC<TabsContainerProps> = ({ focusedTab, setFocusedTab, openTabs, setOpenTabs, layer }) => {
    const { background, font } = useSelector((state: RootState) => state.theme)
    const [addTabActivated, setAddTabActivated] = useState<boolean>(false)

    const topPad = 10
    const sidePad = 10

    const minHeight = font.contentFontSize  + 2* topPad
    const minWidth = font.contentFontSize  + 2* sidePad

    

    const handleNewTabOpened = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setOpenTabs([...openTabs, e.currentTarget.value])
            setFocusedTab(e.currentTarget.value)
            setAddTabActivated(false)
            setFocusedTab(`tab-${e.currentTarget.value}`)
        }
    }

    const handleTabClose = (tabId: string) => {
        const newTabs = openTabs.filter(tab => tab !== tabId)
        setOpenTabs(newTabs)
    }

    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'start',
                overflow: 'hidden',
            }}
        >
            {/** Currently Open Tabs */}
            {openTabs.map((name, index) => (
                <SingleTab
                    key={`tab-${name}`}
                    name={name}
                    focusedTab={focusedTab}
                    setFocusedTab={setFocusedTab}
                    handleTabClose={handleTabClose}
                    layer={layer}
                />
            ))}

            {/** Open a new tab */}
            <div
                onClick={() => {
                    // const newTab = prompt('Enter a new tab name')
                    setAddTabActivated(true)
                }}
                style={{
                    padding: `${sidePad} ${topPad}`,
                    cursor: 'pointer',
                    zIndex: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    minHeight: minHeight,
                    minWidth: minWidth,
                }}
            >
                {addTabActivated ?
                    <input
                        autoFocus
                        placeholder="New Tab"
                        type='text'
                        style={{
                            display: 'flex',
                            width: 'auto',
                            maxWidth: '80px',
                            fontFamily: font.contentFont,
                            fontSize: font.contentFontSize,
                            fontWeight: font.contentFontWeight,
                            outline: 'none',
                            border:'none',
                            padding: '0px 10px',
                            backgroundColor: 'transparent',
                        }}
                        onBlur={() => setAddTabActivated(false)}
                        onKeyDown={handleNewTabOpened}
                    />
                    :
                    <Add
                        style={{
                            color: font.contentColor,
                            cursor: 'pointer',
                            width: font.contentFontSize,
                            height: font.contentFontSize,
                        }}
                    />
                }

            </div>
        </div>
    )
}

export default TabsContainer