import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { useEffect, useState } from "react"
import EditorArea from "../../areas/markdown/EditorArea"
import MenuArea from "../../areas/markdown/MenuArea"
import HeaderArea from "../../areas/markdown/HeaderArea"
import SettingsArea from "../../areas/markdown/SettingsArea"

type MainPageProps = {}

const MainPage: React.FC<MainPageProps> = () => {
    const { background, ui } = useSelector((state: RootState) => state.theme)
    const [activeSection, setActiveSection] = useState('section-Editor')
    /** set a default active section if not alr set */
    useEffect(() => {
        if (activeSection === '') {
            setActiveSection('section-Editor')
        }
    }, [activeSection])

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                width: '100vw',
                backgroundColor: background.appColor,
                boxSizing: 'border-box',
                overflow:'hidden'
            }}
        >
            <HeaderArea />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flex: 1,
                    boxSizing: 'border-box',
                    overflow: 'hidden'
                }}
            >
                <MenuArea
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                />
                <EditorArea
                    name='Editor'
                    activeSection={activeSection}
                />
                <SettingsArea
                    name="Settings"
                    activeSection={activeSection}
                />
            </div>
        </div>
    )
}

export default MainPage
