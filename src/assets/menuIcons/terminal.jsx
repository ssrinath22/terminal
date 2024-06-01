import React from "react";
import { useSelector } from "react-redux"

function Icon() {
    const { icon } = useSelector((state) => state.theme)

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={icon.iconSizeMed}
            height={icon.iconSizeMed}
            viewBox="0 0 64 64"
            xmlSpace="preserve"
        >
            <path fill="#506C7F" d="M2 20H62V28H2z"></path>
            <g fill={icon.iconColorMain}>
                <path d="M2 52a2 2 0 002 2h56a2 2 0 002-2V30H2v22zM60 10H4a2 2 0 00-2 2v6h60v-6a2 2 0 00-2-2z"></path>
            </g>
            <path
                fill={"#394240"}
                d="M60 8H4c-2.211 0-4 1.789-4 4v40c0 2.211 1.789 4 4 4h56c2.211 0 4-1.789 4-4V12c0-2.211-1.789-4-4-4zm2 44a2 2 0 01-2 2H4a2 2 0 01-2-2V30h60v22zm0-24H2v-8h60v8zm0-10H2v-6a2 2 0 012-2h56a2 2 0 012 2v6z"
            ></path>
            <path
                fill="#394240"
                d="M11 40h14a1 1 0 100-2H11a1 1 0 100 2zM29 40h6a1 1 0 100-2h-6a1 1 0 100 2zM11 46h10a1 1 0 100-2H11a1 1 0 100 2zM45 46h8a1 1 0 001-1v-6a1 1 0 00-1-1h-8a1 1 0 00-1 1v6a1 1 0 001 1zm1-6h6v4h-6v-4z"
            ></path>
            <path fill="#F9EBB2" d="M46 40H52V44H46z"></path>
        </svg>
    );
}

export default Icon;
