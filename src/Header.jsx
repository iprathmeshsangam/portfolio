import Logo from './assets/LogoBlack.png'

function Header(){

    return (
        <>
        
            <nav>
                <div className="headerContainer">
                <div className="logo">
                    <a href="#"><img src={Logo} alt="Logo" className='LogoImg'/></a>
                </div>
                    <div className="btn">
                        <button>Say Hello</button>
                        
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;