import { useSelector } from "react-redux"
import { RootState } from "../../../app/store"
import { NavigateNext } from "@mui/icons-material"
import { useEffect, useState } from "react"

type CommandLineResponseProps = {
    response: string
    isActive?: boolean
}

const CommandLineResponse: React.FC<CommandLineResponseProps> = ({ isActive = true, response }) => {
    const { background, font } = useSelector((state: RootState) => state.theme)

    const backgroundOpacity = '00'

    return (
        <div
            style={{
                width: '100%',
                maxWidth: '100%',
                display: !isActive ? 'flex' : 'none',
                justifyContent: 'start',
                alignItems: 'center',
                // border: active ? `1px solid ${background.accentColor}` : '',
                backgroundColor: `${background.accentColor2}${backgroundOpacity}`,
                padding: '0px 0px',
                gap: 5,
            }}
        >
            <span
                style={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <NavigateNext
                    style={{
                        color: font.contentColor,
                        cursor: 'pointer',
                        width: font.contentFontSize,
                    }}
                />
            </span>
            <span
                style={{
                    height: '100%',
                    color: font.contentColor,
                    fontFamily: font.contentFont,
                    fontWeight: font.responseFontWeight,
                    fontSize: font.contentFontSize,
                    padding: '2px 0px', //just to ge thte height to be normalized
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {response}
            </span>
        </div>

    )
}
export default CommandLineResponse