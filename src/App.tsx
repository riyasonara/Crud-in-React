import './App.css';
import Create from './components/Create';
import ReadData from './components/Read';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<ReadData/>}/>
      <Route path='/Create' element={<Create/>}/>
    </Routes>
    </>
  );
}

export default App;
