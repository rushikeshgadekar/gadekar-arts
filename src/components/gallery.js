import React from 'react';
import './gallery.css'

function Gallery ()  {
    return(
        <div className='gallery'>
            <h1 className='heading-gallery'>Photo Gallery</h1>    
            <div className='photo-grid'>
                <div className='card card-1'></div>
                <div className='card card-2'></div>
                <div className='card card-3'></div>
                <div className='card card-4'></div>
                <div className='card card-5'></div>
                <div className='card card-6'></div>
                <div className='card card-7'></div>
                <div className='card card-8'></div>
                <div className='card card-9'></div>
                <div className='card card-10'></div>
            </div>
        </div>
        
    )
}

export default Gallery;