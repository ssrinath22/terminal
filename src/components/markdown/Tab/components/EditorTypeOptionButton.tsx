import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../../app/store"
import { EditorType } from "../../../../types/editor"

type EditorTypeOptionButtonProps = {
    optionName: EditorType
    children: React.ReactNode
    onSelect: (type: EditorType) => void
    size?: 'full' | 'half'
}
const EditorTypeOptionButton: React.FC<EditorTypeOptionButtonProps> = ({ optionName, children, size = 'half', onSelect }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const { background, font, ui, icon } = useSelector((state: RootState) => state.theme)

    const buttonWidth = size === 'half' ? '75px' : '100%'
    const buttonHeight = '75px'

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onSelect(optionName)}
            style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                fontFamily: font.contentFont,
                fontSize: font.contentFontSize,
                fontWeight: font.contentFontWeight,
                color: font.contentColor,
                width: buttonWidth,
                height: buttonHeight,
                gap: ui.uiSpacing,
                // border: ui.border,
                borderRadius: ui.elementBorderRadius,
                boxShadow: isHovered ? `${background.accentColor}00 0px 0px 5px` : '',
                backgroundColor: isHovered ? background.hoverColor : '',
                transition: 'box-shadow .2s, background-color .2s linear',
                gridColumn: size === 'full' ? '1 / -1' : 'auto', // Full width if size is 'full'
            }}
        >
            {children}
            <span>{optionName}</span>
        </div>
    )
}
export default EditorTypeOptionButton