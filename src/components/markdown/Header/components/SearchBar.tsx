import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../../app/store"
import { Close, Search } from "@mui/icons-material"

type SearchBarProps = {}

const SearchBar: React.FC<SearchBarProps> = ({ }) => {
    const { background, font, icon, ui } = useSelector((state: RootState) => state.theme)
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const divRef = useRef<HTMLDivElement>(null)

    const bgOpacity = isHovered || isFocused ? '33' : '22'
    const border = isFocused ? `1px solid ${'#AAD7D9'}77` : `1px solid ${background.hoverColor}`

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (divRef.current && !divRef.current.contains(event.target as Node)) {
                setIsFocused(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [divRef])


    return (
        <div
            style={{
                backgroundColor: background.mainColor,
                borderRadius: ui.elementBorderRadius,
            }}
        >
            <div
                ref={divRef}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsFocused(true)}
                style={{
                    position: 'relative',
                    cursor: isFocused ? 'default' : 'pointer',
                    alignSelf: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: ui.uiSpacing,
                    border,
                    borderRadius: ui.searchBarBorderRadius,
                    borderBottomLeftRadius: isFocused ? 0 : ui.searchBarBorderRadius,
                    borderBottomRightRadius: isFocused ? 0 : ui.searchBarBorderRadius,
                    padding: ui.uiSpacing,
                    width: isFocused ? '600px' : '300px',
                    height: '40px',
                    font: font.contentFont,
                    fontSize: font.contentFontSize,
                    fontFamily: font.contentFont,
                    fontWeight: font.contentFontWeight,
                    color: font.contentColor,
                    backgroundColor: isFocused ? `${background.accentColor3}44` : `${background.accentColor3}${bgOpacity}`,
                    userSelect: 'none',
                    boxSizing: 'border-box',
                }}
            >
                <div
                    style={{
                        display: isFocused ? 'none' : 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: ui.uiSpacing,
                    }}
                >
                    <span
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: ui.uiSpacing,
                            borderRadius: ui.elementBorderRadius,
                            backgroundColor: background.accentColor2,
                            padding: '5px',
                            color: background.mainColor,
                        }}
                    >
                        ⌘K
                    </span>

                    <span>
                        Search Anything
                    </span>
                </div>
                <div
                    style={{
                        display: isFocused ? 'flex' : 'none',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: ui.uiSpacing,
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <input
                        style={{
                            width: '100%',
                            height: '100%',
                            border: 'none',
                            outline: 'none',
                            font: font.contentFont,
                            fontSize: font.contentFontSize,
                            fontFamily: font.contentFont,
                            fontWeight: font.contentFontWeight,
                            backgroundColor: 'transparent',
                            color: font.contentColor,
                        }}
                    />
                    <div
                        style={{
                            height: '100%',
                        }}
                    >
                        <Search
                            style={{
                                width: icon.iconSize,
                                height: 'auto',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'end',
                                color: font.contentColor,
                            }}
                        />
                    </div>

                </div>

                <div
                    style={{
                        backgroundColor: background.mainColor,
                        position: 'absolute',
                        zIndex: 2,
                        top: '100%',
                        display: isFocused ? 'flex' : 'none',
                    }}
                >
                    <span
                        style={{
                            width: '600px',
                            minHeight: '100px',
                            maxHeight: '400px',
                            overflowY: 'auto',
                            flexGrow: 1,
                            padding: ui.uiSpacing,
                            backgroundColor: `${background.accentColor3}${bgOpacity}`,
                            backdropFilter: 'blur(10px)',
                            border,
                            borderBottomLeftRadius: ui.searchBarBorderRadius,
                            borderBottomRightRadius: ui.searchBarBorderRadius,
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                            boxSizing: 'border-box',
                        }}>
                            Hello World

                    </span>
                </div>

            </div>
        </div>
    )
}

export default SearchBar