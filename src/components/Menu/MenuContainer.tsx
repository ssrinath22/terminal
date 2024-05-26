import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import MenuButton from "./components/MenuButton"
import {TerminalIcon, TreeIcon, DocumentsIcon, EnvironmentIcon} from "../../assets/menuIcons"

type MenuContainerProps = {
    activeSection: string
    setActiveSection: (arg0: string) => void
}

const MenuContainer: React.FC<MenuContainerProps> = ({ activeSection, setActiveSection }) => {
    const { background, font, ui } = useSelector((state: RootState) => state.theme)

    return (
        < div
            style={{
                width: '100%',
                height: '100%',
                borderRadius: ui.elementBorderRadius,
                display: 'flex',
                flexDirection: 'column',
                alignItems:'center',
                gap: 5,
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
    )
}

export default MenuContainer