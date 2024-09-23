// src/components/ResultDisplay.js
import React from 'react';

function ResultDisplay({ resultImage }) {
    return (
        <div>
            {resultImage && <img src={resultImage} alt="Result" />}
            <button>Download</button>
        </div>
    );
}

export default ResultDisplay;