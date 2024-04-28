import { useSelector } from "react-redux"
import EditorArea from "../../Areas/EditorArea"
import MenuArea from "../../Areas/MenuArea"
import { RootState } from "../../app/store"
import { useEffect, useState } from "react"

type MainPageProps = {

}

const MainPage: React.FC<MainPageProps> = () => {
    const { background } = useSelector((state: RootState) => state.theme)
    const [activeSection, setActiveSection] = useState('')

    /** set a default active section if not alr set */
    useEffect(() => {
        if (activeSection === '') {
            setActiveSection('section-Terminal')
        }
    }, [])

    return (
        <div
            style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                height: '100vh',
                width: '100vw',
                backgroundColor: background.mainColor
            }}
        >
            <MenuArea
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />
            <EditorArea
                name='Terminal'
                activeSection={activeSection}
            />

        </div>
    )
}

export default MainPage