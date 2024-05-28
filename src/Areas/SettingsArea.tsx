import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../app/store"
import { DarkMode, LightMode } from "@mui/icons-material"
import { toggleTheme } from '../features/theme/themeSlice'

type SettingsAreaProps = {
    name:string 
    activeSection:string
}

const SettingsArea: React.FC<SettingsAreaProps> = ({name, activeSection }) => {
    const dispatch = useDispatch()
    const { background, font, ui, icon, mode } = useSelector((state: RootState) => state.theme)
    const { username } = useSelector((state: RootState) => state.user)
    const isActive = (`section-${name}` === activeSection)

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: isActive ? 'flex' : 'none',
                gap: ui.uiSpacing,
                textAlign: 'start',
                flexDirection: 'column',
                boxSizing: 'border-box',
                padding: '20px 20px',
                fontFamily: font.contentFont,
                fontSize: icon.iconDescSizeLarge,
                fontWeight: font.contentFontWeight,
                color: font.contentColor,
            }}
        >
            <span> Theme Mode</span> <br />

            {
                (mode === "dark")
                    ?
                    <DarkMode
                        onClick={() => dispatch(toggleTheme())}
                        style={{
                            cursor: 'pointer',
                            color: background.hoverColor,
                            width: icon.iconSizeLarge,
                            height: icon.iconSizeLarge,
                        }}
                    />
                    :
                    <LightMode
                        onClick={() => dispatch(toggleTheme())}
                        style={{
                            cursor: 'pointer',
                            color: background.hoverColor,
                            width: icon.iconSizeLarge,
                            height: icon.iconSizeLarge,
                        }}
                    />
            }

        </div>
    )
}

export default SettingsArea