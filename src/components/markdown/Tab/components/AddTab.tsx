import { Add } from "@mui/icons-material"
import React, { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../../app/store"
import { TabInfo } from "../../../../areas/markdown/EditorArea"
import { MarkdownIcon, LatexIcon } from "../../../../assets/typeIcons"
import EditorOptions from "./EditorOptions"
import { EditorType } from "../../../../types/editor"


type AddTabProps = {
    addTab: (arg0: TabInfo) => void
    openTabs: TabInfo[]
}

const AddTab: React.FC<AddTabProps> = ({ addTab, openTabs }) => {
    const { background, font, ui } = useSelector((state: RootState) => state.theme)
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const [getTabNameActivated, setGetTabNameActivated] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const divRef = useRef<HTMLDivElement>(null)

    const [transform, setTransform] = useState<String>('')

    const handleNewTabOpened = (tabType: EditorType) => {
        if (error) setError(false)
        const tabName = `newtab ${openTabs.length + 1}`
        if (tabName) {
            addTab({ tabName, tabType })
        }
        setGetTabNameActivated(false)
        setIsHovered(false)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (divRef.current && !divRef.current.contains(event.target as Node)) {
                setGetTabNameActivated(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [divRef])

    useEffect(() => {
        const rightMostTabRight = document.getElementById(`tab-${openTabs.length - 1}`)?.getBoundingClientRect().right

        const addTabRight = divRef.current?.getBoundingClientRect().right

        if(rightMostTabRight && addTabRight) {
            const moveRight = rightMostTabRight - addTabRight
            divRef.current.style.transform = (`translateX(${moveRight})`)
        }
        
    }, [openTabs])

    return (
        <div
            ref={divRef}
            style={{
                position: 'relative',
                cursor: 'default',
                padding: '4px 7px',
                height: '100%',
                backgroundColor: isHovered ? background.tabColor : 'transparent',
                borderRadius: ui.tabBorderRadius,
                userSelect: 'none',
                display: 'flex',
                justifyContent:'center',
                alignItems: 'center',
            }}
        >
            <Add
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setGetTabNameActivated(true)}
                style={{
                    display: 'auto',
                    color: font.contentColor,
                    width: font.contentFontSize,
                }}
            />
            {getTabNameActivated && (
                <EditorOptions
                    onSelect={handleNewTabOpened}
                />
            )}
        </div>
    )
}

export default AddTab
