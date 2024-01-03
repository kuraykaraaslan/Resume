import { 
    faFacebookF, 
    faFacebookMessenger, 
    faGithub, 
    faInstagram, 
    faLinkedinIn, 
    faSignalMessenger, 
    faTelegramPlane, 
    faTiktok, 
    faWhatsapp, 
    faXTwitter, 
    faYoutube,
    faEnvelope, 
    faLink, 
    faPhone,
    faCode, 
    faEye, 
    faCodeFork, 
    faStar,
    faCaretUp,
    faCaretDown,
    faX
} from '@fortawesome/free-solid-svg-icons';

import { 
    faJs, 
    faPython, 
    faJava, 
    faHtml5, 
    faCss3, 
    faReact, 
    faAngular, 
    faNode, 
    faSwift, 
    faPhp 
} from '@fortawesome/free-brands-svg-icons';

const iconMapList = {
    // Social
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
    Mail: faEnvelope,

    // Programming Languages
    JavaScript: faJs,
    Python: faPython,
    Java: faJava,
    HTML: faHtml5,
    CSS: faCss3,
    React: faReact,
    Angular: faAngular,
    NodeJS: faNode,
    Swift: faSwift,
    PHP: faPhp,
    TypeScript: faJs,

    // Other
    Eye: faEye,
    Code: faCode,
    Fork: faCodeFork,
    Star: faStar,

    // Default
    CaretUp: faCaretUp,
    CaretDown: faCaretDown,
    X: faX
  

};


function GetIcon (network) {
    if (network in iconMapList) {
        return iconMapList[network];
    }
    return faLink
}

export default GetIcon;