import React from 'react';
import Card from './Card';

const Job = (props) => {
    const experience = props.experience;

    const name = experience?.name;

    const position = experience?.position;

    const startDate = experience?.startDate;

    const endDate = experience?.endDate;

    const summary = experience?.summary;

    const company = experience?.company;

    const title = experience?.title;

    const date = experience?.date;

    const description = experience?.description;



    return (
        <div className="col-span-12 flex flex-col items-center gap-1 rounded-md py-2 bg-gray-50">
            <div className="flex flex-row justify-between w-full">
                <h1 className="text-sm text-center font-bold">{company} , <span className="text-gray-500">{title}</span></h1>
                <h1 className="text-sm text-gray-500 text-center">{date}</h1>
            </div>
            <div className="flex flex-row justify-between w-full">
                <h1 className="text-sm">{description}</h1>
            </div>

        </div>
    );
}


const Experiences = (props) => {

    const resume = props.resume;

    return (
        <Card title={resume?.experiences?.title}>
            <div className="grid grid-cols-2 gap-2">
                {resume?.experiences?.jobs?.map((job, index) => (
                    <Job
                        key={index}
                        experience={job}
                    />
                ))}
            </div>
        </Card>
    );
};

export default Experiences;
