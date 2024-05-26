import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import EnvironmentContainer from "../components/Environment/EnvironmentContainer"

type EnvironmentAreaProps = {
    name:string 
    activeSection:string
}

const EnvironmentArea:React.FC<EnvironmentAreaProps> = ({name, activeSection}) => {
    const { background, ui } = useSelector((state: RootState) => state.theme)

    const currId = "section-environment"
    
    return(
        <div
            style={{
                position: 'relative',
                display: (activeSection === currId) ? 'flex' : 'none',
                maxHeight: '100%',
                width: '100%',
                flexDirection: 'column',
                padding: '5px 6px',
                gap: ui.uiSpacing,
            }}
        >
            <EnvironmentContainer />
        </div>
    )
}

export default EnvironmentArea