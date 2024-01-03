import React from 'react';
import Card from './Card';

const Job = (props) => {
    const school = props.school;

    const name = school?.name;

    const location = school?.location;

    const title = school?.title;

    const date = school?.date;

    const degree = school?.degree;

    const major = school?.major;



    return (
        <div className="col-span-12 flex flex-col items-center gap-1 rounded-md p-2 bg-gray-50">
            <div className="flex flex-row justify-between w-full">
                <h1 className="text-sm text-center font-bold">{name} , <span className="text-gray-500">{location}</span></h1>
                <h1 className="text-sm text-gray-500 text-center">{date}</h1>
            </div>
            <div className="flex flex-row justify-between w-full">
                <h1 className="text-sm text-center">{degree} , <span className="text-gray-500">{major}</span></h1>
            </div>

        </div>
    );
}


const Education = (props) => {

    const resume = props.resume;

    return (
        <Card title={resume?.education?.title}>
            <div className="grid grid-cols-2 gap-2">
                {resume?.education?.schools?.map((school, index) => (
                    <Job
                        key={index}
                        school={school}
                    />
                ))}
            </div>
        </Card>
    );
};

export default Education;
