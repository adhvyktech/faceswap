// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import FaceSwapPage from './pages/FaceSwapPage';
import './styles/main.css';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/face-swap" component={FaceSwapPage} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;