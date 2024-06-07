import React, { useRef, useEffect, useState, forwardRef } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../../../app/store'
import LineOptionButton from './LineOptionButton'

interface QuickNotesCustomLineProps {
    value: string
    onChange: (value: string) => void
    lineNum: number
}

const QuickNotesCustomLine = forwardRef<HTMLTextAreaElement, QuickNotesCustomLineProps>(({ value, onChange, lineNum }, ref) => {
    const { background, font, ui } = useSelector((state: RootState) => state.theme)

    const textareaRef = useRef<HTMLTextAreaElement | null>(null)
    const [isFocused, setIsFocused] = useState(false)
    const [hovered, setHovered] = useState(false)

    const bgOpacity = isFocused ? '55' : hovered ? '44' : '00'

    useEffect(() => {
        if (textareaRef.current) {
            updateHeight()
        }
    }, [value])

    const updateHeight = () => {
        if (textareaRef.current) {
            const textarea = textareaRef.current
            textarea.style.height = 'auto'
            textarea.style.height = `${textarea.scrollHeight}px`
        }
    }

    return (
        <div 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={async () => await setTimeout(() => setHovered(false), 350)}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: `${background.lineColor}${bgOpacity}`,
                padding: ui.uiSpacing,
                borderRadius: ui.elementBorderRadius,
                width: '100%',
                boxSizing: 'border-box',
                // padding: '10',
            }}
        >
            <LineOptionButton
                lineNum={lineNum}
                active={hovered}
            />

            <textarea
                ref={(el) => {
                    textareaRef.current = el
                    if (typeof ref === 'function') {
                        ref(el)
                    } else if (ref) {
                        ref.current = el
                    }
                }}
                value={value}
                onFocus={() => setIsFocused(true)}
                onBlur={() => {
                    setIsFocused(false)
                    setHovered(false)
                }}
                onChange={(e) => {
                    onChange(e.currentTarget.value)
                    updateHeight()
                }}
                style={{
                    fontFamily: font.editorFont,
                    fontSize: font.editorFontSize,
                    fontWeight: font.contentFontWeight,
                    color: font.editorFontColor,
                    border: 'none',
                    backgroundColor: 'transparent',
                    outline: 'none',
                    width: '100%',
                    resize: 'none',
                    overflowY: 'hidden',
                    whiteSpace: 'pre-wrap',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 'auto',
                    lineHeight: '1.2',
                    padding: 0,
                    boxSizing: 'border-box',
                }}
                rows={1}
            />
        </div>
    )
})

export default QuickNotesCustomLine
