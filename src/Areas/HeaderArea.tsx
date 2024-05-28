import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { Avatar, IconButton } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import ManIcon from '../assets/userIcons/ManIcon'
import { KeyboardCommandKey, Search } from '@mui/icons-material'
import SearchBar from '../components/Header/components/SearchBar'


type HeaderAreaProps = {}

const HeaderArea: React.FC<HeaderAreaProps> = ({ }) => {
    const { background, font, ui } = useSelector((state: RootState) => state.theme)
    const username = 'Sidharth Srinath'

    return (
        <div
            style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: '10px 20px',
                borderBottom: `1px solid ${background.hoverColor}`,
                boxSizing: 'border-box',
                width: '100%',
            }}
        >
            {/** Search Bar */}
            <SearchBar />

            {/** Settings & User Profile */}
            {/* <div
                style={{
                    position: 'absolute',
                    right: 20,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '100%',
                    width: '35px',
                    height: '35px',
                    backgroundColor: `${background.accentColor2}`,
                    padding: '0px',
                    boxSizing: 'border-box',
                    overflow: 'hidden',
                }}
            >
                <ManIcon
                />
            </div> */}

        </div>
    )
}

export default HeaderArea
