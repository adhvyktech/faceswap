// src/components/FaceDetector.js
import React, { useEffect } from 'react';
import * as faceapi from 'face-api.js';

function FaceDetector({ images }) {
    useEffect(() => {
        const loadModels = async () => {
            const MODEL_URL = process.env.PUBLIC_URL + "/models";
            await Promise.all([
                faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
                faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
                faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
            ]);
        };
        loadModels();
    }, []);

    const detectFaces = async (image) => {
        const img = await faceapi.fetchImage(image);
        const detections = await faceapi.detectAllFaces(img).withFaceLandmarks();
        console.log(detections); // Handle detections
    };

    useEffect(() => {
        if (images.source) detectFaces(images.source);
        if (images.target) detectFaces(images.target);
    }, [images]);

    return <div>Face Detection Component</div>;
}

export default FaceDetector;