import React from 'react';
import Button from '../components/Button';
import Button2 from '../components/Button2';

let gapAmount: number = 5;

const Hero = () => {
    return (
        <div className={"flex flex-col gap-3 mt-13"}>
            <h1 className="font-bold text-4xl/snug">
                We Design Websites For Small Businesses 
            </h1>
            <div className={"flex flex-col gap-7"}>
                <p className="text-body">
                    Online marketing matters! — today more than ever. 
                    With our services, we can convert your online presence into 
                    tangible outcomes. 
                </p>
                <Button title="Our Services"/>
                <Button2 leftIconSrc="/download-icon.svg" title="Download Resume"/>
            </div>
        </div>
    );
}

export default Hero;
