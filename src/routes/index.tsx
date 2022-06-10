import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages'
import Detail from '../pages/Detail'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/detail/:imdbId' element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router