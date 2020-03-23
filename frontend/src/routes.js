import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Chat from './pages/Chat'
export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/login" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/" exact component={Chat} />
    </BrowserRouter>
  )
}