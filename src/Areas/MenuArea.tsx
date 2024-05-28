import { GitHub, Lan, Person, Settings } from "@mui/icons-material"
import MenuButton from "../components/Menu/components/MenuButton"
import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import { useEffect, useState } from "react"
import MenuContainer from "../components/Menu/MenuContainer"

type MenuArea = {
    activeSection: string
    setActiveSection: (arg0: string) => void
}

const MenuArea: React.FC<MenuArea> = ({activeSection, setActiveSection}) => {
    const { background, ui } = useSelector((state: RootState) => state.theme)


    useEffect(() => {
    }, [activeSection])

    return (
        <div //outer container
            style={{
                position:'relative',
                zIndex: 2,
                backgroundColor: `${background.mainColor}`,
                minWidth: '75px',
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