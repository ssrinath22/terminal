import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import SearchBar from '../../components/markdown/Header/components/SearchBar'


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
                backgroundColor: background.headerColor,
            }}
        >
            {/** Search Bar */}
            <SearchBar />

        </div>
    )
}

export default HeaderArea
