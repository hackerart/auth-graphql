import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>

            {/*<Link to="logout">Log out</Link>*/}
        </div>
    );
};

export default Header;
