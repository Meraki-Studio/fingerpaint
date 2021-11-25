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
          {!!links.linkedIn && (
            <a href={links.linkedIn} className="iconLinks">
              <FontAwesomeIcon size="2x" icon={['fab', 'linkedin-in']} />
            </a>
          )}
          {!!links.gitHub && (
            <a href={links.gitHub} className="iconLinks">
              <FontAwesomeIcon size="2x" icon={['fab', 'github-alt']} />
            </a>
          )}
          {!!links.twitter && (
            <a href={links.twitter} className="iconLinks">
              <FontAwesomeIcon size="2x" icon={['fab', 'twitter']} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
