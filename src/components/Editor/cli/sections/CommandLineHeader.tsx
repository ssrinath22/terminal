import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../../app/store"

type CommandLineHeaderProps = {
    currentDirectory: string
    setCurrentDirectory: (directory: string) => void
    currentBranch: string
    setCurrentBranch: (branch: string) => void
}

const CommandLineHeader: React.FC<CommandLineHeaderProps> = ({ currentDirectory, setCurrentDirectory, currentBranch, setCurrentBranch }) => {
    /** global states */
    const { background, font } = useSelector((state: RootState) => state.theme)
    const user = useSelector((state: RootState) => state.user)

    /** user id states */
    const [userIdMode, setUserIdMode] = useState<'username' | 'email'>('username')
    const [userIdHovered, setUserIdHovered] = useState<boolean>(false)

    /** dir states */
    const [dirMode, setdirMode] = useState<'show' | 'hide'>('show')
    const [dirHovered, setDirHovered] = useState<boolean>(false)

    /** git states */
    const [gitHovered, setGitHovered] = useState<boolean>(false)

    /** general style */
    const generalPadding = '3px 3px'
    const generalBorderRadius = '5px'
    const hoverOpacity = 40

    /** header style */
    const headerSpacing = 0
    const headerBackgroundOpacity = '00' //TODO: this background is hidden for now
    const headerBackgroundColor = `${background.accentColor}${headerBackgroundOpacity}`
    // const headerBackgroundColor = 'rgba(255,0,0,.1)'

    const headerdBorderRadius = generalBorderRadius

    /** user id style */
    const userIdBackgroundOpacity = hoverOpacity
    const userIdBackgroundColor = userIdHovered ? `${background.accentColor}${userIdBackgroundOpacity}` : 'transparent'
    const userIdPadding = generalPadding
    const userIdBorderRadius = generalBorderRadius

    /** dir style */
    const dirBackgroundOpacity = hoverOpacity
    const dirBackgroundColor = dirHovered ? `${background.accentColor}${dirBackgroundOpacity}` : 'transparent'
    const dirPadding = generalPadding
    const dirBorderRadius = generalBorderRadius

    /** git style */
    const gitBackgroundOpacity = hoverOpacity
    const gitBackgroundColor = gitHovered ? `${background.accentColor}${dirBackgroundOpacity}` : 'transparent'
    const gitPadding = generalPadding
    const gitBorderRadius = generalBorderRadius

    return (
        <div
            style={{
                height: '100%',
                backgroundColor: headerBackgroundColor,
                color: font.contentColor,
                fontFamily: font.contentFont,
                fontWeight: font.contentFontWeight,
                fontSize: font.contentFontSize,
                borderRadius: headerdBorderRadius,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'start',
                alignItems: 'start',
                gap: headerSpacing,
                
            }}
        >
            {/** username */}
            <div
                onClick={() => setUserIdMode(userIdMode === 'username' ? 'email' : 'username')}
                onMouseEnter={() => setUserIdHovered(true)}
                onMouseLeave={() => setUserIdHovered(false)}
                style={{
                    cursor: 'pointer',
                    padding: userIdPadding,
                    borderRadius: userIdBorderRadius,
                    backgroundColor: userIdBackgroundColor,
                    fontWeight: font.headerFontWeight,
                }}
            >
                <span>{userIdMode === 'username' ? user.username : user.email}</span>
            </div>

            {/** delimiter */}
            <div
                style={{
                    fontWeight: font.headerFontWeight,
                    padding: generalPadding,
                }}
            >
                <span>{user.cli_delimiter && `${user.cli_delimiter}`}</span>
            </div>

            {/** user dir section */}
            <div
                onMouseEnter={() => setDirHovered(true)}
                onMouseLeave={() => setDirHovered(false)}
                style={{
                    fontWeight: font.headerFontWeight,
                    padding: dirPadding,
                    cursor: 'pointer',
                    borderRadius: dirBorderRadius,
                    backgroundColor: dirBackgroundColor,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }}
            >
                {/** dir */}
                <span>{currentDirectory}</span>
            </div>

            {/** delimiter */}
            <div
                style={{
                    fontWeight: font.headerFontWeight,
                    padding: generalPadding,
                }}
            >
                <span>{user.cli_delimiter && `${user.cli_delimiter}`}</span>
            </div>

            {/** user dir section */}
            <div
                onMouseEnter={() => setGitHovered(true)}
                onMouseLeave={() => setGitHovered(false)}
                style={{
                    fontWeight: font.headerFontWeight,
                    padding: gitPadding,
                    cursor: 'pointer',
                    borderRadius: gitBorderRadius,
                    backgroundColor: gitBackgroundColor,
                }}
            >
                {/** dir */}
                <span>{`(${currentBranch})`}</span>
            </div>

            <div
                style={{
                    fontWeight: font.headerFontWeight,
                    padding: generalPadding,
                }}
            >
                {user.cli_ending && `${user.cli_ending}`}
            </div>

        </div>
    )
}

export default CommandLineHeader