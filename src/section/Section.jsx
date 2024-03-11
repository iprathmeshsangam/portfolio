import styles from '../section/Section.module.css'
import resume from '../assets/resume.pdf';

function Section(){
    return(
        <>
            <div className={styles.container}>
            <h3 className={styles.title}>Interested in Working / Collabrating with me?</h3>
            <p className={styles.para}>I’m Open to discuss product design work and full time Frontend Developer role as well </p>

            <a className={styles.btn} href={resume} download><i className="ri-arrow-down-line"></i> Download Resume</a>
            </div>
        </>
    );
}

export default Section