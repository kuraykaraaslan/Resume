'use client';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GetIcon from '@/utils/GetIcon';

const BadgeCard = (props) => {
    const badge = props.badge;

    const name = badge?.badge_name;

    const category = badge?.category_name;

    const total_stars = badge?.total_stars;
    const stars = badge?.stars;


    return (
        <div className="col-span-1 flex flex-col items-center gap-1 border border-gray-300 rounded-md p-2 bg-gray-50">
            <h1 className="text-sm text-center font-bold">
                <FontAwesomeIcon
                    icon={GetIcon(name)}
                    className='pt-1 pr-1'
                    style={{ width: '1rem', height: '1rem' }}
                />
                {name}</h1>
            <h1 className="text-sm text-gray-500 text-center">{category}</h1>
            <div className="flex flex-row gap-2 divide-x divide-gray-400">
                <FontAwesomeIcon
                    icon={GetIcon("Star")}
                    className='pt-1'
                    style={{ width: '1rem', height: '1rem' }}
                />
                {stars} / {total_stars}

            </div>
        </div>
    );
}

const HackerRank = (props) => {

    const resume = props.resume;

    const username = resume?.hackerrank?.username;

    const url = "https://hackerrank.com/profile/" + username;

    const [data, setData] = useState(null);
    let [badges, setBadges] = useState([]);
    let [certificates, setCertificates] = useState([]);
    let [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        fetch('https://proxy.cors.sh/https://hackerrank.com/rest/hackers/' + username + '/badges',
        {
            headers: {
                'x-cors-api-key': 'temp_9a899d0900684b3a7062ac9fa12e423f'
            }
        }
        ).then(res => res.json())
            .then(data => {
                if (data.models)
                {
                    var badges = data.models;

                    // remove level 0 badges
                    badges = badges.filter(badge => badge.level > 0);

                    if (badges.length > 0)
                    {
                        setBadges(badges);
                    }
                    else {
                        setBadges([]);
                    }

                } else {
                    setBadges([]);
                }
            }).catch(err => {
            }
        );
        
        fetch(`https://proxy.cors.sh/https://www.hackerrank.com/community/v1/test_results/hacker_certificate?username=${username}`, 
        {
            headers: {
                'x-cors-api-key': 'temp_9a899d0900684b3a7062ac9fa12e423f'
            }
        }
        ).then(res => res.json())
            .then(data => {
                if (data.models)
                {
                    var certificates = data.models;

                    if (certificates.length > 0)
                    {
                        setCertificates(certificates);
                    }
                    else {
                        setCertificates([]);
                    }
                }
                else {
                    setCertificates([]);
                }
            }).catch(err => {
            }
        );

        fetch(`https://proxy.cors.sh/https://www.hackerrank.com/rest/hackers/${username}/submission_histories`, 
        {
            headers: {
                'x-cors-api-key': 'temp_9a899d0900684b3a7062ac9fa12e423f'
            }
        }
        ).then(res => res.json())
            .then(data => {
                if (data)
                {
                    // object keys to array
                    const submissions = Object.keys(data).map((key) => [Number(key), data[key]]);
                    setSubmissions(submissions);
                } else {
                    setSubmissions([]);
                }
            }
        ).catch(err => {
        }
        );
    }
    , []);

    return (

        <Card title={resume?.hackerrank?.title} url={url}>
            <div className="grid grid-cols-3 divide-x divide-gray-300  items-center">
                <div className="flex flex-col items-center p-4">
                    <h1 className="text-sm font-bold">{badges?.length}</h1>
                    <h1 className="text-sm">Badges</h1>
                </div>
                <div className="flex flex-col items-center p-4">
                    <h1 className="text-sm font-bold">{certificates?.length}</h1>
                    <h1 className="text-sm">Certificates</h1>
                </div>
                <div className="flex flex-col items-center p-4">
                    <h1 className="text-sm font-bold">{submissions?.length}</h1>
                    <h1 className="text-sm">Submissions</h1>
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 divide-gray-300 items-center mt-4 gap-4">
                {badges?.map((badge, index) => (
                    <BadgeCard badge={badge} key={index} />
                ))}

            </div>

        </Card>
    );
};

export default HackerRank;
