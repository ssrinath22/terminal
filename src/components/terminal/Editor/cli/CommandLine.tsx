import { useSelector } from "react-redux"
import { RootState } from "../../../../app/store"
import { useEffect, useState } from "react"
import CommandLineHeader from "./sections/CommandLineHeader"
import CommandLineInput from "./sections/CommandLineInput"
import { dummyExecuteCommand, executeCommand } from "../../../../api/ExecuteCommand"
import { ContentCopy, CopyAllOutlined, Shortcut } from "@mui/icons-material"
import CommandLineAdornments from "./sections/CommandLineAdornments"
import Response from "./CommandLineResponse"
import CommandLineResponse from "./CommandLineResponse"

type CommandLineProps = {
    currentDirectory: string
    setCurrentDirectory: (directory: string) => void
    currentBranch: string
    setCurrentBranch: (branch: string) => void
    currentCommand: string
    currentResponse: string
    setCurrentCommand: (command: string) => void
    setCurrentResponse: (response: string) => void
    isActive: boolean
    isHistory?: boolean
}

const CommandLine: React.FC<CommandLineProps> = ({ currentDirectory, setCurrentDirectory, currentBranch, setCurrentBranch, currentCommand, currentResponse, setCurrentCommand, setCurrentResponse, isActive = true }) => {
    /** global states */
    const { background, font } = useSelector((state: RootState) => state.theme)

    /** command line states */
    const [commandLineFocused, setCommandLineFocused] = useState<boolean>(false)
    const [readyToExecute, setReadyToExecute] = useState<boolean>(false)



    /** command line styles */
    const borderOpacity = '50'
    const border = commandLineFocused ? `1px solid ${background.accentColor}${borderOpacity}` : `1px solid ${background.accentColor}${'00'}`
    const innerPadding = '0px 0px'
    const spacing = 0


    /** handle executing a command */
    const handleExecuteCommand = async () => {
        console.log('executing command: ')
        try {
            const res = dummyExecuteCommand(currentCommand)
            setCurrentResponse(res) /** signal execution finished */
            console.log(currentCommand, res)
        } catch(error) {
            console.error('Error executing command:', error)
        }
       
    }
    /** detect execution signal */
    useEffect(() => {
        const execute = async () => {
          if (readyToExecute) {
            await handleExecuteCommand()
            setReadyToExecute(false)
          }
        }
      
        execute()
      }, [readyToExecute])

    /** */

    return (
        <div
            style={{
                width: '100%',
                maxWidth: '100%',
                minHeight: '50px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'start',
                // overflow: 'hidden',
                // boxSizing:'border-box',
                // padding: '5px 5px',
            }}
        >

            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'start',
                    alignItems: 'start',
                    gap: spacing,
                }}
            >
                {/** CLI HEADER */}
                <CommandLineHeader
                    currentDirectory={currentDirectory}
                    setCurrentDirectory={setCurrentDirectory}
                    currentBranch={currentBranch}
                    setCurrentBranch={setCurrentBranch}
                />

                {/** CLI INPUT */}
                <CommandLineInput
                    currentCommand={currentCommand}
                    setCurrentCommand={setCurrentCommand}
                    setReadyToExecute={setReadyToExecute}
                    isActive={isActive}
                />

                {/** CLI ADORNMENTS */}
                <CommandLineAdornments
                    currentCommand={currentCommand}
                    setCurrentCommand={setCurrentCommand}
                    setReadyToExecute={setReadyToExecute}
                    isActive={isActive}
                />
            </div>

            <CommandLineResponse response={currentResponse} isActive={isActive} />
        </div>
    )
}

export default CommandLine