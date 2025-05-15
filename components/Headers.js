import styles from "../styles/Headers.module.css";
import Link from 'next/link';

export default function Header() {
    return (
        <header className= {styles.header}>
            <div className= {styles.leftPartHeader}>
            <div className= {styles.logoHeader}>APD</div>
            </div>

            <div className= {styles.rightPartHeader}>
            <Link href="/" >
                <div className= {styles.aboutHeader}>About</div>
            </Link>
            <div className= {styles.projectsHeader}>Projects</div>
            <Link href="/contact">
                <div className= {styles.contactHeader}>Contact</div>
            </Link>
            <div className= {styles.translationHeader}>
                Language 🌎
            </div>
            <div className= {styles.darkLightModeHeader}>D/L mode 🌙</div>
            </div>
        </header>
    )
};