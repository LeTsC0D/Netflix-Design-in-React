import Home from "./pages/home/Home";
import "./app.scss"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Watch from "./pages/watch/Watch"


const App = () => {
  return (
    <div>

  <BrowserRouter>
  <Routes>
        <Route path='/'  element={<Home/>}></Route>
        <Route path='/login'  element={<Login/>}></Route>
        <Route path='/register'  element={<Register/>}></Route>
        <Route path='/watch'  element={<Watch/>}></Route>
    </Routes>
  </BrowserRouter>

  </div>
  );
};  

export default App