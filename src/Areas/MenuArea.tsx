import { GitHub, Lan, Person, Settings } from "@mui/icons-material"
import MenuButton from "../components/Menu/components/MenuButton"
import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import { useEffect, useState } from "react"

type MenuArea = {
    activeSection: string
    setActiveSection: (arg0: string) => void
}

const MenuArea: React.FC<MenuArea> = ({activeSection, setActiveSection}) => {
    const { background } = useSelector((state: RootState) => state.theme)

    const backgroundOpacity = 'DD'

    useEffect(() => {
    }, [activeSection])

    return (
        <div
            style={{
                position:'relative',
                zIndex: 2,
                backgroundColor: `${background.accentColor2}${backgroundOpacity}`,
                width: '80px',
                minWidth: '80px',
                // maxWidth: '10%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}
        >
            <MenuButton
                key={'menBtn-Terminal'}
                name='Terminal'
                activeSession={activeSection}
                setActiveSession={setActiveSection}
                symbol={<Lan />}
                layer={2}
            />
            <MenuButton
                key={'menBtn-Git'}
                name='Git'
                activeSession={activeSection}
                setActiveSession={setActiveSection}
                symbol={<GitHub />}
                layer={2}
            />

            <div
                style={{
                    position: 'absolute',
                    width: '100%',
                    bottom: 0,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <MenuButton
                    key={'menBtn-Settings'}
                    name='Settings'
                    activeSession={activeSection}
                    setActiveSession={setActiveSection}
                    symbol={<Settings />}
                    layer={2}
                />

                <MenuButton
                    key={'menBtn-user'}
                    name='User'
                    activeSession={activeSection}
                    setActiveSession={setActiveSection}
                    symbol={<Person />}
                    layer={2}
                />
            </div>

        </div>
    )
}

export default MenuArea