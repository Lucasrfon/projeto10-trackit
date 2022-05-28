import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./components/reset.css";
import './components/globalstyle.css';
import Login from './Routes/Login';
import Register from './Routes/Register';
import Habits from './Routes/Habits';
import Daily from './Routes/Daily';
import History from './Routes/History';


export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
                <Route path='/habitos' element={<Habits />} />
                <Route path='/hoje' element={<Daily />} />
                <Route path='/historico' element={<History />} />
            </Routes>
        </BrowserRouter>
    )
}