import React from 'react';
import Card from './Card';

const About = ( props ) => {

    const resume = props.resume;

    return (
        <Card title={resume?.about?.title}>
                <h1 className="text-sm">{resume?.about?.description}</h1>
        </Card>
    );
};

export default About;
