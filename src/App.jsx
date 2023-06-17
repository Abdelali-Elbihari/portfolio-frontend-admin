import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SideBar from './components/SideBar/SideBar';
import SecureRoute from './shared/SecureRoute';
import AboutAdmin from './pages/AboutAdmin.jsx';
import isLogin from './shared/authorization.js';
import Login from './components/Login/Login.jsx';

// import ExperienceAdmin from './pages/ExperienceAdmin';
// import SkillAdmin from './pages/SkillAdmin';
// import MessageAdmin from './pages/MessageAdmin';
// import ProjectAdmin from './pages/ProjectAdmin';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  const [isLogged, setIsLogged] = useState(isLogin);
  const login = useSelector((state) => state.login.isLogin);

  useEffect(() => {
    setIsLogged(isLogin);
  }, [login]);

  if (!isLogged) {
    return <Login />;
  }

  return (
    <div className='App'>
      <BrowserRouter>
        {isLogged && <SideBar />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<AboutAdmin />} />
          <Route path='/project' element={<NotFound />} />
          <Route path='/experience' element={<NotFound />} />
          <Route path='/skill' element={<NotFound />} />
          <Route path='/messages' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
