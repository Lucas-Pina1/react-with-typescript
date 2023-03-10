import React from 'react'
import {
  Route,
  Routes as Switch,
  Navigate,
  BrowserRouter,
} from 'react-router-dom'

import { Dashboard, Login } from '../pages'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" element={<Login />} />
        <Route path="/pagina-inicial" element={<Dashboard />} />

        <Route path="*" element={<Navigate to="pagina-inicial" />} />
      </Switch>
    </BrowserRouter>
  )
}
