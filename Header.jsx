function Header(){
    return(
        <header className ="header">
            <div className="logo">
                ShopEasy
            </div>

            <nav>
                <a href="#Home">Home</a>
                <a href="#product">Product</a>
                <a href="#about">About</a>
                <a href="#contact">contact</a>
            </nav>

            <button className="login-btn">Login</button>
        </header>
    );
}

export default Header;