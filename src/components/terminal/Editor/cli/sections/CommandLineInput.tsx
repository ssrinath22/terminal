import { useSelector } from "react-redux"
import { RootState } from "../../../../../app/store"
import { useEffect, useState } from "react"

type CommandLineInputProps = {
    currentCommand:string
    setCurrentCommand: (command: string) => void
    setReadyToExecute: (ready: boolean) => void
    isActive: boolean
}

const CommandLineInput: React.FC<CommandLineInputProps> = ({ currentCommand, setCurrentCommand, setReadyToExecute, isActive = true }) => {
    const { background, font, ui } = useSelector((state: RootState) => state.theme)


    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            // setCurrentCommand(currInput) /** signal parent to handle command execution */
            setReadyToExecute(true) /** signal parent to handle command execution */
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentCommand(e.target.value)
    }


    return (
        <div
            style={{
                width: '69%',
                height: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'start',
                alignItems: 'center',
                borderRadius: '5px',
                padding: '1px 2px',
                color: font.contentColor,
                fontFamily: font.editorFont,
                fontSize: font.editorFontSize,
                fontWeight: font.contentFontWeight,
            }}
        >

            <input
                disabled={!isActive}
                type='text'
                value={currentCommand}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: font.contentColor,
                    fontFamily: font.editorFont,
                    fontSize: font.editorFontSize,
                    fontWeight: font.headerFontWeight,
                    width: '100%',
                }}
            />


        </div>
    )
}

export default CommandLineInput