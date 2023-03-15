import React from "react";
import { NavLink } from "react-router-dom";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonIcon from '@mui/icons-material/Person';
import '../Css/ListStyle.css';

const List=()=>{
    return(
         <>
         <header>
            <div className="container container-flex">
                <nav>
                    <div className="list">
                        <NavLink to ="/" className="listItem" activeClassName="activeItem">Home</NavLink>
                        <NavLink to ="/Services" className="listItem" activeClassName="activeItem">Specialities</NavLink>
                        <NavLink to ="/Contact" className="listItem" activeClassName="activeItem">Contact</NavLink>
                        <NavLink to ="/Policy" className="listItem" activeClassName="activeItem">Policy</NavLink>
                    </div>
                </nav>
                <div className="icons">
                    <ManageAccountsIcon className="icon"/>
                    <PersonIcon className="icon"/>                   
                </div>
            </div>
         </header>
         </>
    )
}
export default List;