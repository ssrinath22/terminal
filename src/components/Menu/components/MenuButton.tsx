import { useSelector } from "react-redux"
import { RootState } from "../../../app/store"
import { useState } from "react"

type MenuButtonProps = {
    id: string
    activeSection: string
    setActiveSection: (section: string) => void
    targetSection: string
    children: React.ReactNode
}

const MenuButton: React.FC<MenuButtonProps> = ({ id, activeSection, setActiveSection, targetSection, children }) => {
    const {background, font, ui} = useSelector((state: RootState) => state.theme)
    const [hovered, setHovered] = useState<boolean>(false)
    const isActive = activeSection === targetSection
    const backgroundColor = hovered || isActive ? background.hoverColor :  'transparent'
    const handleMouseEnter = () => {
        !isActive && setHovered(true)
    }

    const handleMouseLeave = () => {
        hovered && setHovered(false)
    }

    const handleClick = () => {
        setActiveSection(targetSection)
    }

    return (
        <div
            id={id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={{
                display: 'flex',
                flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '60px',
                width: '100%',
                borderRadius: ui.elementBorderRadius,
                backgroundColor,
                fontFamily: font.contentFont,
                fontWeight: font.contentFontWeight,
                fontSize: font.contentFontSize,
                userSelect: 'none',
                gap: ui.uiSpacing,
            }}
        >
            {children}
            {id}
        </div>
    )
}

export default MenuButton