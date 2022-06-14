import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Detail } from '../pages'

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