import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './components/Layouts';
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import Forgotpassword from './pages/forgot-password';

const App = () => {
     return (
          <>
               <MainLayout>
                    <BrowserRouter>
                         <Routes>
                              <Route path="/" element={<Home />} />
                              <Route path="/register" element={<Register />} />
                              <Route path="/login" element={<Login />} />
                              <Route
                                   path="/forgotPassword"
                                   element={<Forgotpassword />}
                              />
                         </Routes>
                    </BrowserRouter>
               </MainLayout>
          </>
     );
};

export default App;
