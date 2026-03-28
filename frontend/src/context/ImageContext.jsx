import React, { createContext, useContext, useState, useEffect } from 'react';

const ImageContext = createContext(null);

export const ImageProvider = ({ children }) => {
    const [overrides, setOverrides] = useState({});

    const fetchOverrides = async () => {
        try {
            const res = await fetch('/api/images');
            if (res.ok) {
                const data = await res.json();
                setOverrides(data);
            }
        } catch (e) {
            console.error('Failed to fetch image overrides', e);
        }
    };

    useEffect(() => {
        fetchOverrides();
    }, []);

    return (
        <ImageContext.Provider value={{ overrides, refreshOverrides: fetchOverrides }}>
            {children}
        </ImageContext.Provider>
    );
};

export const useImageOverrides = () => useContext(ImageContext);
