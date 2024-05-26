import { Close } from "@mui/icons-material"
import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../app/store"

type TabProps = {
    name: string
    focusedTab: string
    setFocusedTab: (arg0: string) => void
    closeTab: (arg0: string) => void
    mandatory?: boolean
}

const Tab: React.FC<TabProps> = ({ name, focusedTab, setFocusedTab, closeTab, mandatory = false }) => {
    const { background, font, ui } = useSelector((state: RootState) => state.theme)
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const [closeIsHovered, setCloseIsHovered] = useState<boolean>(false)
    const isActive = (focusedTab === `tab-${name}`)

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setFocusedTab(`tab-${name}`)}
            style={{
                position: 'relative',
                display: 'flex',
                justifyContent: isActive && !mandatory ? 'center' : 'center',
                alignItems: 'center',
                fontFamily: font.contentFont,
                color: font.contentColor,
                fontSize: font.contentFontSize,
                fontWeight: font.contentFontWeight,
                cursor: 'default',
                background: isActive ? background.mainColor : isHovered ? background.hoverColor : 'transparent',
                height: '100%',
                width: '100px',
                minWidth: '75px',
                maxWidth: '100px',
                borderRadius: ui.elementBorderRadius,
                boxShadow: isActive ? 'rgba(0, 0, 0, 0.3) 0px 0px 5px' : 'none',
                userSelect: 'none',
                overflow: 'hidden',
                textOverflow: 'ellipse',
            }}
        >
            {name}
            {!mandatory &&
                <div
                    style={{
                        position: 'absolute',
                        right: 5,
                        // padding: '1px 5px',
                        height: '80%',
                        width: '25px',
                        borderRadius: '3px',
                        display: isActive ? 'flex' : 'none',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: closeIsHovered ? background.hoverColor : ' #FFFFFF',
                        backdropFilter: 'blur(10px)',
                    }}
                >
                    <Close
                        onClick={() => closeTab(name)}
                        onMouseEnter={() => setCloseIsHovered(true)}
                        onMouseLeave={() => setCloseIsHovered(false)}
                        style={{
                            width: font.contentFontSize,
                            color: font.contentColor,
                        }}
                    />
                </div>
            }
        </div>
    )
}

export default Tab