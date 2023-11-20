import {Route, Routes} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import HomePageLogIn from '../pages/HomePageLogIn';
import Administracion from '../pages/Administracion';
import ABMPersonas from '../pages/ABMPersonas';
import PageError403 from '../pages/PageError403';
import Products from '../pages/Products';
import Contact from '../pages/Contact';
import React from 'react';

const PrivateRoute = React.lazy(()=> import ('./PrivateRoute') );

const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        {<Route path="/homePageLogged" element={<HomePageLogIn/>}/>}
        {<Route path="/pageError403" element={<PageError403/>}/>}
        {<Route path="/administracion" element={<PrivateRoute element={<Administracion/>}/>}/>}
        {<Route path="/products" element={<Products/>}/>}
        {<Route path="/contact" element={<Contact/>}/>}
        {<Route path="/ABMPersonas" element={<PrivateRoute element={<ABMPersonas/>}/>}/>}
    </Routes>
  )
}

export default AppRoutes
