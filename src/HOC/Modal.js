import React from 'react'

export default function Modal(text) {
    return (
        <div>
            <div>
                <input id="button" type="checkbox" />
                <label htmlFor="button">Click Me!</label>
                <div className="modal">
                    <div className="content">{text}</div>
                </div>
            </div>
        </div>
    )
}
