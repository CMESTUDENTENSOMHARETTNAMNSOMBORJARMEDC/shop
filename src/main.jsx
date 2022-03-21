import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Shop from './Shop'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Navigation from './partials/Navigation'


ReactDOM.render(
  <React.StrictMode>
  	<RecoilRoot>
  		<Router>
				<Navigation />
				<div>_</div>
  			<Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/products" element={<Products /> } />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
  		</Router>
  	</RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
