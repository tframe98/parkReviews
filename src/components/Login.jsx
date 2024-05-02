import { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.prevent.default;
    try {
      const result = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password
        })
      })
      const LoggedUserData = await result.json();
      if (LoggedUserData.token) {
        sessionStorage.setItem("token", token)
      }
    } catch (error) {
      console.error("error on login fetch", error)
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label >Username:</label><br />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br />
        <label >Password</label><br />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
