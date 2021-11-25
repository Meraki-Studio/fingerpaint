import React from 'react';

import './Landing.scss';
import { getIcon } from '../../utils/useIcons';

export default function ProfileItem({ maker }) {
  const { name, pronoun, img, role, blurb, links } = maker;

  return (
    <div sx={{ maxWidth: 250 }} className="teamCard">
      <img src={img} alt={name} />
      <div className="teamContent">
        <h4 className="name">{name}</h4>
        <h5 className="role">{role}</h5>
        <p className="blurb">{blurb}</p>
        <a href={links.portfolio} className="portfolio">
          See {pronoun} work here →
        </a>
        <div className="iconLinks">
          <a href={links.linkedIn} className="iconLinks">
            <img
              src={getIcon('ui', 'linkedin')}
              height="24px"
              width="24px"
              alt="linkedin"
            />
          </a>
          <a href={links.gitHub} className="iconLinks">
            <img
              src={getIcon('ui', 'github')}
              height="24px"
              width="24px"
              alt="GitHub"
            />
          </a>
          <a href={links.twitter} className="iconLinks">
            <img
              src={getIcon('ui', 'twitter')}
              height="24px"
              width="24px"
              alt="twitter"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
