import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Test from './Test';
import Tabl from './Tabl';
// import Animation from './Animation';
import Cards from './Cards';
import Conditional_rendering from './Conditional_rendering';
import Jsonplaceholder from './Jsonplaceholder';
import Api from './Api';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BreadImage from './BreadsImage';
import University_Data from './University_Data';
import Predict_age from './Predict_age';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Api />}/>
        <Route path="/jpholder" element={<Jsonplaceholder />}/>
        <Route path="/breads" element={<BreadImage />}/>
        <Route path="/universitydata" element={<University_Data/>}/>
        <Route path='/predictage' element={<Predict_age/>}></Route>
      {/* <Tabl /> */}
      {/* <Test name='Sam'/> */}
      {/* <Conditional_rendering /> */}
      {/* <Cards /> */}
      {/* <Animation/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
