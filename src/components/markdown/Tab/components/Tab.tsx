import { Close, Cloud } from "@mui/icons-material"
import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../../app/store"
import { LatexIcon, MarkdownIcon, QuickNotesIcon } from "../../../../assets/typeIcons"
import { TabInfo } from "../../../../areas/markdown/EditorArea"
import { EditorType } from "../../../../types/editor"

export const EditorTypeIcon: React.FC<{type:EditorType, isSmall?: boolean}> = ({type, isSmall = false}) => {
    const editorTypeIcons = {
        'markdown' : <MarkdownIcon isSmall={isSmall}/>,
        'latex' : <LatexIcon isSmall={isSmall}/>,
        'quick notes' : <QuickNotesIcon isSmall={isSmall} />
    }

    return(
        editorTypeIcons[type]
    )
}

type TabProps = {
    currTab: TabInfo
    focusedTab: string
    setFocusedTab: (arg0: string) => void
    closeTab: (arg0: TabInfo) => void
    mandatory?: boolean
}

const Tab: React.FC<TabProps> = ({ currTab, focusedTab, setFocusedTab, closeTab, mandatory = false }) => {
    const { background, font, ui } = useSelector((state: RootState) => state.theme)
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const [closeIsHovered, setCloseIsHovered] = useState<boolean>(false)
    const isActive = (focusedTab === `tab-${currTab.tabName}`)


    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {
                setFocusedTab(`tab-${currTab.tabName}`)
            }}
            style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                fontFamily: font.contentFont,
                color: font.contentColor,
                fontSize: font.contentFontSize,
                fontWeight: font.contentFontWeight,
                cursor: 'default',
                backgroundColor: isActive ? ui.tabSelectColor : isHovered ? background.hoverColor : 'transparent',
                height: '100%',
                width: '100px',
                minWidth: '75px',
                maxWidth: '200px',
                flexGrow: 1,
                borderRadius: ui.tabBorderRadius,
                boxShadow: isActive ? ui.boxShadow : 'none',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                overflow: 'hidden',
                textOverflow: 'ellipse',
                padding: `0px ${ui.uiSpacing}px`,
                gap: ui.uiSpacing,
            }}
        >
            <span
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '15%',
                    minWidth: '20px',
                }}
            >
                {<EditorTypeIcon type={currTab.tabType} isSmall={true} />}
            </span>
            <span
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxWidth: '85%',
                    width: '100%',
                    overflow:'hidden',
                }}
            >
                {currTab.tabName}
                {!mandatory &&
                    <div
                        style={{
                            position: 'absolute',
                            right: 5,
                            // padding: '1px 5px',
                            height: '80%',
                            width: '25px',
                            borderRadius: '3px',
                            display: isActive ? 'flex' : 'none',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: closeIsHovered ? background.hoverColor : ui.tabSelectColor,
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        <Close
                            onClick={() => closeTab(currTab)}
                            onMouseEnter={() => setCloseIsHovered(true)}
                            onMouseLeave={() => setCloseIsHovered(false)}
                            style={{
                                cursor: 'pointer',
                                width: font.contentFontSize,
                                color: font.contentColor,
                            }}
                        />
                    </div>
                }
            </span>

        </div>
    )
}

export default Tab