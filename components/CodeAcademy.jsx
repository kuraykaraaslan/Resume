'use client';
import React, { useEffect, useState } from 'react';
import Card from './Card';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GetIcon from '@/utils/GetIcon';

const RepoCard = (props) => {
    const repo = props.repo;

    const name = repo?.name;

    const stars = repo?.stargazers_count;

    const watchers = repo?.watchers_count;

    const forks = repo?.forks_count;

    if (repo?.description.length > 50) {
        var description = repo?.description.substring(0, 47) + '...';
    } else {
        var description = repo?.description;
    }

    const language = repo?.language;

    return (
        <div className="col-span-1 flex flex-col items-center gap-1 border border-gray-300 rounded-md p-2 bg-gray-50">
            <h1 className="text-sm text-center font-bold">{name}</h1>
            <h1 className="text-sm text-gray-500 text-center">{description}</h1>
            <div className="flex flex-row gap-2 divide-x divide-gray-400">
                <FontAwesomeIcon
                    icon={GetIcon(language)}
                    className='pt-1'
                    style={{ width: '1rem', height: '1rem' }}
                />
                <FontAwesomeIcon
                    icon={GetIcon('Eye')}
                    className='pt-1 pl-1'
                    style={{ width: '1rem', height: '1rem' }}
                />
                {watchers}
                <FontAwesomeIcon
                    icon={GetIcon('Fork')}
                    className='pt-1 pl-1'
                    style={{ width: '1rem', height: '1rem' }}
                />
                {forks}

            </div>
        </div>
    );
}

const CodeAcademy = (props) => {

    const resume = props.resume;

    const username = resume?.codeacademy?.username;

    const url = "https://www.codecademy.com/users/" + username;

    const [data, setData] = useState(null);

    const [archivements, setArchivements] = useState([]);
    const [certificates, setCertificates] = useState([]);
    const [enrollments, setEnrollments] = useState([]);

    useEffect(() => {
        fetch(`https://proxy.cors.sh/https://www.codecademy.com/_next/data/portal-app-b76e48d305204b70bfd35cfd5c173f4a7c076014/profiles/${username}.json`,
        {
            headers: {
                'x-cors-api-key': 'temp_9a899d0900684b3a7062ac9fa12e423f'
            }
        }
        )
            .then(response => response.json())
            .then(data => {
                setData(data);
                setArchivements(data.pageProps.profile.achievements);
                setCertificates(data.pageProps.profile.certificates);
                setEnrollments(data.pageProps.profile.enrollments);
            }).catch((error) => {
                setData(null);
            } );

    }, []);

    return (

        <Card title={resume?.codeacademy?.title} url={url}>
            <div className="grid grid-cols-3 divide-x divide-gray-300  items-center">
                <div className="flex flex-col items-center p-4">
                    <h1 className="text-sm font-bold">{archivements.length}</h1>
                    <h1 className="text-sm">Archivements</h1>
                </div>
                <div className="flex flex-col items-center p-4">
                    <h1 className="text-sm font-bold">{certificates.length}</h1>
                    <h1 className="text-sm">Certificates</h1>
                </div>
                <div className="flex flex-col items-center p-4">
                    <h1 className="text-sm font-bold">{enrollments.length}</h1>
                    <h1 className="text-sm">Enrollments</h1>
                </div>
            </div>
            <div className="grid grid-cols-3 divide-gray-300 items-center mt-4 gap-4">

            </div>

        </Card>
    );
};

export default CodeAcademy;
