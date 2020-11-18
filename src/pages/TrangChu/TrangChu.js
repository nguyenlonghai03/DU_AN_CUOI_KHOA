import React from 'react'
import Carousel from '../../components/TrangChu/Carousel/Carousel'
import Cinemas from '../../components/TrangChu/Cinemas/Cinemas'
import Footer from '../../components/TrangChu/Footer/Footer'
import ListFilm from '../../components/TrangChu/ListFilm/ListFilm'
import NewTrailer from '../../components/TrangChu/NewTrailer/NewTrailer'
import VideoBG from '../../components/TrangChu/Video/VideoBG'

export default function TrangChu() {
    return (
        <div>
            <Carousel />
            {/* <NewTrailer /> */}

            <VideoBG />
            <ListFilm />

            <Cinemas />
            <Footer />
        </div>
    )
}
