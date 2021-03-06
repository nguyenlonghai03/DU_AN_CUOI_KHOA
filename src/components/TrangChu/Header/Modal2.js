import React from 'react'

export default function Modal2(title, Component) {
    return (
        <div style={{ width: '100%', height: '100%' }} className="modal fade" id="modelId2" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                            {<Component />}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
