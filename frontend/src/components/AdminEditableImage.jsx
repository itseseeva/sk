import React, { useState, useRef } from 'react';
import { Camera } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useImageOverrides } from '../context/ImageContext';

export default function AdminEditableImage({ targetId, defaultSrc, className, alt }) {
    const { user, token } = useAuth();
    const { overrides, refreshOverrides } = useImageOverrides();
    const [uploading, setUploading] = useState(false);
    const fileInputRef = useRef(null);
    
    // Check strict email validation
    const isAdmin = user?.email === 'eseeva228@gmail.com';
    const currentSrc = overrides?.[targetId] || defaultSrc;

    const handleClick = (e) => {
        if (!isAdmin) return;
        e.preventDefault();
        e.stopPropagation();
        fileInputRef.current?.click();
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploading(true);
        const formData = new FormData();
        formData.append('target_id', targetId);
        formData.append('file', file);

        try {
            const res = await fetch('/api/upload-image', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData
            });

            if (res.ok) {
                await refreshOverrides();
            } else {
                console.error("Upload failed");
            }
        } catch (err) {
            console.error('Network block or interruption', err);
        } finally {
            setUploading(false);
            e.target.value = null; // Reset input field to allow re-uploading same file if desired
        }
    };

    return (
        <>
            <img src={currentSrc} alt={alt || targetId} className={className} loading="lazy" />
            {isAdmin && (
                <div 
                    onClick={handleClick}
                    className="absolute top-4 right-4 z-50 bg-black/50 opacity-60 hover:opacity-100 flex items-center justify-center cursor-pointer transition-all duration-300 rounded-full p-3 shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-white/20 hover:scale-110 hover:bg-black/80"
                    title="Change Photo (Admin only)"
                >
                    <Camera className="text-white w-6 h-6 drop-shadow-md" />
                    {uploading && <span className="text-white ml-2 text-xs font-bold shadow-black drop-shadow-md">...</span>}
                    <input 
                        ref={fileInputRef}
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={handleFileChange} 
                        disabled={uploading}
                        onClick={(e) => e.stopPropagation()} 
                    />
                </div>
            )}
        </>
    );
}
