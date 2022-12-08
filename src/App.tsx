import './App.css'
import background from './assets/images/background.png'
import { useState } from "react"

function App() {
  const [values, setInputValue] = useState({
    login: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [validation, setValidation] = useState({
    login: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  function handleChange(event: any) {
    const { name, value } = event.target
    setInputValue({ ...values, [name]: value })
    setValidation({ ...validation, [name]: '' })
    switch (name) {
      case "login":
        if (!value.match(/^((\w|\s)+)$/g)) setValidation({ ...validation, [name]: 'Login is incorrect' })
        break
      case "email":
        if (!value.match(/\S{2,}@\S{1,}(\.\S{1,}){1,}/g) || [...value].filter(s => s === '@').length > 1 || value.indexOf('..') > -1) setValidation({ ...validation, [name]: 'Email is incorrect' })
        break
      case "password":
        if (!value.match(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}/g)) setValidation({ ...validation, [name]: 'The password must contain: symbols, uppercase and lowercase letters, numbers. Password length must be at least 6 characters' })
        break
      case "confirmPassword":
        if (values.password !== value) setValidation({ ...validation, [name]: 'Passwords do not match' })
        break
    }
  }

  const valueTrim = (event: any) => {
    const { name, value } = event.target
    setInputValue({ ...values, [name]: value.trim() })
  }

  const handleSubmit = (event: any) => {
    if (!values.login.trim()) validation.login = 'Login is required'
    if (!values.email.trim()) validation.email = 'Email is required'
    if (!values.password.trim()) validation.password = 'Password is required'
    if (!values.confirmPassword.trim()) validation.confirmPassword = 'Confirm password is required'

    const preventDefault = Object.entries(validation).some(e => e[1])
    if (preventDefault) event.preventDefault()
    else alert("Success")

    setValidation({ ...validation })
  }

  return (
    <div className='flex justify-center w-screen h-screen' style={{ background: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
      <form className='p-10 w-96 bg-white place-self-center rounded-xl flex flex-col'>
        <p className='text-2xl'>Create an account</p>
        <p className='text-md text-slate-400'>Let’s get started with your 30 days free trial</p>
        <input
          className='border border-slate-300 h-11 mt-4 pl-2 rounded-md hover:border-indigo-400 outline-indigo-400'
          type="text"
          placeholder='Login'
          name='login'
          onChange={(e) => handleChange(e)}
          onBlur={(e) => valueTrim(e)}
          value={values.login}
        />
        {validation.login && <p className='text-red-600'>{validation.login}</p>}
        <input
          className='border border-slate-300 h-11 mt-4 pl-2 rounded-md hover:border-indigo-400 outline-indigo-400'
          type="text"
          placeholder='Email'
          name='email'
          onChange={(e) => handleChange(e)}
          onBlur={(e) => valueTrim(e)}
          value={values.email}
        />
        {validation.email && <p className='text-red-600'>{validation.email}</p>}
        <input
          className='border border-slate-300 h-11 mt-4 pl-2 rounded-md hover:border-indigo-400 outline-indigo-400'
          type="password"
          placeholder='Password'
          name='password'
          onChange={(e) => handleChange(e)}
          value={values.password}
        />
        {validation.password && <p className='text-red-600'>{validation.password}</p>}
        <input
          className='border border-slate-300 h-11 mt-4 pl-2 rounded-md hover:border-indigo-400 outline-indigo-400'
          type="password"
          placeholder='Confirm password'
          name='confirmPassword'
          onChange={(e) => handleChange(e)}
          value={values.confirmPassword}
        />
        {validation.confirmPassword && <p className='text-red-600'>{validation.confirmPassword}</p>}
        <button className='mt-5 bg-teal-500 text-2xl text-slate-100 h-11 rounded-lg font-bold hover:bg-teal-600 active:bg-teal-700'
          onClick={handleSubmit}>Sign up</button>
      </form>
    </div> 
  )
}

export default App
