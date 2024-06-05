import { DragIndicator } from "@mui/icons-material"
import { useState } from "react"

type LineOptionButtonProps = {
    active: boolean
}

const LineOptionButton: React.FC<LineOptionButtonProps> = ({ active }) => {
    const [clicked, setClicked] = useState<boolean>(false)
    
    return (
        <DragIndicator
            style={{
                cursor:'grab',
                position: 'absolute',
                left: 0,
                display: active ? 'flex' : 'none',
                color: '#777',
            }}
        />
    )
}

export default LineOptionButton