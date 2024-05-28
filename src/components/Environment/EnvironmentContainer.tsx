import { useState } from "react"
import { ExpandMore } from '../../assets/descIcons'
import TabsContainer from "../Tab/TabsContainer"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { ExpandLess, ExpandMoreOutlined } from "@mui/icons-material"
import CondaSection from "./sections/CondaSection"
import { hover } from "@testing-library/user-event/dist/hover"

type OptionTabProps = {
    name: string
    currSection: string
    setCurrSection: (arg0: string) => void
}

const OptionTab: React.FC<OptionTabProps> = ({ name, currSection, setCurrSection }) => {
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
                color: font.contentColor,
                // boxShadow: isActive ? ui.boxShadow : '',
                backgroundColor: isActive || hovered ? background.mainColor : background.editorColor,
                borderRadius: ui.elementBorderRadius,
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                overflow: 'hidden',
                userSelect:'none',
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
    const [currSection, setCurrSection] = useState<string>('conda')
    const sections = ['conda', 'variables', 'containers']
    const { background, font, ui } = useSelector((state: RootState) => state.theme)

    return (
        <div
            style={{
                height: '100%',
                maxHeight: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'start',
                alignItems: 'start',
                scrollbarGutter: 'stable',
                boxSizing: 'border-box',
                borderRadius: ui.elementBorderRadius,
                border: ui.border,
                backgroundColor: background.editorColor,
            }}
        >
            {/** environments options */}
            <div
                style={{
                    height: '100%',
                    width: '200px',
                    minWidth: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRight: ui.border,
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
                        <OptionTab
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