import { SlSocialGithub } from 'react-icons/sl';
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { TbListDetails } from "react-icons/tb";
import './IconLink.scss';

interface IconLinkProps {
    linked?: string;
    label: string;
    click?: () => void;
  }

const titleIcon = {
    "GitHub": <SlSocialGithub />,
    "Demo": <HiOutlineRocketLaunch />,
    "Details": <TbListDetails />,
}


function IconLink ({linked = "", label, click = () => {}}:IconLinkProps) {

    const IconClassName = `icon-link`;

    const handleClick = () => {
        if(!linked){
            click();
        } else {
            window.open(linked, '_blank');
        }
    };

    return (
        <button onClick={handleClick}
        className={IconClassName}>
        {/* <p>{label}</p> */}
        {label==="GitHub" ? (titleIcon.GitHub):(null)}
        {label==="Demo" ? (titleIcon.Demo):(null)}
        {label==="Details" ? (titleIcon.Details):(null)}
        </button>
    )
};

export default IconLink;