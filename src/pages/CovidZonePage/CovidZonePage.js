import React from 'react';
import Header from '../../components/Header/Header';
import Maps from '../../components/Maps/Maps'
import './style.css';

export default function CovidZonePage() {

//teste

    return (
        <div
            id='covid-zone-page'
            className='covid-zone-page'
        >
            <Header />
            <Maps />
        </div>
    )
}