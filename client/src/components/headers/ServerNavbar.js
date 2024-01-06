import React, {useEffect, useState} from 'react';
import './headers.scss';

export function ServerNavbar(props) {
    const setIsFormVisible=props.setIsFormVisible;
    const handleShowForm = () => {
        setIsFormVisible(true);
    };
    return (
        <header className="server-navbar">
            <div className="server-navbar__title">Online Room</div>
            <button className="server-navbar__create-button" onClick={handleShowForm}>
                Create
            </button>
        </header>
    );
}
