import React from 'react';
import './sidebar.css';

export const Sidebar = () => {
    
        return (
            <div className="sidebar">
                <div className="logo-container">
                    <img src="data:image/png;base64,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" alt="Logo" className="logo" />
                </div>
                <h3>Menu</h3>
                <a href="/">Home</a>
                <a href="/about-us">About</a>
                <a href="/contact">Contact</a>
            </div>
        );
}

