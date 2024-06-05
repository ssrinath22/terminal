import React, { useRef, useEffect, useState, forwardRef } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../../../app/store'

interface QuickNotesTitleProps {
    value: string
    onChange: (value: string) => void
}

const QuickNotesTitle = forwardRef<HTMLTextAreaElement, QuickNotesTitleProps>(({ value, onChange }, ref) => {
    const { background, font, ui } = useSelector((state: RootState) => state.theme)
    const { userInfo } = useSelector((state: RootState) => state.user)

    const textareaRef = useRef<HTMLTextAreaElement | null>(null)
    const spanRef = useRef<HTMLSpanElement | null>(null)
    const [isFocused, setIsFocused] = useState(false)
    const [hovered, setHovered] = useState(false)

    const placeholder = `Quick Notes by ${userInfo.name.split(' ')[0]}`

    const bgOpacity = isFocused ? '1F' : hovered ? '0F' : '00'

    useEffect(() => {
        updateWidth()
    }, [value])

    useEffect(() => {
        updateWidth()
    }, [])
    const updateWidth = () => {
        if (spanRef.current && textareaRef.current) {
            spanRef.current.textContent = value || 'Custom Title Here'
            const newWidth = Math.min(Math.max(spanRef.current.scrollWidth, 100), 600)
            textareaRef.current.style.width = `${newWidth}px`
        }
    }

    return (
        <div
            style={{
                display: 'inline-block',
                justifyContent: 'start',
                alignItems: 'center',
                backgroundColor: `${background.accentColor2}${bgOpacity}`,
                borderRadius: ui.elementBorderRadius,
                overflow: 'hidden', // Hide overflow of the container
                minWidth: '100%',
                maxWidth: '100%',
                boxSizing:'border-box',
                padding: ui.uiSpacing,
            }}
        >
            <textarea
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                ref={(el) => {
                    textareaRef.current = el
                    if (typeof ref === 'function') {
                        ref(el)
                    } else if (ref) {
                        ref.current = el
                    }
                }}
                value={value}
                placeholder={placeholder}
                onFocus={() => setIsFocused(true)}
                onBlur={() => {
                    setIsFocused(false)
                    setHovered(false)
                }}
                onChange={(e) => {
                    onChange(e.currentTarget.value)
                    updateWidth()
                }}
                style={{
                    fontFamily: font.editorFont,
                    fontSize: font.editorFontSize * 3,
                    fontWeight: font.headerFontWeight,
                    color: font.editorFontColor,
                    backgroundColor: 'transparent',
                    outline: 'none',
                    resize: 'none',
                    overflowX: 'auto', // Enable horizontal scrolling
                    overflowY: 'hidden', // Disable vertical scrolling
                    whiteSpace: 'nowrap', // Ensure the text does not wrap
                    display: 'flex',
                    flexDirection: 'row',
                    minWidth: '100%',
                    maxWidth: '100%',
                    padding: 0,
                    border: 'none', // Ensure no border
                    boxSizing:'border-box',
                }}
                rows={1}
            />
            <span
                ref={spanRef}
                style={{
                    position: 'absolute',
                    visibility: 'hidden',
                    height: font.contentFontSize,
                    whiteSpace: 'nowrap',
                    fontFamily: font.editorFont,
                    fontSize: font.editorFontSize * 3,
                    fontWeight: font.contentFontWeight,
                    lineHeight: '1.2',
                    padding: 0,
                }}
            />
        </div>
    )
})

export default QuickNotesTitle
