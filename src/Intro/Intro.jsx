import styles from '../Intro/Intro.module.css'

function Intro(){
    return(
    <>
    <div className={styles.container}>
        <div className="titleparts">
            {/* <h1 className={styles.Intro}>INTRO</h1> */}
        </div>
        
        <div className={styles.parts}>
        <h2>Hi, I'm Prathmesh. Pleased to Meet you!</h2>
            <p className={styles.para}>I am a driven designer and aspiring front-end developer currently honing my skills through a rigorous bootcamp program. With a passion for creating intuitive and visually stunning digital experiences, I'm dedicated to mastering the art of web design and development.</p>
        </div>
    </div>
    </>);
}

export default Intro