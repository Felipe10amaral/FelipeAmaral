import { useContext } from 'react';
import { ChallengeContext } from '../context/ChallengeContext';
import styles from '../styles/pages/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengeContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/felipe10amaral.png" alt="f" />
            <div>
                <strong>Felipe</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                     Level {level}
                </p>
            </div>
        </div>
    )
}