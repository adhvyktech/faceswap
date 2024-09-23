// src/pages/FaceSwapPage.js
import React, { useState } from 'react';
import ImageUploader from '../components/imageuploader';
import FaceDetector from '../components/facedetector';
import FaceSwapper from '../components/faceswapper';
import ResultDisplay from '../components/resultdisplay';

function FaceSwapPage() {
    const [images, setImages] = useState({ source: null, target: null });
    const [detectedFaces, setDetectedFaces] = useState(null);
    const [resultImage, setResultImage] = useState(null);

    return (
        <div>
            <h1>Face Swap</h1>
            <ImageUploader onImagesUploaded={setImages} />
            <FaceDetector images={images} onFacesDetected={setDetectedFaces} />
            <FaceSwapper detectedFaces={detectedFaces} onSwapComplete={setResultImage} />
            <ResultDisplay resultImage={resultImage} />
        </div>
    );
}

export default FaceSwapPage;