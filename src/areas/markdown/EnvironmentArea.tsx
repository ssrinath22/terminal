import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import EnvironmentContainer from "../../components/terminal/Environment/EnvironmentContainer"
import ResizerDivider from "../../components/terminal/Divider/ResizeDivider"
import { useState } from "react"

type EnvironmentAreaProps = {
    name: string
    activeSection: string
}

const EnvironmentArea: React.FC<EnvironmentAreaProps> = ({ name, activeSection }) => {
    const { background, ui } = useSelector((state: RootState) => state.theme)
    const [width, setWidth] = useState<number>(50)

    const currId = "section-environment"

    return (
        <div
            style={{
                position: 'relative',
                display: (activeSection === currId) ? 'flex' : 'none',
                maxHeight: '100%',
                minWidth: `${width}%`,
                flexDirection: 'row',
            }}
        >
            <ResizerDivider 
                width={width}
                setWidth={setWidth}
            />
            <div
                style={{
                    position: 'relative',
                    display: (activeSection === currId) ? 'flex' : 'none',
                    maxHeight: '100%',
                    width: `100%`,
                    flexDirection: 'column',
                    padding: ui.uiSpacing,
                    gap: ui.uiSpacing,
                }}
            >
                <EnvironmentContainer />
            </div>
        </div>
    )
}

export default EnvironmentArea