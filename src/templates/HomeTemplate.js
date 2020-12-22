import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/TrangChu/Header/Header';
import Footer from '../components/TrangChu/Footer/Footer'



// Tạo một component 2 tham số, 1 là props của route, 2 là 1 cái component, ứng dụng tạo nhiều mẫu template cho ứng dụng, thẻ Route phải khi gõ đúng đường dẫn thì hiện ra
export const HomeTemplate = (props) => {
    // console.log(props);
    let { Component, ...restParam } = props;
    return <Route {...restParam} render={(propsRoute) => {
        return <>
            <Header />
            <Component {...propsRoute} />
            <Footer />
        </>
    }} />
}