import { useSelector } from "react-redux"
import { RootState } from "../../../../app/store"
import { useState } from "react"

type MenuButtonProps = {
    id: string
    activeSection: string
    setActiveSection: (section: string) => void
    targetSection: string
    children: React.ReactNode
    desc?:boolean
    version?:number
    switching?:boolean
}

const MenuButton: React.FC<MenuButtonProps> = ({ id, activeSection, setActiveSection, targetSection, children, desc=true, version=1, switching=true}) => {
    const {background, font, ui, icon} = useSelector((state: RootState) => state.theme)
    const {accessibility} = useSelector((state: RootState) => state.settings)
    const [hovered, setHovered] = useState<boolean>(false)
    const isActive = activeSection === targetSection
    const backgroundColor = hovered || isActive ? background.hoverColor :  'transparent'

    const height = accessibility.descriptions ? '60px' : '45px'
    const width = accessibility.descriptions ? '75px' : '45px'


    const handleMouseEnter = () => {
        !isActive && setHovered(true)
    }

    const handleMouseLeave = () => {
        hovered && setHovered(false)
    }

    const handleClick = () => {
        switching && setActiveSection(targetSection)
    }

    return (
        <div
            id={id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={{
                cursor: 'default',
                display: 'flex',
                flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'center',
                minWidth: width,
                minHeight: height,
                height: height,
                borderRadius: ui.elementBorderRadius,
                backgroundColor,
                fontFamily: font.contentFont,
                fontWeight: font.contentFontWeight,
                fontSize: icon.iconDescSize,
                color: icon.iconDescColor,
                userSelect: 'none',
                WebkitUserSelect:'none',
                gap: ui.uiSpacing,
                transition: 'all .2s',
            }}
        >
            {children}
            {(accessibility.descriptions) && id}
        </div>
    )
}

export default MenuButton