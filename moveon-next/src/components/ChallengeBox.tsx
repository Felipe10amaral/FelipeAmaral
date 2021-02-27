import { useContext } from 'react';
import { ChallengeContext } from '../context/ChallengeContext';
import { CountdownContext } from '../context/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {


    const {activeChallenge, resetChallenge, completedChallenge} = useContext(ChallengeContext);
    const { resetCountdown} = useContext(CountdownContext);

    function handleChallengeSuccess() {
        completedChallenge();
        resetCountdown();

    }

    function handleChallengeFaleid() {
        resetChallenge();
        resetCountdown();
    }

    

    return(
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header> Ganhe {activeChallenge.amount} XP</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFaleid}
                        >
                            Falhei
                        </button>

                        <button
                            type="button"
                            className={styles.challengeSuccessButton}
                            onClick={handleChallengeSuccess}
                        >
                            Completei
                        </button>
                    </footer>
                 </div>   
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Inicie um ciclo para receber desafios a serem completados</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="level-up" />
                        Avance de Level completando desafios
                    </p>
                </div>
            )}
        </div>
    );
}