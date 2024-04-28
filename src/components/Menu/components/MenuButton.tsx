import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../app/store"

type MenuButtonProps = {
    name: string
    activeSession: string
    setActiveSession: (arg0: string) => void
    symbol: React.ReactNode
    layer: number
}

const MenuButton: React.FC<MenuButtonProps> = ({ name, activeSession, setActiveSession, symbol, layer }) => {

    const { background, font } = useSelector((state: RootState) => state.theme)

    const [hovered, setHovered] = useState<boolean>(false)
    const targetId = `section-${name}`
    const active = (activeSession === targetId)

    const contentOpacity = !active ? hovered ? 1 : .6 : 1

    const indicatorHeight = !active ? 0 : 100
    const indicatorWidth = !active ? 0 : 3

    console.log(activeSession, name)

    return (
        <div
            style={{
                position: 'relative',
                zIndex: layer,
                width: '100%',
                padding: '20px 0px',
            }}
        >
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => setActiveSession(targetId)}
                style={{
                    cursor: 'pointer',
                    opacity: contentOpacity,
                    display: 'auto',
                    color: background.mainColor,
                }}
            >
                {symbol}

            </div>
            {/** active indicator */}
            <div
                style={{
                    position: 'absolute',
                    width: indicatorWidth,
                    height: '100%',
                    backgroundColor: background.mainColor,
                    top:0,
                    left: 0,
                }}
            />
        </div>

    )
}

export default MenuButton
