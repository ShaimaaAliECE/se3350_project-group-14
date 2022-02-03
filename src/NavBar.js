const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>Sort It!</h1>
            <div className="links">
                <a href = "/" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: '8px'
                }}>Main Menu</a> 


                <a href = "/" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: '8px'
                }}>Play</a> 

            </div>
        </nav>
     );
}
 
export default NavBar;