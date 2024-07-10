'use client';
import Link from 'next/link';

import {
  RiGithubFill,
  RiInstagramFill,
  RiWhatsappFill,
  RiMailFill,
  RiLinkedinFill
} from 'react-icons/ri';

const icons = [
  {
    path: '/',
    name: <RiMailFill />
  },
  {
    path: '/',
    name: <RiLinkedinFill />
  },
  {
    path: '/',
    name: <RiGithubFill />
  },
  {
    path: '/',
    name: <RiInstagramFill />
  },
  {
    path: '/',
    name: <RiWhatsappFill />
  }
];

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index)=>{
        return <Link href={icon.path} key={index}>
          <div className={`${iconStyles}`}>{icon.name}</div>
        </Link>
      })}
    </div>
  )
}

export default Socials;
