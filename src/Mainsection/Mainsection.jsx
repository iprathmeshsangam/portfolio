import video1 from '../assets/avatar.gif'

function Mainsection(){

    const  title = "Designer"
    const  title2 = "Frontend Developer"
    const desc = "I design and code beautiful yet simple things!"
    return(

        <>
            <main className="main">
                <h2 className="title">{title} & {title2}</h2>
                <p className="para">{desc}</p>
                <img src={video1} alt="image" />
            </main>
            
        </>
    );
}


export default Mainsection
