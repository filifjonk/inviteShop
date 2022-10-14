
import { Route, Routes } from 'react-router-dom';
import { Basket } from './layout/pages/Basket';
import {Home} from './layout/pages/Home'
function App() {
  
  return (
    <>
    <Routes>
      <Route path= "/" element = {<Home />} exact  /> 
      <Route path= "/cart" element = {<Basket />} exact  />
    </Routes>
    </>
  );
}

export default App;
