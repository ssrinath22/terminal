import { ExpandMoreOutlined } from "@mui/icons-material"
import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../app/store"

type CondaSectionProps = {
    currSection:string
}

const CondaSection:React.FC<CondaSectionProps> = ({currSection}) => {
    const [packagesExpanded, setPackagesExpanded] = useState<boolean>(false)
    const { background, font, ui } = useSelector((state: RootState) => state.theme)
    const packages = ['tensorflow', 'pytorch', 'scikit-learn', 'matplotlib', ]

    const isActive = (currSection === 'section-conda' )

    return(
        <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: isActive ? 'flex' : 'none',
                    flexDirection: 'column',
                    alignItems: 'start',
                    border: ui.border,
                    borderLeftWidth: 0,
                    borderTopRightRadius: ui.elementBorderRadius,
                    borderBottomRightRadius: ui.elementBorderRadius,
                    overflow: 'hidden',
                    padding: '5px 5px',
                    boxSizing: 'border-box',
                }}
            >
                <span
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                        color: font.contentColor,
                        fontFamily: font.contentFont,
                        fontWeight: font.contentFontWeight,
                        fontSize: font.contentFontSize,
                        width: '100%',
                        borderBottom: ui.border,
                        padding: '5px 5px',
                        gap: ui.uiSpacing
                    }}
                >
                    <ExpandMoreOutlined
                        onClick={() => setPackagesExpanded(!packagesExpanded)}
                        style={{
                            cursor: 'pointer',
                            color: font.contentColor,
                            fontFamily: font.contentFont,
                            fontWeight: font.contentFontWeight,
                            fontSize: font.contentFontSize,
                            transform: packagesExpanded ? 'rotate(-90deg)' : 'rotate(0deg)',
                        }}
                    />

                    Installed Packages
                </span>

            </div>
    )
}

export default CondaSection