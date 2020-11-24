import React from 'react'
import ModalVideo from 'react-modal-video';

export default function PopupVideo(props) {
    console.log('props', props);

    return (
        <ModalVideo channel='youtube' autoplay {...props} />
    )
}
