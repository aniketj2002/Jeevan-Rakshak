
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ContactUs from './ContactUs';
import Donate from './Pages/Donate';
import FAQ from './FAQ';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import RequestForm from './RequestForm';
import Chat from './Chat';
import Calendar from './Components/AddCalender';
import User from "./Pages/user"

function App() {
  return (
    <div className="w-[100vw] m-0 p-0 h-[100vh] overflow-y-auto overflow-x-hidden bg-[#fedcdc] lg:pt-[50px] scroll-smooth">
      <div className="lg:w-[80%] full-site:w-full w-full max-w-[1260px] bg-white h-fit mx-auto rounded-xl shadow-2xl "
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/FAQ' element={<FAQ />} />
          <Route path='/requestBlood' element={<RequestForm />} />
          <Route path='/donateBlood' element = {<Donate/>} />
          <Route path='/chat' element = {<Chat/>} />
          <Route path='/calendar' element = {<Calendar/>} />
          <Route path='/profile' element = {<User/>} />
        </Routes>
        

      </div>
    </div>




  );
}

export default App;
