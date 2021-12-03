import React from 'react';

import './Landing.scss';
import { useAssets } from '../../utils/useAssets';

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
            <a
              href={links.linkedIn}
              className="iconLinks"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={useAssets('makers', 'linkedin')}
                height="24px"
                alt="linkedin"
              />
            </a>
          )}
          {!!links.gitHub && (
            <a
              href={links.gitHub}
              className="iconLinks"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={useAssets('makers', 'github')}
                height="24px"
                alt="github"
              />
            </a>
          )}
          {!!links.twitter && (
            <a
              href={links.twitter}
              className="iconLinks"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={useAssets('makers', 'twitter')}
                height="24px"
                alt="twitter"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
