import './App.css';
import Navpanel from './components/Navpanel';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Main from './pages/Main';
import Testimonials from './pages/Testimonials';
import { AnimatePresence } from 'framer-motion';

function App() {

  const location = useLocation()

  return (
    <div className="App">
      <Navpanel />
      <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path='/dealer-200' element={<Main />} />
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='/contact' element={<Testimonials />} />
            <Route path='/about' element={<Testimonials />} />
            <Route path='*' element={<Navigate to={'/dealer-200'} replace/>} />
          </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
