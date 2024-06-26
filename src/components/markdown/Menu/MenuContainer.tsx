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
    const {userInfo} = useSelector((state: RootState) => state.user)
    const [menuCollapsed, setMenuCollapsed] = useState<boolean>(false)
    const [sections, setSections] = useState<Section[]>([
        {name: 'Editor', icon: <TerminalIcon />},
        // {name: 'environment', icon: <EnvironmentIcon />},
        {name: 'Git', icon: <TreeIcon />},
        {name: 'Docs', icon: <DocumentsIcon />},
        {name: 'Community', icon: <MarketIcon />}
    ])

    return (
        <div
            id="container-menu"
            style={{
                position: menuCollapsed ? 'absolute' : 'relative',
                top: menuCollapsed ? ui.uiSpacing : 'auto',
                left: menuCollapsed ? ui.uiSpacing : 'auto',
                width: menuCollapsed ? 'auto' : '100%',
                height: '100%',
                borderRadius: ui.elementBorderRadius,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent:'space-between',
                backgroundColor: background.menuColor,
                boxShadow: menuCollapsed ? ui.boxShadow : '',
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
                    backgroundColor: background.menuColor,
                }}
            >
                <MenuButton
                    id="Account"
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                    targetSection="section-Account"
                    desc={userInfo.name}
                >
                    <ManIcon />
                </MenuButton>

                <MenuButton
                    id="Settings"
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                    targetSection="section-Settings"
                >
                    <SettingsIcon />
                </MenuButton>
            </div>
        </div>

    )
}

export default MenuContainer