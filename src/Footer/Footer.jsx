import styles from './Footer.module.css'
import LogoWhite from '../assets/LogoWhite.png'


function Footer(){

    

    return(
        <>
            <div className={styles.footercontainer}>

                <div className={styles.footimg}>
                    <img src={LogoWhite} alt="" />
                </div>

                <div className={styles.desc}>
                    <p>Learn , Code , Level Up</p>
                </div>

                <div className={styles.socials}>
                    <a href="#"><i className="ri-twitter-x-line"></i></a>
                    <a href="#"><i className="ri-facebook-box-fill"></i></a>
                    <a href="#"><i className="ri-instagram-line"></i></a>
                    <a href="#"><i className="ri-linkedin-box-fill"></i></a>
                    <a href="#"><i className="ri-mail-fill"></i></a>
                    <a href="#"><i className="ri-github-fill"></i></a>
                </div>

                <div className={styles.footnote}>
                    Designed by me <i className="ri-copyright-line"></i>
                </div>
            </div>
        </>
    );

}

export default Footer