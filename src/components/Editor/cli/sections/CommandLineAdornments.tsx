import { ArrowForward, ContentCopy, PlayCircle, PlayCircleOutline, Shortcut, SubdirectoryArrowLeft } from "@mui/icons-material"
import { useSelector } from "react-redux"
import { RootState } from "../../../../app/store"
import { useState } from "react"

type CommandLineAdornmentsProps = {
    currentCommand: string
    setCurrentCommand: (command: string) => void
    setReadyToExecute: (ready: boolean) => void
    isActive: boolean
}

const CommandLineAdornments: React.FC<CommandLineAdornmentsProps> = ({ currentCommand, setCurrentCommand, setReadyToExecute, isActive }) => {
    const { background, font } = useSelector((state: RootState) => state.theme)

    const [copyHovered, setCopyHovered] = useState<boolean>(false)
    const [runHovered, setRunHovered] = useState<boolean>(false)

    const opacity = (hovered: boolean) => hovered ? .6 : 1

    const innerPadding = '0px 20px'

    /** copy a command */
    const copyCommand = async () => {
        try {
            await navigator.clipboard.writeText(currentCommand);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }

    const runCommand = () => {
        setCurrentCommand(currentCommand)
        setReadyToExecute(true)
    }
    return (
        <div
            style={{
                position: 'absolute',
                right: 0,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
                backgroundColor: background.mainColor,
                height: '100%',
                padding: innerPadding,
            }}
        >
            <ContentCopy
                onClick={copyCommand}
                onMouseEnter={() => setCopyHovered(true)}
                onMouseLeave={() => setCopyHovered(false)}
                style={{
                    color: font.contentColor,
                    cursor: 'pointer',
                    width: font.contentFontSize,
                    height: font.contentFontSize,
                    opacity: opacity(copyHovered),
                }}
            />

            {isActive ?
                <ArrowForward
                    onClick={runCommand}
                    onMouseEnter={() => setRunHovered(true)}
                    onMouseLeave={() => setRunHovered(false)}
                    style={{
                        color: 'green',
                        cursor: 'pointer',
                        width: font.contentFontSize,
                        height: font.contentFontSize,
                        opacity: opacity(runHovered),
                    }}
                />
                :
                <SubdirectoryArrowLeft
                    onClick={runCommand}
                    onMouseEnter={() => setRunHovered(true)}
                    onMouseLeave={() => setRunHovered(false)}
                    style={{
                        color: font.contentColor,
                        cursor: 'pointer',
                        width: font.contentFontSize,
                        height: font.contentFontSize,
                        opacity: opacity(runHovered),
                    }}
                />
            }
        </div>
    )
}

export default CommandLineAdornments