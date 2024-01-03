'use client';
import React, { useEffect, useState } from 'react';
import Card from './Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GetIcon from '@/utils/GetIcon';

const SkillCard = (props) => {
    const skill = props.skill;

    const title = skill?.title;

    const subtitle = skill?.subtitle;

    const total_stars = skill?.total_stars;
    const stars = skill?.stars;


    return (
        <div className="col-span-1 flex flex-col items-center gap-1 border border-gray-300 rounded-md p-2 bg-gray-50">
            <h1 className="text-sm text-center font-bold">
                {title}</h1>
            <h1 className="text-sm text-gray-500 text-center">{subtitle}</h1>
            {total_stars && stars ? 
            <div className="flex flex-row gap-2 divide-x divide-gray-400">
                <FontAwesomeIcon
                    icon={GetIcon("Star")}
                    className='pt-1'
                    style={{ width: '1rem', height: '1rem' }}
                />
                {stars} / {total_stars}

            </div>

            : null}
        </div>
    );
}

const Skills = (props) => {

    const resume = props.resume;

    const skills = resume?.skills?.items;

    const backend = skills.filter(skill => skill.type === 'Backend');
    const frontend = skills.filter(skill => skill.type === 'Frontend');
    const other = skills.filter(skill => skill.type === 'Other');


    return (

        <Card title={resume?.skills?.title}>
            <div className="grid grid-cols-2 lg:grid-cols-3 divide-gray-300 items-center items-stretch  mt-4 gap-4">
            {skills?.map((skill, index) => (
                <SkillCard skill={skill} key={index} />
            ))}
            </div>

        </Card>
    );
};

export default Skills;
