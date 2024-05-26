import { useState } from "react"
import { ExpandMore } from '../../assets/otherIcons'
import TabsContainer from "../Tab/TabsContainer"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { ExpandLess, ExpandMoreOutlined } from "@mui/icons-material"
import CondaSection from "./sections/CondaSection"

type OptionButtonProps = {
    name: string
    currSection: string
    setCurrSection: (arg0: string) => void
}

const OptionButton: React.FC<OptionButtonProps> = ({ name, currSection, setCurrSection }) => {
    const { background, font, ui } = useSelector((state: RootState) => state.theme)
    const [hovered, setHovered] = useState<boolean>(false)
    const isActive = (currSection === `section-${name}`)
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => setCurrSection(`section-${name}`)}
            style={{
                position: 'relative',
                width: '100%',
                height: '30px',
                fontFamily: font.contentFont,
                fontWeight: font.contentFontWeight,
                fontSize: font.contentFontSize,
                backgroundColor: isActive ? background.hoverColor : hovered ? background.hoverColor : background.mainColor,
                borderRadius: ui.elementBorderRadius,
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                overflow: 'hidden',
            }}>
            <span
                style={{
                    position: 'absolute',
                    left: 10,
                }}
            >
                {name}
            </span>
        </div>
    )
}

type EnvironmentContainerProps = {

}

const EnvironmentContainer: React.FC<EnvironmentContainerProps> = ({ }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [currSection, setCurrSection] = useState<string>('')
    const [sections, currSections] = useState<string[]>(['conda', 'variables', 'containers'])
    const { background, font, ui } = useSelector((state: RootState) => state.theme)

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                maxHeight: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'start',
                alignItems: 'start',
                scrollbarGutter: 'stable',
                boxSizing: 'border-box',
            }}
        >
            {/** environments options */}
            <div
                style={{
                    height: '100%',
                    width: '300px',
                    maxWidth: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    border: ui.border,
                    borderTopLeftRadius: ui.elementBorderRadius,
                    borderBottomLeftRadius: ui.elementBorderRadius,
                    overflowX: 'hidden',
                    scrollbarWidth: 'thin',
                    scrollbarGutter: 'stable',
                    gap: ui.uiSpacing,
                    padding: '5px 5px',
                    boxSizing: 'border-box',
                }}
            >
                {sections.map((v, i) => {
                    return (
                        <OptionButton
                            key={`key-section-${v}`}
                            name={v}
                            currSection={currSection}
                            setCurrSection={setCurrSection}
                        />
                    )
                })}
            </div>

            {/** Conda Settings */}
            <CondaSection currSection={currSection}/>
        </div>
    )
}

export default EnvironmentContainer