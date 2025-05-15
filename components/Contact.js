import Headers from './Headers';
import styles from '../styles/Contact.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function contactPage() {
    const github= <FontAwesomeIcon icon={faGithub} className={styles.gitHubLogo}/>
    const linkedin= <FontAwesomeIcon icon={faLinkedin} className= {styles.LinkedInLogo} />
    const email = <FontAwesomeIcon icon={faEnvelope} color='#102A42' className={styles.mailIcon}/> 
    const phone = <FontAwesomeIcon icon={faPhone} color='#102A42' className={styles.phoneIcon}/> 

    return (
        <div className={styles.mainDiv}>
            <Headers />
            <div className={styles.containers}>
                <div className={styles.leftContainer}>
                    <div className={styles.contactContainer}>
                        <div className={styles.contactTitle}>
                            <span className={styles.borderTitle}>Con</span><span>tact</span>
                        </div>
                        <div className={styles.contactInformation}>
                            <div className={styles.headerInformation}>
                                <span className={styles.headerInformationTxt}>Alexandre Pavlovic-Duval</span>
                                <br />
                                <span className={styles.headerInformationTxtSecond}>Don't hesitate to contact me</span>
                            </div>
                            <div className={styles.information}>
                                <div className={styles.phoneContainer}>
                                    <span>{phone}</span>
                                    <span className={styles.phone}>+33 6 67 67 22 67</span>
                                </div>
                                <div className={styles.mailContainer}>
                                    <span>{email}</span>
                                    <span className={styles.mail}>alexandre.pavlovic.duval@gmail.com</span>
                                </div>
                            </div> 
                            <div className={styles.bottomInformation}>
                                <span className={styles.endInformation}>You can also reach me on</span>
                                <div className={styles.logoInformation}>
                                    <div className={styles.gitHubLink}>{github}</div>
                                    <div className={styles.linkedInLink}>{linkedin}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                </div>
            </div>
        </div>
    )
}