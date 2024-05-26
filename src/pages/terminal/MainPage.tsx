import { useSelector } from "react-redux"
import EditorArea from "../../Areas/EditorArea"
import MenuArea from "../../Areas/MenuArea"
import { RootState } from "../../app/store"
import { useEffect, useState } from "react"
import EnvironmentArea from "../../Areas/EnvironmentArea"

type MainPageProps = {

}

const MainPage: React.FC<MainPageProps> = () => {
    const { background, ui } = useSelector((state: RootState) => state.theme)
    const [activeSection, setActiveSection] = useState('')

    /** set a default active section if not alr set */
    useEffect(() => {
        if (activeSection === '') {
            setActiveSection('section-terminal')
        }
    }, [])

    return (
        <div
            style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                height: '100vh',
                maxHeight: '100vh',
                width: '100vw',
                maxWidth: '100vw',
                backgroundColor: background.mainColor,
                gap: ui.uiSpacing,
            }}
        >
            <MenuArea
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />
            <EditorArea
                name='terminal'
                activeSection={activeSection}
            />
            <EnvironmentArea
                name="environment"
                activeSection={activeSection}
            />


        </div>
    )
}

export default MainPage