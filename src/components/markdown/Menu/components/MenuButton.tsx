import { useSelector } from "react-redux"
import { RootState } from "../../../../app/store"
import { useState } from "react"

type MenuButtonProps = {
    id: string
    activeSection: string
    setActiveSection: (section: string) => void
    targetSection: string
    children: React.ReactNode
    desc?: boolean
    version?: number
    switching?: boolean
}

const MenuButton: React.FC<MenuButtonProps> = ({ id, activeSection, setActiveSection, targetSection, children, desc = true, version = 1, switching = true }) => {
    const { background, font, ui, icon } = useSelector((state: RootState) => state.theme)
    const { accessibility } = useSelector((state: RootState) => state.settings)
    const [hovered, setHovered] = useState<boolean>(false)
    const isActive = activeSection === targetSection
    const backgroundColor = hovered || isActive ? background.hoverColor : 'transparent'

    const height = accessibility.descriptions ? '30px' : '45px'
    const width = accessibility.descriptions ? '150px' : '45px'


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
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width,
                height,
                boxSizing: 'border-box',
                padding: '5px 10px',
                borderRadius: ui.menuButtonBorderRadius,
                backgroundColor,
                fontFamily: font.contentFont,
                fontWeight: font.contentFontWeight,
                fontSize: icon.iconDescSize,
                color: icon.iconDescColor,
                userSelect: 'none',
                WebkitUserSelect: 'none',
                gap: ui.uiSpacing,
                transition: 'all .2s',
            }}
        >
            <div
                style={{
                    minWidth: '30px',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {children}
            </div>

            {accessibility.descriptions &&
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    {id}
                </div>
            }
        </div>
    )
}

export default MenuButton