import React from "react";
import { useSelector } from "react-redux"

function Icon() {
    const { icon } = useSelector((state) => state.theme)

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={icon.iconSize}
            height={icon.iconSize}
            version="1"
            viewBox="0 0 64 64"
            xmlSpace="preserve"
        >
            <g fill={icon.iconColorMain}>
                <path d="M46 3.414L46 14 56.586 14z"></path>
                <path d="M45 16a1 1 0 01-1-1V2H8a2 2 0 00-2 2v56a2 2 0 002 2h48a2 2 0 002-2V16H45z"></path>
            </g>
            <path
                fill="#394240"
                d="M14 26a1 1 0 001 1h34a1 1 0 100-2H15a1 1 0 00-1 1zM49 37H15a1 1 0 100 2h34a1 1 0 100-2zM49 43H15a1 1 0 100 2h34a1 1 0 100-2zM49 49H15a1 1 0 100 2h34a1 1 0 100-2zM49 31H15a1 1 0 100 2h34a1 1 0 100-2zM15 20h16a1 1 0 100-2H15a1 1 0 100 2z"
            ></path>
            <path
                fill="#394240"
                d="M59.706 14.292L45.708.294A.994.994 0 0045 0H8C5.789 0 4 1.789 4 4v56c0 2.211 1.789 4 4 4h48c2.211 0 4-1.789 4-4V15a.994.994 0 00-.294-.708zM46 3.414L56.586 14H46V3.414zM58 60a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2h36v13a1 1 0 001 1h13v44z"
            ></path>
            <path fill="#231F20" d="M46 3.414L56.586 14 46 14z" opacity="0.15"></path>
        </svg>
    );
}

export default Icon;
