import React, { useRef, useState } from 'react'
import './Media.css'
import videoposter from '../../../assets/images/videoposter.png'

export default function Media({ url }) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className='media' onClick={handlePlay}>
            <video ref={videoRef} poster={videoposter} controls>
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {!isPlaying && (
            <button className="play-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.158 43.219"><path fill="none" stroke="#fcf9f2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1.364 1.364v40.49m35.429-20.245L1.364 41.854m35.429-20.245L1.364 1.364" data-name="Icon akar-play"/></svg></button>
            )}
        </div>
    )
}
