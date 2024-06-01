import React, { useState, useEffect } from 'react'

type ResizerDividerProps = {
    width: number
    setWidth: (arg0: number) => void
}

const ResizerDivider: React.FC<ResizerDividerProps> = ({ width, setWidth }) => {
    const [hovered, setHovered] = useState<boolean>(false)
    const [dragging, setDragging] = useState<boolean>(false)
    const [startX, setStartX] = useState<number>(0)

    const handleMouseMove = (e: MouseEvent) => {
        if (dragging) {
            const deltaX = startX - e.clientX
            let newWidth = width + deltaX / 10 
            newWidth = Math.max(0, Math.min(100, newWidth))
            setWidth(newWidth)
        }
    }

    const handleMouseUp = () => {
        if (dragging) {
            setDragging(false)
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }
    }

    const handleMouseDown = (e: React.MouseEvent) => {
        setStartX(e.clientX)
        setDragging(true)
        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
    }

    useEffect(() => {
        return () => {
            if (dragging) {
                document.removeEventListener('mousemove', handleMouseMove)
                document.removeEventListener('mouseup', handleMouseUp)
            }
        }
    }, [dragging])

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseDown={handleMouseDown}
            style={{
                cursor: 'ew-resize',
                zIndex: 2,
                position: 'relative',
                display: 'flex',
                height: '100%',
                width: '3px',
                minWidth: '3px',
                maxWidth: '3px',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: hovered || dragging ? 'blue' : 'transparent',
                transition: 'background-color 0.3s',
            }}
        />
    )
}

export default ResizerDivider