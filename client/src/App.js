import './App.css';
import socketIO from 'socket.io-client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './PAGES/Home';
import Chat from './PAGES/Chat';

const socket = socketIO.connect('http://localhost:4000');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/chat' element={ <Chat socket={ socket } /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
