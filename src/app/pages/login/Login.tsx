import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const history = useNavigate()

  function handleClick() {
    history('/pagina-inicial')
  }

  return (
    <div>
      login
      <button onClick={handleClick}>Página Inicial</button>
    </div>
  )
}
