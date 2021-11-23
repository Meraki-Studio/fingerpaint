import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as styles from './Landing.module.css';

export default function ProfileItem({ maker }) {
  const { name, pronoun, img, role, blurb, links } = maker;

  return (
    <div sx={{ maxWidth: 250 }} className={styles.teamCard}>
      <img src={img} alt={name} />
      <div className={styles.teamContent}>
        <h4 className={styles.name}>{name}</h4>
        <h5 className={styles.role}>{role}</h5>
        <p className={styles.blurb}>{blurb}</p>
        <a href={links.portfolio} className={styles.portfolio}>
          See {pronoun} work here →
        </a>
        <div className={styles.iconLinks}>
          <a href={links.linkedIn} className={styles.iconLinks}>
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
          </a>
          <a href={links.gitHub} className={styles.iconLinks}>
            <FontAwesomeIcon icon={['fab', 'github-alt']} />
          </a>
          <a href={links.twitter} className={styles.iconLinks}>
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
        </div>
      </div>
    </div>
  );
}
