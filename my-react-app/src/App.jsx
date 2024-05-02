import './App.css'
import Sidebar from './Sidebar';
import { AiFillAccountBook } from "react-icons/ai";
// import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify} from 'react-icons/bs';

function App() {
  

  return (
   <div className='grid-container'>
     <Sidebar />
     <AiFillAccountBook />
   </div>
  )
}

export default App;
