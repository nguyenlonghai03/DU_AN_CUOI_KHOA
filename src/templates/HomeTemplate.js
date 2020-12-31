import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/TrangChu/Header/Header';
import Footer from '../components/TrangChu/Footer/Footer'



// Tạo một component 2 tham số, 1 là props của route, 2 là 1 cái component, ứng dụng tạo nhiều mẫu template cho ứng dụng, thẻ Route phải khi gõ đúng đường dẫn thì hiện ra
export const HomeTemplate = (props) => {



    useEffect(() => {
        // Vị trí của croll trước 
        const nav = document.querySelector('nav');
        // console.log("NAVVVVVVVVVV", nav)
        let prevScrollpos = window.pageYOffset;
        // console.log(prevScrollpos)
        window.addEventListener('scroll', () => {
            //Vị trí của scroll sau 
            let currentScrollPos = window.pageYOffset;
            // Nếu vị trí scroll theo trục y trước < sau thì thêm class ẩn vào 
            if (prevScrollpos < currentScrollPos) {
                nav.classList.add('hide');
            } else {
                nav.classList.remove('hide');
            }
            prevScrollpos = currentScrollPos;
        })
    }, [])

    console.log(props);
    let { Component, ...restParam } = props;
    return <Route {...restParam} render={(propsRoute) => {
        return <>
            <Header />
            <Component {...propsRoute} />
            <Footer />
        </>
    }} />
}
