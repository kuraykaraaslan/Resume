import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faFacebookMessenger, faGithub, faInstagram, faLinkedinIn, faSignalMessenger, faTelegramPlane, faTiktok, faWhatsapp, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLink, faPhone } from '@fortawesome/free-solid-svg-icons';

const iconMapList = {
    Linkedin: faLinkedinIn,
    Facebook: faFacebookF,
    Github: faGithub,
    Youtube: faYoutube,
    Whatsapp: faWhatsapp,
    Instagram: faInstagram,
    Tiktok: faTiktok,
    Messenger: faFacebookMessenger,
    Signal: faSignalMessenger,
    Douyin: faTiktok,
    Telegram: faTelegramPlane,
    Twitter: faXTwitter,
    Phone: faPhone,
    Mail: faEnvelope
};

function iconMap(network) {
    if (network in iconMapList) {
        return iconMapList[network];
    }
    return faLink
}


const ProfileHeader = (props) => {

    const { basics } = props.resume;
    const profiles = props.resume?.profiles?.items;

    return (
        <div className="max-w-2xl min-w-md grid grid-cols-7">
            <div className="col-span-5 flex flex-col justify-end px-4 pb-4">
                    <h1 className="text-2xl font-bold max-w-xs">{basics?.name}</h1>
                    <h2 className="text-md text-gray-500 max-w-xs">{basics?.title}</h2>
                    <h3 className="text-xs text-gray-500 max-w-xs">
                        {basics?.location?.city}, {basics?.location?.country}
                    </h3>
                <div className="flex flex-row gap-1 mt-2">
                    {profiles?.map((profile, index) => (
                        <a
                            href={profile.url}
                            key={index}
                            target="_blank"
                            className="border border-gray-500 rounded-sm p-1"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={iconMap(profile.network)}
                                style={{ width: '1rem', height: '1rem' }}
                            />
                        </a>
                    ))}
                </div>
            </div>
            <div className="col-span-2 flex justify-end p-4">
                <img
                    src={basics?.picture}
                    alt={basics?.name}
                    className="rounded rounded-sm w-32 h-32 object-cover border border-1 border-gray-500"
                />
            </div>
        </div>
    );
};

export default ProfileHeader;

