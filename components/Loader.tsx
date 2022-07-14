import React from 'react'

const Loader = () => {
    return (
        <div className="body_loading">
            <div
                className="lds_ellipsis"
            >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader
