import React from 'react';
import Icon from './Icon';

const About = () => {
    return (
        <section className="">
            <div className="content flex flex-col">
                <h3 className="text-primary font-bold text-lg">
                    ABOUT US
                </h3>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-3xl font-bold">
                            Never Worry About Your Website Again
                        </h2>
                        <p className="text-body font-medium">
                            Online marketing matters! — today more than ever. 
                            With our services, we can convert your online presence into 
                            tangible outcomes. 
                        </p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h3 className="font-semibold text-2xl">
                            Connect With Us
                        </h3>
                        <div className="flex flex-col gap-8">
                            <p className="text-body font-medium">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ligula, malesuada vel convallis in, tincidunt ut mi. Vestibulum sit amet urna placerat, tempor soloa demanium testi lor Aliq lorem vitae semper tempor.
                            </p>
                            <div className="flex flex-row gap-0.5">
                                <Icon src="/icons/bluesky.svg"/>
                                <Icon src="/icons/instagram.svg"/>
                                <Icon src="/icons/twitter.svg"/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
