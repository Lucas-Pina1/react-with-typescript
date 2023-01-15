import { useEffect, useMemo, useState } from 'react'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailLength = useMemo(() => {
    return email.length * 1000
  }, [email.length])

  useEffect(() => {
    window.confirm('você é homem?')
      ? console.log('Homem')
      : console.log('Mulher')
  }, [])

  useEffect(() => {
    console.log(email)
  }, [email])

  useEffect(() => {
    console.log(password)
  }, [password])

  function handleEntrar() {
    console.log(email)
    console.log(password)
  }

  return (
    <div>
      <form>
        <p>Quantidade de caracteres no email: {emailLength}</p>

        <label>
          <span>Email</span>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <span>Senha</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="button" onClick={handleEntrar}>
          Entrar
        </button>
      </form>
    </div>
  )
}
