import { KeyboardCommandKey } from "@mui/icons-material"
import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../../app/store"

type SearchBarProps = {}

const SearchBar: React.FC<SearchBarProps> = ({ }) => {
    const { background, font, ui } = useSelector((state: RootState) => state.theme)
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [searchVal, setSearchVal] = useState<string>('')

    const bgOpacity = isHovered || isFocused ? 'AA' : '77'

    const border = isHovered ?`2px solid ${'#5C88C4'}` : `2px solid ${background.hoverColor}${bgOpacity}`


    const iconStyle = {
        font: font.contentFont,
        fontSize: font.contentFontSize,
        fontFamily: font.contentFont,
        fontWeight: font.contentFontWeight,
    } as React.CSSProperties

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsFocused(true)}
            style={{
                cursor: 'pointer',
                position:'relative',
                alignSelf: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: ui.uiSpacing,
                border,
                borderRadius: ui.elementBorderRadius,
                padding: '10px',
                width: '300px',
                // width: isFocused ? '900px' : 'auto',
                height: '40px',
                font: font.contentFont,
                fontSize: font.contentFontSize,
                fontFamily: font.contentFont,
                fontWeight: font.contentFontWeight,
                color: '#777777',
                backgroundColor: `${background.hoverColor}${bgOpacity}`,
                userSelect: 'none',
                boxSizing: 'border-box',
            }}
        >
            {!isFocused ?
                <div
                    style={{
                        display: 'flex',
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
                        }}
                    >   
                        
                        <KeyboardCommandKey style={iconStyle} />
                        <>K</>
                    </span>
                    <> | </>
                    <span>Search</span>
                </div>
                :
                <input
                    type='text'
                    onBlur={() => setIsFocused(false)}
                    value={searchVal}
                    style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        outline: 'none',
                        font: font.contentFont,
                        fontSize: font.contentFontSize,
                        fontFamily: font.contentFont,
                        fontWeight: font.contentFontWeight,
                        color: font.contentColor,
                        width: '100%',
                    }}
                    onChange={(e) => setSearchVal(e.currentTarget.value)}
                    autoFocus
                />
            }
            <div

                style={{
                    zIndex:10000000,
                    position:'absolute',
                    display: isFocused ? 'flex' : 'none',
                    top: '120%',
                    left: 0,
                    width: '100%',
                    backgroundColor: `${background.hoverColor}`,
                    backdropFilter: 'blur(10px)',
                    border: ui.border,
                    borderRadius: ui.elementBorderRadius,
                    padding: '10px',
                    font: font.contentFont,
                    fontSize: font.contentFontSize,
                    fontFamily: font.contentFont,
                    fontWeight: font.contentFontWeight,
                    color: font.contentColor,
                    gap: ui.uiSpacing,
                    boxSizing: 'border-box',
                }}
            >
                <span>Searching For {searchVal.length > 0 ? searchVal : "..."}</span>
            </div>
        </div>
    )
}

export default SearchBar