import './App.css';
import background from './assets/images/background.png';

function App() {
  return (
    <div className='flex justify-center w-screen h-screen' style={{ background: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
      <form className='p-10 w-96 bg-white place-self-center rounded-xl flex flex-col'>
        <p className='text-2xl'>Create an account</p>
        <p className='text-md text-slate-400'>Let’s get started with your 30 days free trial</p>
        <input className='border border-slate-300 h-11 mt-4 pl-2 rounded-md hover:border-indigo-400 outline-indigo-400' type="text" placeholder='name'></input>
        <input className='border border-slate-300 h-11 mt-4 pl-2 rounded-md hover:border-indigo-400 outline-indigo-400' type="text" placeholder='email'></input>
        <input className='border border-slate-300 h-11 mt-4 pl-2 rounded-md hover:border-indigo-400 outline-indigo-400' type="password" placeholder='password'></input>
        <input className='border border-slate-300 h-11 mt-4 pl-2 rounded-md hover:border-indigo-400 outline-indigo-400' type="password" placeholder='confirm password'></input>
        <button className='mt-5 bg-teal-500 text-2xl text-slate-100 h-11 rounded-lg font-bold hover:bg-teal-600 active:bg-teal-700'>Sign up</button>
      </form>
    </div> 
  );
}

export default App;
