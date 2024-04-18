import './App.css';
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './Layout/RootLayout/RootLayout';
import Home from './Pages/Home/Home.jsx';
import React from 'react';
import { useState } from 'react'
import ReactDOM from 'react-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSackXmark, fas } from '@fortawesome/free-solid-svg-icons'
import InvoiceList from './Pages/InvoiceList/InvoiceList.jsx';
import Invoice from './Pages/Invoice/Invoice.jsx';
import Addbill from './Pages/AddBill/Addbill.jsx';

library.add(fas)
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route index element={<Addbill />} />
        <Route path='/invoice-list' element={<InvoiceList />}/>
        <Route path='/invoice' element={<Invoice />}/>
        <Route path='/add-bill' element={<Addbill />}/>

    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
