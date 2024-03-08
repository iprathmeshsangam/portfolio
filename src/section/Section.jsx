import styles from '../section/Section.module.css'

function Section(){
    return(
        <>
            <div className={styles.container}>
            <h3 className={styles.title}>Interested in Working / Collabrating with me?</h3>
            <p className={styles.para}>I’m Open to discuss product design work and full time Frontend Developer role as well </p>

            <button className={styles.btn}><i className="ri-arrow-down-line"></i> Download Resume</button>
            </div>
        </>
    );
}

export default Section