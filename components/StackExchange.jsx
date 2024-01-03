'use client';
import React, { useEffect, useState } from 'react';
import Card from './Card';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GetIcon from '@/utils/GetIcon';


const StackExchange = (props) => {

    const resume = props.resume;

    const id = resume?.stackexchange?.id;

    const [url, setUrl] = useState(null);
    const [data, setData] = useState(null);

    const [badgeCounts, setBadgeCounts] = useState(null);

    useEffect(() => {
        fetch(`https://api.stackexchange.com/2.3/users/${id}?order=desc&sort=creation&site=stackoverflow`
        )
            .then(response => response.json())
            .then(data => {
                setData(data);
                setUrl(data.items[0].link);
                setBadgeCounts(data.items[0].badge_counts);
            }).catch((error) => {
                setData(null);
            } );

    }, []);

    return (

        <Card title={resume?.stackexchange?.title} url={url}>
            <div className="grid grid-cols-3 divide-x divide-gray-300  items-center">
                <div className="flex flex-col items-center p-4">
                    <h1 className="text-sm font-bold">{badgeCounts?.gold}</h1>
                    <h1 className="text-sm">Gold</h1>
                </div>
                <div className="flex flex-col items-center p-4">
                    <h1 className="text-sm font-bold">{badgeCounts?.silver}</h1>
                    <h1 className="text-sm">Silver</h1>
                </div>
                <div className="flex flex-col items-center p-4">
                    <h1 className="text-sm font-bold">{badgeCounts?.bronze}</h1>
                    <h1 className="text-sm">Bronze</h1>
                </div>
            </div>
            <div className="grid grid-cols-3 divide-gray-300 items-center mt-4 gap-4">

            </div>

        </Card>
    );
};

export default StackExchange;
