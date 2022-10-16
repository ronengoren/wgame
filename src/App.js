import './App.css';

import * as React from 'react';
import { useEffect, useState } from 'react';
import Div100vh from 'react-div-100vh';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import CreateGame from './screens/CreateGame';
import Home from './screens/Home';
import SharedWordls from './screens/SharedWordls';
import Wordle from './screens/Wordle';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/Wgame" element={<Home />} />
                <Route path="/Wgame/wordle" element={<Wordle />} />
                <Route path="/Wgame/create_game" element={<CreateGame />} />
                <Route path="/Wgame/user_wordles" element={<SharedWordls />} />
            </Routes>
        </Router>
    );
}
export default App;
