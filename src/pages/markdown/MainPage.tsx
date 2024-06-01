import { useSelector } from "react-redux"

import { RootState } from "../../app/store"
import { useEffect, useState } from "react"
import EditorArea from "../../areas/markdown/EditorArea"
import MenuArea from "../../areas/markdown/MenuArea"
import EnvironmentArea from "../../areas/markdown/EnvironmentArea"
import HeaderArea from "../../areas/markdown/HeaderArea"
import SettingsArea from "../../areas/markdown/SettingsArea"

type MainPageProps = {}

const MainPage: React.FC<MainPageProps> = () => {
    const { background, ui } = useSelector((state: RootState) => state.theme)
    const [activeSection, setActiveSection] = useState('')
    /** set a default active section if not alr set */
    useEffect(() => {
        if (activeSection === '') {
            setActiveSection('section-terminal')
        }
    }, [activeSection])

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                width: '100vw',
                backgroundColor: background.mainColor,
                boxSizing: 'border-box',
            }}
        >
            <HeaderArea />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flex: 1,
                    gap: ui.uiSpacing,
                    boxSizing: 'border-box',
                    overflow: 'hidden'
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
                <SettingsArea
                    name="settings"
                    activeSection={activeSection}
                />
            </div>
        </div>
    )
}

export default MainPage
