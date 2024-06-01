import { useSelector } from "react-redux"
import { RootState } from "../../../app/store"
import MenuButton from "./components/MenuButton"
import { TerminalIcon, TreeIcon, DocumentsIcon, EnvironmentIcon, MarketIcon } from "../../../assets/menuIcons"
import { ManIcon } from "../../../assets/userIcons"
import { SettingsIcon } from "../../../assets/descIcons"
import { useState } from "react"
import SettingsArea from "../../../areas/terminal/SettingsArea"

type Section = {
    name:string 
    icon:React.ReactNode
}
type MenuContainerProps = {
    activeSection: string
    setActiveSection: (arg0: string) => void
}

const MenuContainer: React.FC<MenuContainerProps> = ({ activeSection, setActiveSection }) => {
    const { background, font, ui } = useSelector((state: RootState) => state.theme)
    const [settingsActive, setSettingsActive] = useState<boolean>(false)
    const [sections, setSections] = useState<Section[]>([
        {name: 'terminal', icon: <TerminalIcon />},
        {name: 'environment', icon: <EnvironmentIcon />},
        {name: 'git', icon: <TreeIcon />},
        {name: 'docs', icon: <DocumentsIcon />},
        {name: 'community', icon: <MarketIcon />}
    ])

    return (
        <div
            id="container-menu"
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                borderRadius: ui.elementBorderRadius,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent:'space-between',
                gap: 5,
            }}
        >
            < div
                style={{
                    position: 'relative',
                    width: '100%',
                    maxHeight: '85%',
                    borderRadius: ui.elementBorderRadius,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: ui.uiSpacing,
                    overflow:'auto',
                    scrollbarWidth:'none',
                }}
            >
                {sections.map((sect,i) => {
                    const currId = `section-${sect.name}`
                    return (
                        <MenuButton
                            key={`menubtn-${i}`}
                            id={sect.name}
                            activeSection={activeSection}
                            setActiveSection={setActiveSection}
                            targetSection={currId}
                        >
                            {sect.icon}
                        </MenuButton>
                    )
                })}
            </div >


            <div
                style={{
                    zIndex: 2,
                    width: '100%',
                    borderRadius: ui.elementBorderRadius,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 5,
                    backgroundColor: background.mainColor,
                }}
            >
                <MenuButton
                    id="account"
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                    targetSection="section-account"
                    version={2}
                >
                    <ManIcon />
                </MenuButton>

                <MenuButton
                    id="settings"
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                    targetSection="section-settings"
                    version={2}
                >
                    <SettingsIcon />
                </MenuButton>
            </div>
        </div>

    )
}

export default MenuContainer