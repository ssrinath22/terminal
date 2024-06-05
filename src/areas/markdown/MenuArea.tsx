import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { useEffect, useState } from "react"
import MenuContainer from "../../components/markdown/Menu/MenuContainer"

type MenuArea = {
    activeSection: string
    setActiveSection: (arg0: string) => void
}

const MenuArea: React.FC<MenuArea> = ({activeSection, setActiveSection}) => {
    const { background, ui } = useSelector((state: RootState) => state.theme)
    const {accessibility} = useSelector((state: RootState) => state.settings)

    useEffect(() => {
    }, [activeSection])

    return (
        <div //outer container
            style={{
                position:'relative',
                zIndex: 2,
                backgroundColor: `${background.mainColor}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: ui.uiSpacing,
            }}
        >
            {/** Inner Container */}
            <MenuContainer 
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />

        </div>
    )
}

export default MenuArea