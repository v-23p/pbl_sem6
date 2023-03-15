import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../Css/FooterStyle.css';

const Footer=()=>{
    return(
        <>
    <footer>
        <div className="container container-flex">
            <div className="icons">
                <TwitterIcon className="icon"/>
                <FacebookIcon className="icon"/>
                <YouTubeIcon className="icon"/>
            </div>
            <div className="line">
                <hr></hr>
                <hr></hr>
            </div>
            <div className="copyright">
                <p> Disclaimer</p>
                <p> Terms of Use </p>

            </div>
        </div>
        </footer>
        </>
    )
}
export default Footer;