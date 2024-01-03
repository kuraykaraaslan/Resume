import React from 'react';
import Card from './Card';

const Certificate = (props) => {

    const cert = props.cert;

    const title = cert?.title;

    const authority = cert?.authority;

    const date = cert?.date;

    return (
        <div className="col-span-12 flex flex-col items-center gap-1 rounded-md py-2 bg-gray-50">
            <div className="flex flex-row justify-between w-full">
                <h1 className="text-sm text-center font-bold">{title}</h1>
                <h1 className="text-sm text-gray-500 text-center">{date}</h1>
            </div>
            <div className="flex flex-row justify-between w-full">
                <h1 className="text-sm">{authority}</h1>
            </div>

        </div>
    );
}


const Certifications = (props) => {

    const resume = props.resume;

    return (
        <Card title={resume?.certifications?.title}>
            <div className="grid grid-cols-2 gap-2">
                {resume?.certifications?.items?.map((cert, index) => (
                    <Certificate
                        key={index}
                        cert={cert}
                    />
                ))}
            </div>
        </Card>
    );
};

export default Certifications;
