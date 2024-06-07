import { DragIndicator } from "@mui/icons-material"
import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../../../../app/store"

type LineOptionButtonProps = {
    lineNum: number
    active: boolean
}

const LineOptionButton: React.FC<LineOptionButtonProps> = ({ active, lineNum }) => {
    const { background, font, ui } = useSelector((state: RootState) => state.theme)
    const [clicked, setClicked] = useState<boolean>(false)
    const [hovered, setHovered] = useState<boolean>(false)

    return (
        <>
            <DragIndicator
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                    cursor: 'grab',
                    position: 'absolute',
                    left: 0,
                    display: active || hovered ? 'flex' : 'none',
                    color: background.hoverColor,
                }}
            />
        </>
        

    )
}

export default LineOptionButton