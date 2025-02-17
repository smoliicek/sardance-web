'use client'

import React, { useState } from 'react';
import Image from 'next/image';

const photos = [
    { src: '/skupina-1.jpg', alt: 'Photo 1' },
    { src: '/sar_dance.png', alt: 'Photo 2' },
    { src: '/treneri.png', alt: 'Photo 3' },
];

const Gallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState(null);

    const openLightbox = (photo) => {
        setCurrentPhoto(photo);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
        setCurrentPhoto(null);
    };

    return (
        <div>
            <h1>Photo Gallery</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {photos.map((photo, index) => (
                    <div key={index} style={{ margin: '10px', cursor: 'pointer' }} onClick={() => openLightbox(photo)}>
                        <Image src={photo.src} alt={photo.alt} width={300} height={200} className="thumbnail" />
                    </div>
                ))}
            </div>

            {isOpen && (
                <div style={lightboxStyles.overlay} onClick={closeLightbox}>
                    <div style={lightboxStyles.content} onClick={(e) => e.stopPropagation()}>
                        <Image src={currentPhoto.src} alt={currentPhoto.alt} width={800} height={600} style={lightboxStyles.image} />
                        <button style={lightboxStyles.closeButton} onClick={closeLightbox}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
};

const imageStyles = {
    thumbnail: {
        transition: 'transform 0.3s ease-in-out',
    },
    thumbnailHover: {
        transform: 'scale(1.1)',
    },
};

const lightboxStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    content: {
        position: 'relative',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
    },
    image: {
        transform: 'scale(1.1)',
        transition: 'transform 0.3s ease-in-out',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: 'transparent',
        color: '#fff',
        border: 'none',
        fontSize: '24px',
        cursor: 'pointer',
    },
};

export default Gallery;