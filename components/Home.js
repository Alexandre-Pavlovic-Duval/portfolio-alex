import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Home() {
  const github= <FontAwesomeIcon icon={faGithub} className= {styles.giHubLogo} />
  const linkedin= <FontAwesomeIcon icon={faLinkedin} className= {styles.LinkedInLogo} />

  return (
    <div>
      <div className= {styles.mainDiv}>
        {/* Header */}
        <header className= {styles.header}>
          
          <div className= {styles.leftPartHeader}>
            <div className= {styles.logoHeader}>APD</div>
          </div>

          <div className= {styles.rightPartHeader}>
            <div className= {styles.aboutHeader}>About</div>
            <div className= {styles.projectsHeader}>Projects</div>
            <div className= {styles.contactHeader}>Contact</div>
            <div className= {styles.translationHeader}>
              Earth 🌎
            </div>
            <div className= {styles.darkLightModeHeader}>D/L mode 🌙</div>
          </div>
        </header>

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
              <span className= {styles.projectBody}>My projects</span>
            </div>
            <div className= {styles.bodyFourthLeftContainer}>
              <div className= {styles.gitHubLink}>{github}</div>
              <div className= {styles.linkedInLink}>{linkedin}</div>
            </div>
          </div>

          <div className= {styles.bodyRightContainer}>
            Cool Picture or Something
            {/* CONTAINER FOR SMTH TBD <div className= {styles.}></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
