import React from 'react'
import ReactDom from 'react-dom'
import First from './firstComp.jsx'
import NavBar from './navbarSide.jsx'
import Head from './header.jsx'
import Form from './form.jsx'

// ReactDom.render(
//     <First/>,
//     document.getElementById('root')
// );

ReactDom.render(
    <NavBar/>,
    document.getElementById('navbar')
);

ReactDom.render(
    <Head/>,
    document.getElementById('head')
);

ReactDom.render(
    <Form/>,
    document.getElementById('form')
);