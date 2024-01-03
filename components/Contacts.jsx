'use client';
import React, { useEffect, useState } from 'react';
import Card from './Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GetIcon from '@/utils/GetIcon';

const ContactCard = (props) => {
    const contact = props.contact;

    const network = contact?.network;
    const username = contact?.username;
    const url = contact?.url;

    return (
        <div className="col-span-1 flex flex-col gap-1 border border-gray-300 rounded-md p-2 bg-gray-50 ">
            <a href={url} target="_blank" rel="noopener noreferrer">
            <h1 className="text-sm font-bold">
                <FontAwesomeIcon
                    icon={GetIcon(network)}
                    style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }}
                />
                {username}
            </h1>
            </a>
        </div>
    );
}

const Contacts = (props) => {

    const resume = props.resume;

    const contacts = resume?.profiles?.items;

    return (

        <Card title={resume?.profiles?.title}>
            <div className="grid grid-cols-2 lg:grid-cols-3 divide-gray-300 items-center items-stretch mt-4 gap-4">
            {contacts?.map((contact, index) => (
                <ContactCard key={index} contact={contact} />
            ))}
            </div>

        </Card>
    );
};

export default Contacts;
