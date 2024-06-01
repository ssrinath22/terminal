import { Close, Cloud } from "@mui/icons-material"
import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../../app/store"

import { TerminalSession, CloudIcon } from '../../../../assets/descIcons'

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
    const iconStyle = {
        font: font.contentFont,
        fontSize: font.contentFontSize,
        fontFamily: font.contentFont,
        fontWeight: font.contentFontWeight,

    } as React.CSSProperties


    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setFocusedTab(`tab-${name}`)}
            style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                fontFamily: font.contentFont,
                color: font.contentColor,
                fontSize: font.contentFontSize,
                fontWeight: font.contentFontWeight,
                cursor: 'default',
                backgroundColor: isActive ? ui.tabSelectColor : isHovered ? background.hoverColor : 'transparent',
                height: '100%',
                width: '100px',
                minWidth: '75px',
                maxWidth: '200px',
                flexGrow: 1,
                borderRadius: ui.elementBorderRadius,
                boxShadow: isActive ? ui.boxShadow : 'none',
                userSelect: 'none',
                overflow: 'hidden',
                textOverflow: 'ellipse',
                padding: '0px 5px',
                gap: ui.uiSpacing,
            }}
        >
            <span
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '15%',
                    minWidth: '20px',
                }}
            >
                <CloudIcon />
            </span>
            <span
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxWidth: '85%',
                    width: '100%',
                    overflow:'hidden',
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
                            backgroundColor: closeIsHovered ? background.hoverColor : ui.tabSelectColor,
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
            </span>

        </div>
    )
}

export default Tab