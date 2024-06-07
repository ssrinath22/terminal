import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { DarkMode, LightMode, NightShelter } from "@mui/icons-material"
import { toggleTheme } from '../../features/theme/themeSlice'
import { toggleDescriptions } from "../../features/settings/settingsSlice"

type OnOffSwitchProps = {
    action: () => void
    on: boolean
    onDesc: string
    offDesc: string
}

const OnOffSwitch: React.FC<OnOffSwitchProps> = ({ action, on, onDesc, offDesc }) => {
    const { background, font, ui, icon } = useSelector((state: RootState) => state.theme)

    const size = icon.iconSize
    const ballLoc = on ? 'start' : 'end'
    const textStyle = {
        fontSize: icon.iconDescSize,
        color: font.contentColor,
        fontFamily: font.contentFont,
        fontWeight: font.contentFontWeight,
    } as React.CSSProperties
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                gap: ui.uiSpacing,
                border: ui.border,
            }}
        >
            <span style={textStyle}>{onDesc}</span>
            <div
                style={{
                    position: 'relative',
                    width: 2 * size,
                    height: size,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    boxSizing: 'border-box',
                    backgroundColor: `${background.searchBarColor}55`,
                    border: ui.border,
                    borderRadius: size,
                }}
            >
                <div
                    onClick={action}
                    style={{
                        zIndex: 2,
                        position: 'absolute',
                        left: on ? 0 : size,
                        width: size,
                        height: size,
                        backgroundColor: background.searchBarColor,
                        borderRadius: size,
                        border: ui.border,
                        transition: 'left .2s',
                    }}
                />
            </div>
            <span style={textStyle}>{offDesc}</span>
        </div>

    )
}
type SettingsAreaProps = {
    name: string
    activeSection: string
}

const SettingsArea: React.FC<SettingsAreaProps> = ({ name, activeSection }) => {
    const dispatch = useDispatch()
    const { background, font, ui, icon, mode } = useSelector((state: RootState) => state.theme)
    const {accessibility} = useSelector((state: RootState) => state.settings)
    const { userInfo } = useSelector((state: RootState) => state.user)
    const isActive = (`section-${name}` === activeSection)

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: isActive ? 'flex' : 'none',
                gap: ui.uiSpacing * 2,
                textAlign: 'start',
                flexDirection: 'column',
                boxSizing: 'border-box',
                padding: '20px 20px',
                fontFamily: font.contentFont,
                fontSize: icon.iconDescSize,
                fontWeight: font.contentFontWeight,
                color: font.contentColor,
                backgroundColor: 'red',
            }}
        >
            <span> Theme Mode</span>
            <OnOffSwitch
                action={() => dispatch(toggleTheme())}
                on={mode === 'default'}
                onDesc={"light"}
                offDesc={"dark"}
            />
            <br />
            <span>Descriptions</span>
            <OnOffSwitch
                action={() => dispatch(toggleDescriptions())}
                on={accessibility.descriptions === true}
                onDesc={"on"}
                offDesc={"off"}
            />



        </div>
    )
}

export default SettingsArea