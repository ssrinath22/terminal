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
            <g fillRule="evenodd" clipRule="evenodd">
                <path
                    fill={icon.iconColorSecondary}
                    d="M48 54H12C6.478 54 2 49.523 2 44s4.478-10 10-10a1 1 0 00.005-1.998h.015L12 32c-.771 0-1.521.08-2.251.219A5.972 5.972 0 018 28a6 6 0 0110.243-4.242s1.007.992 1.757.244c.75-.75-.343-1.658-.343-1.658a8 8 0 00-2.157-1.529C20.275 14.451 26.614 10 34 10c8.72 0 15.988 6.199 17.644 14.432l.011.004A15.954 15.954 0 0048 24a1 1 0 100 2c7.732 0 14 6.268 14 14 0 7.73-6.268 14-14 14z"
                ></path>
                <g fill="#394240">
                    <path d="M53.765 25.088C52.351 15.426 44.054 8 34 8c-8.263 0-15.353 5.012-18.402 12.16A8 8 0 006 28c0 1.818.614 3.488 1.636 4.832C3.169 34.578 0 38.914 0 44c0 6.627 5.373 12 12 12h36c8.837 0 16-7.162 16-16 0-6.803-4.251-12.598-10.235-14.912zM48 54H12C6.478 54 2 49.523 2 44s4.478-10 10-10a1 1 0 00.005-1.998h.015L12 32c-.771 0-1.521.08-2.251.219A5.972 5.972 0 018 28a6 6 0 0110.243-4.242s1.007.992 1.757.244c.75-.75-.343-1.658-.343-1.658a8 8 0 00-2.157-1.529C20.275 14.451 26.614 10 34 10c8.72 0 15.988 6.199 17.644 14.432l.011.004A15.954 15.954 0 0048 24a1 1 0 100 2c7.732 0 14 6.268 14 14 0 7.73-6.268 14-14 14z"></path>
                    <path d="M48 30a1 1 0 100 2 8 8 0 018 8 1 1 0 102 0c0-5.523-4.478-10-10-10zM18.828 35.281c-.75.734.243 1.646.243 1.646A9.973 9.973 0 0122 44a1 1 0 102 0c0-3.314-1.344-6.314-3.515-8.486 0 0-.907-.967-1.657-.233z"></path>
                </g>
            </g>
        </svg>
    );
}

export default Icon;
