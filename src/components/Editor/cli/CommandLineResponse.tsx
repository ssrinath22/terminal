import { useSelector } from "react-redux"
import { RootState } from "../../../app/store"
import { NavigateNext } from "@mui/icons-material"
import { useEffect, useState } from "react"

type CommandLineResponseProps = {
    response: string
    isActive?: boolean
}

const CommandLineResponse: React.FC<CommandLineResponseProps> = ({ isActive = true, response }) => {
    const { background, font, ui } = useSelector((state: RootState) => state.theme)

    const backgroundOpacity = 'FF'

    useEffect(() => {
        console.log("Response changed in CLR ", response)
    }, [response])

    return (
        <div
            style={{
                width: '100%',
                maxWidth: '100%',
                display: !isActive ? 'flex' : 'none',
                justifyContent: 'start',
                alignItems: 'center',
                gap: 5,
                flexGrow:1,
                boxSizing:'border-box',
                padding:'3px',
                overflow:'scroll',
            }}
        >
            <div
                style={{
                    height: '100%',
                    color: font.contentColor,
                    fontFamily: font.editorFont,
                    fontWeight: font.responseFontWeight,
                    fontSize: font.editorFontSize,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'start',
                    textAlign:'start',
                }}
            >
                {response.split('\n').map((line, index) => (
                    <div key={index}>{line}</div>
                ))}
            </div>
        </div>

    )
}
export default CommandLineResponse