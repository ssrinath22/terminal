import { useSelector, useDispatch } from 'react-redux'
import themeSlice, { setTheme } from '../../features/theme/themeSlice'
import { RootState } from '../../app/store'
import CommandLine from './cli/CommandLine'
import { useEffect, useState } from 'react'
import CommandLineResponse from './cli/CommandLineResponse'

type EditorProps = {
    tab: string
    isActive: boolean
    layer: number
}

const Editor: React.FC<EditorProps> = ({ tab, isActive, layer }) => {
    /** Global States */
    const { background, font } = useSelector((state: RootState) => state.theme)
    const dispatch = useDispatch()

    /** Local States */
    const [currentDirectory, setCurrentDirectory] = useState<string>('/home/user/documents/change')
    const [currentBranch, setCurrentBranch] = useState<string>('master')

    const [commandHistory, setCommandHistory] = useState<string[]>([])
    const [responseHistory, setResponseHistory] = useState<string[]>([])

    /** handle commands from active cli */
    const [currentCommand, setCurrentCommand] = useState<string>('')
    const [currentResponse, setCurrentResponse] = useState<string>('')

    /** when current response is changed, add command and response to history */
    useEffect(() => {
        if (currentResponse.length > 0) {
            setCommandHistory([...commandHistory, currentCommand])
            setResponseHistory([...responseHistory, currentResponse])
            setCurrentResponse('')
            setCurrentCommand('')
        }
    }, [currentResponse])


    const scrollToBottom = () => {
        var limit = Math.max(document.body.scrollHeight, document.body.offsetHeight,
            document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)
        window.scrollTo(0, limit)
    }

    // useEffect(() => {
    //     scrollToBottom()
    // }, [commandHistory])


    return (
        <div
            style={{
                zIndex: layer,
                height: '100%', //TODO: change to 100%
                width: '100%',
                maxHeight: '100%',
                maxWidth: '100%',
                display: isActive ? 'flex' : 'none',
                justifyContent: 'start',
                flexDirection: 'column',
                alignItems: 'start',
                backgroundColor: background.mainColor,
                overflowX: 'hidden',
                scrollbarWidth: 'thin',
                scrollbarGutter: 'stable',
            }}
        >
            {/** History */}
            {commandHistory.map((command, index) => {
                return (
                    <CommandLine
                        key={index}
                        currentDirectory={currentDirectory}
                        setCurrentDirectory={setCurrentDirectory}
                        currentBranch={currentBranch}
                        setCurrentBranch={setCurrentBranch}
                        currentCommand={command}
                        currentResponse={responseHistory[index]}
                        setCurrentCommand={(setCurrentCommand)}
                        setCurrentResponse={setCurrentResponse}
                        isHistory={true}
                        isActive={false}
                    />
                )
            })}

            {/** Current Command */}
            <CommandLine
                currentDirectory={currentDirectory}
                setCurrentDirectory={setCurrentDirectory}
                currentBranch={currentBranch}
                setCurrentBranch={setCurrentBranch}
                currentCommand={currentCommand}
                currentResponse={currentResponse}
                setCurrentCommand={setCurrentCommand}
                setCurrentResponse={setCurrentResponse}
                isHistory={true}
                isActive={true}
            />
        </div>
    )
}

export default Editor
