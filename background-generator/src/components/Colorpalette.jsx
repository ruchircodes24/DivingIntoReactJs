import React from 'react'

function Colorpalette({color, btnText}) {
    const updateColor = () => {
        document.body.style.backgroundColor = `${color}`
    }
    return (
        <>
            <button
                type="button"
                className={`rounded-md bg-${color}-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-${color}-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}-600`}onClick={updateColor}
            >
                {btnText}
            </button>
        </>
    )
}

export default Colorpalette
