import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import MainPage from './pages/MainPage/MainPage';
import About from './pages/About/About';
import Work from './pages/Work/Work';
import Login from './pages/Login/Login';
import Footer from './components/footer/Footer';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './pages/privateRoute/PrivateRoute';
import UserPanel from './pages/UserPanel/UserPanel';
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className='sticky'>
          <Navbar />
        </div>

        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/About' element={<About />} />
          <Route path='/Work' element={<Work/>}/>
          <Route path='/UserPanel' element={<PrivateRoute><UserPanel /></PrivateRoute>} />
          <Route path='/Login' element={<Login />} />
        </Routes>

        <div className='absolute'>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
