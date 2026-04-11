import * as React from "react"
const Caret = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={14}
        fill="none"
        {...props}
    >
        <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M11.62 5.22 7.819 9.025c-.45.45-1.185.45-1.634 0L2.381 5.221"
        />
    </svg>
)
export default Caret