import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../../app/store'
import QuickNotesCustomLine from './components/QuickNotesCustomLine'
import QuickNotesTitle from './components/QuickNotesTitle'

type QuickNotesEditorAreaProps = {
    src: string
    setSrc: (arg0: string) => void
}

const QuickNotesEditorArea: React.FC<QuickNotesEditorAreaProps> = ({ src, setSrc }) => {
    const { background, font, ui } = useSelector((state: RootState) => state.theme)
    const [title, setTitle] = useState<string>('')
    const [lines, setLines] = useState<string[]>([''])
    const lineRefs = useRef<HTMLTextAreaElement[]>([])

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, index: number) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            const newLines = [...lines]
            newLines.splice(index + 1, 0, '')
            setLines(newLines)
            setTimeout(() => {
                if (lineRefs.current[index + 1]) {
                    lineRefs.current[index + 1].focus()
                }
            }, 0)
        } else if (event.key === 'Backspace' && lines[index] === '') {
            event.preventDefault()
            if (lines.length > 1) {
                const newLines = [...lines]
                newLines.splice(index, 1)
                setLines(newLines)
                setTimeout(() => {
                    if (lineRefs.current[index - 1]) {
                        lineRefs.current[index - 1].focus()
                    }
                }, 0)
            }
        }
    }

    const handleLineChange = (value: string, index: number) => {
        const newLines = [...lines]
        newLines[index] = value
        setLines(newLines)
    }

    useEffect(() => {
        setTimeout(() => {
            if (lineRefs.current[0]) {
                lineRefs.current[0].focus()
            }
        }, 0)
    }, [])

    return (
        <div
            style={{
                position: 'relative',
                height: '100%',
                maxHeight: '100%',
                width: '70%',
                fontFamily: font.editorFont,
                fontSize: font.editorFontSize,
                boxSizing: 'border-box',
                borderRadius: ui.elementBorderRadius,
                textAlign: 'left',
                overflowY: 'hidden',
                overflowX: 'hidden',
                backgroundColor: background.editorColor,
                color: font.contentColor,
                display: 'flex',
                alignItems: 'start',
                flexDirection: 'column',
                gap: ui.uiSpacing,
                padding: '25px',
            }}
        >
            <QuickNotesTitle
                value={title}
                onChange={setTitle}
            />

            <div
                style={{
                    display: 'block',
                    width: '100%',
                    maxHeight: '90%',
                    boxSizing: 'border-box',
                    overflowY: 'auto',
                }}
            >
                {lines.map((line, index) => (
                    <div key={index} onKeyDown={(event) => handleKeyDown(event, index)} style={{ width: '100%' }}>
                        <QuickNotesCustomLine
                            value={line}
                            onChange={(value) => handleLineChange(value, index)}
                            lineNum={index}
                            ref={(el) => (lineRefs.current[index] = el as HTMLTextAreaElement)}
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default QuickNotesEditorArea
