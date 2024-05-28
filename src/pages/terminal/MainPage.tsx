// import { useSelector } from "react-redux"
// import EditorArea from "../../areas/EditorArea"
// import MenuArea from "../../areas/MenuArea"
// import { RootState } from "../../app/store"
// import { useEffect, useState } from "react"
// import EnvironmentArea from "../../areas/EnvironmentArea"
// import HeaderArea from "../../areas/HeaderArea"

// type MainPageProps = {

// }

// const MainPage: React.FC<MainPageProps> = () => {
//     const { background, ui } = useSelector((state: RootState) => state.theme)
//     const [activeSection, setActiveSection] = useState('')

//     /** set a default active section if not alr set */
//     useEffect(() => {
//         if (activeSection === '') {
//             setActiveSection('section-terminal')
//         }
//     }, [])

//     return (
//         <div
//             style={{
//                 position: 'relative',
//                 display: 'flex',
//                 flexDirection: 'row',
//                 height: '100vh',
//                 maxHeight: '100vh',
//                 width: '100vw',
//                 maxWidth: '100vw',
//                 backgroundColor: background.mainColor,
//                 gap: ui.uiSpacing,
//                 boxSizing: 'border-box',
//             }}
//         >
//             <HeaderArea />
//             <MenuArea
//                 activeSection={activeSection}
//                 setActiveSection={setActiveSection}
//             />
//             <EditorArea
//                 name='terminal'
//                 activeSection={activeSection}
//             />
//             <EnvironmentArea
//                 name="environment"
//                 activeSection={activeSection}
//             />


//         </div>
//     )
// }

// export default MainPage

import { useSelector } from "react-redux"
import EditorArea from "../../areas/EditorArea"
import MenuArea from "../../areas/MenuArea"
import { RootState } from "../../app/store"
import { useEffect, useState } from "react"
import EnvironmentArea from "../../areas/EnvironmentArea"
import HeaderArea from "../../areas/HeaderArea"
import SettingsArea from "../../areas/SettingsArea"

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
                <EnvironmentArea
                    name="environment"
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
