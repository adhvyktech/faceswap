// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Welcome to the Face Swap App</h1>
            <p>Swap faces between two images easily!</p>
            <Link to="/face-swap">
                <button>Get Started</button>
            </Link>
        </div>
    );
}

export default Home;