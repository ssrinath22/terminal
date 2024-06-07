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
    const textStyle = {
        fontSize: icon.iconDescSize,
        color: icon.iconDescColor,
        fontFamily: font.contentFont,
        fontWeight: font.contentFontWeight,
    } as React.CSSProperties
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                gap: ui.uiSpacing,
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
                    backgroundColor: `${background.tabColor}55`,
                    borderRadius: size,
                }}
            >
                <div
                    onClick={action}
                    style={{
                        position: 'absolute',
                        left: on ? 0 : size,
                        width: size,
                        height: size,
                        backgroundColor: background.tabColor,
                        borderRadius: size,
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
                fontSize: icon.iconDescSize * 1.25,
                fontWeight: font.contentFontWeight,
                color: font.contentColor,
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