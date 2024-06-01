import { Add } from "@mui/icons-material"
import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../app/store"

type AddTabProps = {
    addTab: (arg0: string) => void
    openTabs: string[]
}

const AddTab: React.FC<AddTabProps> = ({ addTab, openTabs }) => {
    const { background, font, ui } = useSelector((state: RootState) => state.theme)
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const [getTabNameActivated, setGetTabNameActivated] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const handleNewTabOpened = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(error) setError(false)
        if (e.key === 'Enter') {
            //check for duplicate tab error
            if (openTabs.includes(e.currentTarget.value)) {
                // e.currentTarget.value = "Duplicate Name"
                setError(true)
                e.currentTarget.value = ""
                setIsHovered(false)
            }
            else {
                addTab(e.currentTarget.value)
                e.currentTarget.value = ""
                setGetTabNameActivated(false)
                setIsHovered(false)
            }
        }
    }

    return (
        <div
            style={{
                position: 'relative',
                cursor: 'default',
                padding: '7px 7px',
                backgroundColor: isHovered && !getTabNameActivated ? background.hoverColor : background.mainColor,
                borderRadius: ui.elementBorderRadius,
                userSelect: 'none',
            }}
        >
            {!getTabNameActivated ?
                <Add
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => setGetTabNameActivated(true)}
                    style={{
                        display: !getTabNameActivated ? 'auto' : 'none',
                        color: font.contentColor,
                        width: font.contentFontSize,
                        height: 'auto',
                    }}
                />
                :
                <input
                    autoFocus
                    placeholder="New Tab"
                    type='text'
                    style={{
                        display: 'flex',
                        width: 'auto',
                        maxWidth: '80px',
                        fontFamily: font.contentFont,
                        fontSize: font.contentFontSize,
                        fontWeight: font.contentFontWeight,
                        color: font.contentColor,
                        outline: 'none',
                        border: 'none',
                        padding: '0px 10px',
                        backgroundColor: 'transparent',
                    }}
                    onBlur={() => setGetTabNameActivated(false)}
                    onKeyDown={handleNewTabOpened}
                />
            }

            <div
                style={{
                    zIndex: 100000000,
                    position: 'absolute',
                    top: '110%',
                    right: 0,
                    width: '150px',
                    height: '30px',
                    display: error ? 'flex' : 'none',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: background.mainColor,
                    backgroundColor: background.accentColor2,
                    borderRadius: ui.elementBorderRadius,
                    fontFamily: font.contentFont,
                    fontSize: font.contentFontSize,
                    fontWeight: font.contentFontWeight * 2,
                }}
            >
                Duplicate Tab Name
            </div>


        </div>
    )
}

export default AddTab