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
    const border = isFocused ? ui.border : ui.border

    const searchShortcut = '⌘K'
    const searchPlaceholder = 'Search through notes, docs, etc...'

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
                borderRadius: ui.searchBarBorderRadius,
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
                    borderRadius: isFocused ? ui.elementBorderRadius : ui.searchBarBorderRadius,
                    borderBottomLeftRadius: isFocused ? 0 : ui.searchBarBorderRadius,
                    borderBottomRightRadius: isFocused ? 0 : ui.searchBarBorderRadius,
                    padding: ui.uiSpacing,
                    width: isFocused ? '500px' : '275px',
                    height: '40px',
                    font: font.contentFont,
                    fontSize: font.contentFontSize,
                    fontFamily: font.contentFont,
                    fontWeight: font.contentFontWeight,
                    color: font.contentColor,
                    backgroundColor: background.searchBarColor,
                    userSelect: 'none',
                    boxSizing: 'border-box',
                }}
            >
                <div
                    style={{
                        display: isFocused ? 'none' : 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: ui.uiSpacing*2,
                        width: '100%',
                    }}
                >
                    <span
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: font.editorFontSize,
                            fontWeight: font.headerFontWeight,
                            padding: '2px',
                            borderRadius: ui.elementBorderRadius,
                            color: font.contentColor,
                        }}
                    >
                        {searchShortcut}
                    </span>

                    <span
                        style={{
                            fontSize: font.editorFontSize,
                            color: font.contentColor,
                        }}
                    >
                        {searchPlaceholder}
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
                            fontSize: font.editorFontSize,
                            color: font.editorFontColor,
                            fontWeight: font.contentFontWeight,
                            background: 'none',
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
                        position: 'absolute',
                        zIndex: 2,
                        top: '100%',
                        display: isFocused ? 'flex' : 'none',
                    }}
                >
                    <span
                        style={{
                            width: '500px',
                            minHeight: '100px',
                            maxHeight: '400px',
                            overflowY: 'auto',
                            flexGrow: 1,
                            padding: ui.uiSpacing,
                            backgroundColor: background.searchBarColor,
                            backdropFilter: 'blur(10px)',
                            border,
                            borderBottomLeftRadius: ui.elementBorderRadius,
                            borderBottomRightRadius: ui.elementBorderRadius,
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                            boxSizing: 'border-box',
                        }}>

                    </span>
                </div>

            </div>
        </div>
    )
}

export default SearchBar