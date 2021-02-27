import styles from '../styles/components/Countdown.module.css';
import {useState, useEffect, useContext} from 'react';
import { ChallengeContext } from '../context/ChallengeContext';
import { CountdownContext } from '../context/CountdownContext';


export function Countdown() {
const {minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown} = useContext(CountdownContext);    


const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('');
const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minutesLeft}</span>
                    <span>{minutesRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button 
                    disabled
                    className={styles.countdownButton }
                   
                > 
                    Ciclo Encerrado
                </button>
            ) : (
                <>
                    { isActive ? (
                <button 
                    type="button"
                    className={ `${styles.countdownButton}  ${styles.countdownButtonActive}` }
                    onClick={resetCountdown}
                    > 
                    Abandonar Ciclo
                </button>
            ) : (
                <button
                    type="button" 
                    className={styles.countdownButton}
                    onClick={startCountdown}
                > 
                    Iniciar Ciclo
                </button>
                 )}
                </>
            )}

            
           
        </div>
    );
}