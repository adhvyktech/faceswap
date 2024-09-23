// src/components/ImageUploader.js
import React, { useState } from 'react';

function ImageUploader({ onImagesUploaded }) {
    const [images, setImages] = useState({ source: null, target: null });

    const handleFileChange = (e) => {
        const files = e.target.files;
        if (files.length === 2) {
            const newImages = {
                source: URL.createObjectURL(files[0]),
                target: URL.createObjectURL(files[1]),
            };
            setImages(newImages);
            onImagesUploaded(newImages); // Notify parent component
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleFileChange} multiple />
            <div>
                {images.source && <img src={images.source} alt="Source" />}
                {images.target && <img src={images.target} alt="Target" />}
            </div>
        </div>
    );
}

export default ImageUploader;