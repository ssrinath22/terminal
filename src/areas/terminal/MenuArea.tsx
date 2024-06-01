import { GitHub, Lan, Person, Settings } from "@mui/icons-material"
import MenuButton from "../../components/terminal/Menu/components/MenuButton"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { useEffect, useState } from "react"
import MenuContainer from "../../components/terminal/Menu/MenuContainer"

type MenuArea = {
    activeSection: string
    setActiveSection: (arg0: string) => void
}

const MenuArea: React.FC<MenuArea> = ({activeSection, setActiveSection}) => {
    const { background, ui } = useSelector((state: RootState) => state.theme)
    const {accessibility} = useSelector((state: RootState) => state.settings)

    const width = accessibility.descriptions ? '75px' : '50px'


    useEffect(() => {
    }, [activeSection])

    return (
        <div
            style={{
                position:'relative',
                zIndex: 2,
                backgroundColor: `${background.mainColor}`,
                minWidth: width,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: '5px 5px',
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