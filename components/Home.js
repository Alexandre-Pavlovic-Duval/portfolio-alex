import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Headers from './Headers';

function Home() {
  const github= <FontAwesomeIcon icon={faGithub} className= {styles.gitHubLogo} />
  const linkedin= <FontAwesomeIcon icon={faLinkedin} className= {styles.LinkedInLogo} />

  return (
      <div className= {styles.mainDiv}>
        {/* Header part */}
        <Headers />

        {/* Body part */}
        <div className= {styles.bodyContainer}>

          <div className= {styles.bodyLeftContainer}>
            <div className= {styles.bodyFirstLeftContainer}>
              <span><span className= {styles.borderSpan}>Hi, </span>I'm Alex</span>
            </div>
            <div className= {styles.bodySecondLeftContainer}>
              <span>Full-Stack Developper By Passion</span>
            </div>
            <div className= {styles.bodyThirdLeftContainer}>
              <span className= {styles.projectBody}>My Projects</span>
            </div>
            <div className= {styles.bodyFourthLeftContainer}>
              <div className= {styles.gitHubLink}>{github}</div>
              <div className= {styles.linkedInLink}>{linkedin}</div>
            </div>
          </div>

          <div className= {styles.bodyRightContainer}>
            <img src="AlexandreEmoji.png" alt="PersonnalEmoji" className={styles.PersonnalEmoji}/>
          </div> 
        </div>
      </div>
  );
}

export default Home;
