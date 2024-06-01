import { ContentCopy, ExpandMoreOutlined, Refresh } from "@mui/icons-material"
import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../app/store"
type Python = {
    version:string
    src:string
}
type Package = {
    name: string
    version: string
    src?: string
}

type CondaSectionProps = {
    currSection: string
}

const CondaSection: React.FC<CondaSectionProps> = ({ currSection }) => {
    const [packagesExpanded, setPackagesExpanded] = useState<boolean>(false)
    const [pyVersionExpanded, setPyVersionExpanded] = useState<boolean>(false)
    const { background, font, ui } = useSelector((state: RootState) => state.theme)
    const packages = [
        { name: 'tensorflow', version: '1.12.0' } as Package,
        { name: 'numpy', version: '1.21.0' } as Package,
        { name: 'pandas', version: '1.3.0' } as Package,
        { name: 'scipy', version: '1.7.0' } as Package,
        { name: 'matplotlib', version: '3.4.2' } as Package,
        { name: 'scikit-learn', version: '0.24.2' } as Package,
        { name: 'keras', version: '2.4.3' } as Package,
        { name: 'pytorch', version: '1.9.0' } as Package,
        { name: 'nltk', version: '3.6.2' } as Package,
        { name: 'spacy', version: '3.0.6' } as Package,
        { name: 'plotly', version: '5.1.0' } as Package,
        { name: 'seaborn', version: '0.11.2' } as Package,
        { name: 'requests', version: '2.25.1' } as Package,
        { name: 'beautifulsoup4', version: '4.9.3' } as Package,
        { name: 'flask', version: '2.0.1' } as Package,
        { name: 'django', version: '3.2.4' } as Package,
        { name: 'pytest', version: '6.2.4' } as Package,
        { name: 'jupyter', version: '1.0.0' } as Package,
        { name: 'notebook', version: '6.4.0' } as Package,
        { name: 'ipython', version: '7.25.0' } as Package,
        { name: 'pytest-cov', version: '2.12.1' } as Package
    ]
    const python = {version: '3.10.0', src:'/usr/local/bin/python3.10'} as Python

    const isActive = (currSection === 'section-conda')

    return (
        <div
            style={{
                height: '100%',
                width: '100%',
                display: isActive ? 'flex' : 'none',
                flexDirection: 'column',
                alignItems: 'start',
                overflow: 'hidden',
                padding: '5px 5px',
                boxSizing: 'border-box',
            }}
        >
            {/** Installed Packages Title */}
            <span
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    color: font.contentColor,
                    fontFamily: font.contentFont,
                    fontWeight: font.contentFontWeight,
                    fontSize: font.contentFontSize,
                    width: '100%',
                    padding: '5px 0px',
                    gap: ui.uiSpacing,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        gap: ui.uiSpacing,
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
                            transform: packagesExpanded ? 'rotate(0deg)' : 'rotate(-90deg)',
                        }}
                    />

                    <span>Installed Packages</span>
                </div>


                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        gap: ui.uiSpacing,
                    }}
                >
                    <ContentCopy
                        style={{
                            color: font.contentColor,
                            width: font.contentFontSize,
                            height: 'auto',
                        }}
                    />
                    <Refresh
                        style={{
                            color: font.contentColor,
                            width: font.contentFontSize,
                            height: 'auto',
                        }}
                    />
                </div>
            </span>

            {/** Installed Packages list */}
            <div
                style={{
                    position: 'relative',
                    width: '95%',
                    alignSelf: 'end',
                    color: font.contentColor,
                    fontFamily: font.contentFont,
                    fontWeight: font.contentFontWeight,
                    fontSize: font.contentFontSize,
                    display: packagesExpanded ? 'flex' : 'none',
                    flexDirection: 'column',
                    textAlign: 'start',
                    borderLeft: ui.border,
                }}
            >
                {packages.map((v, i) => {
                    return (
                        <span
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '5px 20px',
                            }}
                        >
                            <span>{v.name}</span>
                            <span>{v.version}</span>
                        </span>
                    )
                })}
            </div>

            {/** Python Info Title */}
            <span
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    color: font.contentColor,
                    fontFamily: font.contentFont,
                    fontWeight: font.contentFontWeight,
                    fontSize: font.contentFontSize,
                    width: '100%',
                    padding: '5px 0px',
                    gap: ui.uiSpacing,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        gap: ui.uiSpacing,
                    }}
                >
                    <ExpandMoreOutlined
                        onClick={() => setPyVersionExpanded(!pyVersionExpanded)}
                        style={{
                            cursor: 'pointer',
                            color: font.contentColor,
                            fontFamily: font.contentFont,
                            fontWeight: font.contentFontWeight,
                            fontSize: font.contentFontSize,
                            transform: pyVersionExpanded ? 'rotate(0deg)' : 'rotate(-90deg)',
                        }}
                    />

                    <span>Python</span>
                </div>


                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        gap: ui.uiSpacing,
                    }}
                >
                    <ContentCopy
                        style={{
                            color: font.contentColor,
                            width: font.contentFontSize,
                            height: 'auto',
                        }}
                    />
                    <Refresh
                        style={{
                            color: font.contentColor,
                            width: font.contentFontSize,
                            height: 'auto',
                        }}
                    />
                </div>
            </span>

            {/** Python Info list */}
            <div
                style={{
                    position: 'relative',
                    width: '95%',
                    alignSelf: 'end',
                    color: font.contentColor,
                    fontFamily: font.contentFont,
                    fontWeight: font.contentFontWeight,
                    fontSize: font.contentFontSize,
                    display: pyVersionExpanded ? 'flex' : 'none',
                    flexDirection: 'column',
                    textAlign: 'start',
                    borderLeft: ui.border,
                }}
            >

                <span
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '5px 20px',
                    }}
                >
                    <span>{python.src}</span>
                    <span>{python.version}</span>
                </span>
            </div>

        </div>
    )
}

export default CondaSection