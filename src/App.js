import './App.css';
import Footer from './components/Footer';
import ListClients from './components/ListClients';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewClient from './components/NewClient';
import UpdateClient from './components/UpdateClient';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<ListClients />}></Route>
            <Route path='/clients' element={<ListClients />}></Route>
            <Route path='/create' element={<NewClient />}></Route>
            <Route path='/update/:id' element={<UpdateClient />}></Route>
          </Routes>
        </div>        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
