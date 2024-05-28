import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import MenuButton from "./components/MenuButton"
import { TerminalIcon, TreeIcon, DocumentsIcon, EnvironmentIcon } from "../../assets/menuIcons"
import { ManIcon } from "../../assets/userIcons"
import { SettingsIcon } from "../../assets/descIcons"
import { useState } from "react"
import SettingsArea from "../../areas/SettingsArea"

type MenuContainerProps = {
    activeSection: string
    setActiveSection: (arg0: string) => void
}

const MenuContainer: React.FC<MenuContainerProps> = ({ activeSection, setActiveSection }) => {
    const { background, font, ui } = useSelector((state: RootState) => state.theme)
    const [settingsActive, setSettingsActive] = useState<boolean>(false)

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
                    // height: '100%',
                    borderRadius: ui.elementBorderRadius,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 5,
                    overflow:'auto',
                    scrollbarWidth:'none',
                }}
            >
                <MenuButton
                    id="terminal"
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                    targetSection="section-terminal"
                >
                    <TerminalIcon />
                </MenuButton>

                <MenuButton
                    id="environment"
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                    targetSection="section-environment"
                >
                    <EnvironmentIcon />
                </MenuButton>

                <MenuButton
                    id="git"
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                    targetSection="section-git"
                >
                    <TreeIcon />
                </MenuButton>

                <MenuButton
                    id="docs"
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                    targetSection="section-docs"
                >
                    <DocumentsIcon />
                </MenuButton>
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