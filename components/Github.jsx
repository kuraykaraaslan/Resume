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

const Github = (props) => {

    const resume = props.resume;

    const username = resume?.github?.username;

    const url = "https://github.com/" + username;


    const [data, setData] = useState(null);
    let [repos, setRepos] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                setData(data);

                fetch(`https://api.github.com/users/${username}/repos`)
                    .then(response => response.json())
                    .then(data => {
                        // order repos by stars and get top 6
                        const sortedRepos = data.sort((a, b) => b.stargazers_count - a.stargazers_count);
                        const topRepos = sortedRepos.slice(0, 6);
                        setRepos(topRepos);
                    });
            });

    }, []);

    return (

        <Card title={resume?.github?.title} url={url}>
            <div className="grid grid-cols-3 divide-x divide-gray-300  items-center">
                <div className="flex flex-col items-center p-4">
                    <h1 className="text-sm font-bold">{data?.public_repos}</h1>
                    <h1 className="text-sm">Repositories</h1>
                </div>
                <div className="flex flex-col items-center p-4">
                    <h1 className="text-sm font-bold">{data?.followers}</h1>
                    <h1 className="text-sm">Followers</h1>
                </div>
                <div className="flex flex-col items-center p-4">
                    <h1 className="text-sm font-bold">{data?.following}</h1>
                    <h1 className="text-sm">Following</h1>
                </div>
            </div>
            <div className="grid grid-cols-3 divide-gray-300 items-center mt-4 gap-4">
            {repos?.map((repo, index) => (
                <RepoCard repo={repo} key={index} />
            ))}
            </div>

        </Card>
    );
};

export default Github;
