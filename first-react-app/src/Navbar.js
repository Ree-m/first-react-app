const Navbar = () => {
    const handleClick= (e)=>{ // e is an event object,has alot of info
        console.log('Hello',e)

    }
    const handleClickAgain=(name,e)=>{
        console.log('hello,httyhgtr' + name ,e)
    }
    return (  
        <nav className="navbar">
            <h1>The Dojo Blog</h1>

            <div className="links">
                <a href="/">Home</a>
                <a href="/Create">New Blog</a>
                <button onClick={handleClick}>Click Me</button>
                <button onClick={(e)=>{  // an anonymous
                    handleClickAgain('yoshi',e)
                }}>Click Me Again</button>

            </div>
            
        </nav>
    );
}
 
export default Navbar;