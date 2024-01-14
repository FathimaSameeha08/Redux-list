import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './Components/Add';
import Home from './Components/Home';
import Edit from './Components/Edit';


function App() {
  return (
    <div className="App ">
     <div className='text-center bg-warning text-white p-3'>
     <Link to={'/'}><h1 className='text-white'>Students List</h1></Link>
     </div>
     <div className='p-4 text-center'>
     
      <Routes>
      <Route path='/' element={ <Home/>}/>
        <Route path='/add' element={ <Add/>}/>
        <Route path='/edit/:urlId' element={ <Edit/>}/>

      </Routes>
     </div>
     
    </div>
  );
}

export default App;
