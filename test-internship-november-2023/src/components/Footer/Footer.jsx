import React from 'react';
import { useState } from 'react';
import './footer.css';

export const  Footer = () => {
    const [myName, setMyName] = useState("Tatarciuc Victor");
        return (
            <div className='footer'>
                 <h3 className='text1'>
                    Created by : {myName}
                </h3>
                <h3 className='text1'>
                    ASSIST Software 2023
                </h3>
            </div>
        );
    
}
