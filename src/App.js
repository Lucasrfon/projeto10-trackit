import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import "./components/reset.css";
import './components/globalstyle.css';
import Login from './Routes/Login';
import Register from './Routes/Register';
import Habits from './Routes/Habits';
import Daily from './Routes/Daily';
import History from './Routes/History';
import UserContext from './contexts/UserContext';
import ProgressContext from './contexts/ProgressContext';

export default function App () {
    const [user, setUser] = useState({});
    const [progress, setProgress] = useState(0);

    return (
        <BrowserRouter>
            <UserContext.Provider value={{user, setUser}}>
                <ProgressContext.Provider value={{progress, setProgress}}>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/cadastro" element={<Register />} />
                        <Route path='/habitos' element={<Habits />} />
                        <Route path='/hoje' element={<Daily />} />
                        <Route path='/historico' element={<History />} />
                    </Routes>
                </ProgressContext.Provider>
            </UserContext.Provider>
        </BrowserRouter>
    )
}