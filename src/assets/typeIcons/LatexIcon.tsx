import { RootState } from '../../app/store'
import LatexImage from './latex.png'
import { useSelector } from "react-redux"

type IconProps = {
    isSmall?: boolean
}

const Icon:React.FC<IconProps> = ({isSmall=false}) => {
    const { icon } = useSelector((state: RootState) => state.theme)

    return (
        <img
            src={LatexImage}
            style={{
                width: isSmall ? icon.iconSize : 28,
                height: isSmall ? icon.iconSize : 28
            }}
        />
    )
}

export default Icon