// src/utils/faceApi.js
import * as faceapi from 'face-api.js';

export const loadModels = async () => {
    const MODEL_URL = process.env.PUBLIC_URL + "/models";
    await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
    ]);
};

export const detectFaces = async (image) => {
    const img = await faceapi.fetchImage(image);
    const detections = await faceapi.detectAllFaces(img).withFaceLandmarks();
    return detections;
};

// Additional functions for face swapping would go here