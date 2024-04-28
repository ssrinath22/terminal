import { useSelector } from "react-redux"
import { RootState } from "../../../app/store"
import { useEffect, useState } from "react"
import { Close } from "@mui/icons-material"

type SingleTabProps = {
    name: string
    focusedTab: string
    setFocusedTab: (name: string) => void
    handleTabClose: (tabId: string) => void
    layer: number
}

const SingleTab: React.FC<SingleTabProps> = ({ name, focusedTab, setFocusedTab, handleTabClose, layer }) => {
    const { background, font } = useSelector((state: RootState) => state.theme)
    const [hovered, setHovered] = useState<boolean>(false)

    const currId = `tab-${name}`

    const tabMinWidth = 100
    const tabMinHeight = 30
    const tabBackgroundOpacity = '40'
    const tabBackgroundColor = (focusedTab === currId) ? `${background.accentColor}${tabBackgroundOpacity}` : background.mainColor
    const tabBorderBottomColor = (focusedTab === currId) ? background.accentColor : tabBackgroundColor
    const tabBorderBottom = `1px solid  ${tabBorderBottomColor}`



    const CloseTab = () => {
        
        return (
            <>
                {hovered &&
                    <Close
                        onClick={() => {
                            handleTabClose(name)
                        }}
                        style={{
                            position: 'absolute',
                            right: 5,
                            cursor: 'pointer',
                            width: font.contentFontSize,
                            height: font.contentFontSize,
                            color: font.contentColor,
                        }}
                    />
                }
            </>
        )
    }


    return (

        <div
            id={currId}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => setFocusedTab(currId)}
            style={{
                position: 'relative',
                cursor: 'pointer',
                zIndex: layer,
                padding: '10px 30px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: tabBackgroundColor,
                fontFamily: font.contentFont,
                fontSize: font.contentFontSize,
                fontWeight: font.headerFontWeight,
                color: font.contentColor,
            }}
        >
            {name}
            {/** Close Button */}
            <CloseTab />
            {/** Pseudo Border */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    height: '3px',
                    backgroundColor: tabBorderBottomColor,
                }}
            />

        </div>
    )
}

export default SingleTab