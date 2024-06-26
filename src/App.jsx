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
import AddCustom from './Pages/AddCustom/AddCustom.jsx';
import AddSal from './Pages/AddSal/AddSal.jsx';
import AddTrans from './Pages/AddTrans/AddTrans.jsx';
import BillDetails from './Pages/BillDetails/BillDetails.jsx';
import AddBuyingBill from './Pages/AddBuyingBill/AddBuyingBill.jsx';
import AddGoods from './Pages/AddGoods/AddGoods.jsx';
import Translation from './Pages/Translation/Translation.jsx';
import Client from './Pages/Client/Client.jsx';
import Contract from './Pages/Contract/Contract.jsx';
import BillsList from './Pages/BillsList/BillsList.jsx';

library.add(fas)
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route index element={<Addbill />} />
        <Route path='/invoice-list' element={<InvoiceList />}/>
        <Route path='/invoice' element={<Invoice />}/>
        <Route path='/add-bill' element={<Addbill />}/>
        <Route path='/bills-list' element={<BillsList />}/>
        <Route path='/add-custom' element={<AddCustom />}/>
        <Route path='/add-sal' element={<AddSal />}/>
        <Route path='/add-goods' element={<AddGoods />}/>
        <Route path='/add-trans' element={<AddTrans />}/>
        <Route path='/bill-details' element={<BillDetails />}/>
        <Route path='/add-new-bill' element={<AddBuyingBill />}/>
        <Route path='/translation' element={<Translation />}/>
        <Route path='/client' element={<Client />}/>
        <Route path='/contract' element={<Contract />}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
