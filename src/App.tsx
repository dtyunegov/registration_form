import './App.css'
import background from './assets/images/background.png'
import React, { useEffect, useState } from "react"

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
    console.log(name)
    setInputValue({ ...values, [name]: value })
    setValidation({ ...validation, [name]: '' })
    switch (name) {
      case "login":
        if (!value.match(/^((\w|\s)+)$/g)) setValidation({ ...validation, login: 'Login is incorrect' })
        break
      case "email":
        if (!value.match(/\S{2,}@\S{1,}(\.\S{1,}){1,}/g) || [...value].filter(s => s == '@').length > 1 || value.indexOf('..') > -1) setValidation({ ...validation, email: 'Email is incorrect' })
        break
    }

    // setValidation({ ...validation, [name]: "" })
  }

  const valueTrim = (event: any) => {
    const { name, value } = event.target
    setInputValue({ ...values, [name]: value.trim() })
  }

  // const setLogin = (e: any) => {
  //   const value = e.target.value
  //   validation.login = ''
  //   setInputValue({ ...values, login: value })
  //   if (!value.match(/^((\w|\s)+)$/g)) setValidation({ ...validation, login: 'Login is incorrect' })
  // }

  const checkEmail = (e: any) => {
    setInputValue({ ...values, email: values.email.trim() })
    if (!values.email.trim()) setValidation({ ...validation, email: 'Email is required' })
  }

  const checkPassword = (e: any) => {
    if (!values.password.trim()) setValidation({ ...validation, password: 'Password is required' })
  }

  const checkConfirmPassword = (e: any) => {
    if (!values.confirmPassword.trim()) setValidation({ ...validation, confirmPassword: 'Confirm password is required' })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (!values.login.trim()) validation.login = 'Login is required'
    if (!values.login.trim()) validation.email = 'Email is required'
    if (!values.password.trim()) validation.password = 'Password is required'
    if (!values.confirmPassword.trim()) validation.confirmPassword = 'Confirm password is required'

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
          onBlur={(e) => checkEmail(e)}
          value={values.email}
        />
        {validation.email && <p className='text-red-600'>{validation.email}</p>}
        <input
          className='border border-slate-300 h-11 mt-4 pl-2 rounded-md hover:border-indigo-400 outline-indigo-400'
          type="password"
          placeholder='Password'
          name='password'
          onChange={(e) => handleChange(e)}
          onBlur={(e) => checkPassword(e)}
          value={values.password}
        />
        {validation.password && <p className='text-red-600'>{validation.password}</p>}
        <input
          className='border border-slate-300 h-11 mt-4 pl-2 rounded-md hover:border-indigo-400 outline-indigo-400'
          type="password"
          placeholder='Confirm password'
          name='confirmPassword'
          onChange={(e) => handleChange(e)}
          onBlur={(e) => checkConfirmPassword(e)}
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
