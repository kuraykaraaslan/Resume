'use client';
import React, { useEffect, useState } from 'react';
import Card from './Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GetIcon from '@/utils/GetIcon';

const LanguageCard = (props) => {
    const lang = props.lang;

    const name = lang?.name;
    const fluency = lang?.fluency;

    const levels = lang?.levels;

    return (
        <div className="col-span-1 flex flex-col items-center gap-1 border border-gray-300 rounded-md p-2 bg-gray-50">
            <h1 className="text-sm text-center font-bold">
                <FontAwesomeIcon
                    icon={GetIcon("Language")}
                    className='pt-1 pr-1'
                    style={{ width: '1rem', height: '1rem' }}
                />
                {name}</h1>
            <h1 className="text-sm text-gray-500 text-center">{fluency}</h1>
            <div className="flex flex-row gap-2 divide-x divide-gray-400">
                {levels ? (
                    levels.map((level, index) => (
                        <h1 className="text-sm text-gray-500 text-center pl-1" key={index}>
                        <FontAwesomeIcon
                            icon={GetIcon(level.name)}
                            className='pt-1 pr-1'
                            style={{ width: '1rem', height: '1rem' }}
                            key={index}
                        />
                        {level?.level}</h1>
                        
                        
                    ))
                ) : (
                    <>
                    <h1 className="text-sm text-gray-500 text-center pl-1">&nbsp;</h1>
                    </>
                )}
            </div>
        </div>
    );
}

const Languages = (props) => {

    const resume = props.resume;

    const languages = resume?.languages?.items;


    return (

        <Card title={resume?.languages?.title}>
            <div className="grid grid-cols-3 divide-gray-300 items-center mt-4 gap-4">
                {languages?.map((lang, index) => (
                    <LanguageCard lang={lang} key={index} />
                ))}

            </div>

        </Card>
    );
};

export default Languages;
