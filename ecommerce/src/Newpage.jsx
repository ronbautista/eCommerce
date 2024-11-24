// NewPage.jsx
import React from 'react';
import BookingComponent from './BookingComponent';
import Services2 from './Services2';
import Services3 from './Services3';
import Services1 from './Services1';
import Service4 from './Service4';

const NewPage = () => {
    return (
        <div>
            <BookingComponent/>
            <Services2/>
           <Services1/>
            <Services3/>
            <Service4/>
            
        </div>
    );
};

export default NewPage;