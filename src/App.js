import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Header from './Common/Header';
import Home from './Component/Home';
import Login from './Component/Login';
import Register from './Component/Register';
import {ContextApi} from './Contest/ContestApi';
import { auth } from './Firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth'

function App() {

  const [user,setUser]=useState('');
  

   //with this use we can see the current logged user name
   const unsbscibe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const logout  = () =>{
     signOut(auth);
    return unsbscibe();
  }
  console.log(user)

  return (
    <>   
      <ContextApi.Provider value={{
        logout,
        user
      }}>
        <Router>
          <Header />
            <Routes>
               <Route path='' element={user?<Home />:<Navigate to="/login" />} />
               <Route path='login' element={user?<Home />:<Login />} />
               <Route path='register' element={user?<Home />:<Register />} />
            </Routes>
        </Router>
        </ContextApi.Provider>
    </>
  );
}

export default App;
