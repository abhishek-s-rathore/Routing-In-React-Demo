import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component{

    render(){
        return(
            <>
             <h1> Welcome To Home Page :)</h1>
             <nav>
                 <ul className='flex justify-evenly align-center'>
                     <li className='home-list'>
                     <Link to='/articles'>ARTICLE PAGE</Link>
                     </li>
                     <li className='home-list'>
                     <Link to='/books'>BOOK PAGE</Link>
                     </li>
                     <li className='home-list'>
                     <Link to='/people'>PEOPLE PAGE</Link>
                     </li>
                 </ul>
             </nav>
            </>
        );
    }

}

export default Home;