import React from "react";
import '../Css/Home.css';
import './Demo';
import '../contexts/EthContext';

const Home=()=>{
    return(
        <>
            <EthProvider>
<div className="mainSection">
    <div className="contentBox">
        <h1>Vision & Mission</h1>
        <p>To Deliver High-Quality, Patient-Centered Medical Care With Compassion And Respect, While Continually Striving For Excellence In All Aspects Of Healthcare & To Be Recognized As A Trusted And Innovative Healthcare Leader, Providing Exceptional Medical Care And Services To Our Community And Beyond, And Contributing To The Advancement Of Medicine And Public Health.</p>
    </div>
</div>

<div className="AboutUs">
    <div className="contentBox">
        <h1>About Us</h1>
        <p>Established in 1991 by Padmabhushan (late) Shri Karamshibhai Jethabhai Somaiya, the K. J. Somaiya Medical College, Hospital And Research Centre was one of his final notable projects and the culmination of an illustrious career in business and philanthropy, born out of his austere yet oft-quoted philosophy of wanting “to remove the sufferings of all beings afflicted by pain".
It is truly to his testimony that the K. J. Somaiya’s Ayurvihar Complex in Sion, Mumbai now has a colossal presence, not only in the field of medical education but also in cutting-edge research and patient treatment. With its 550-bed General Hospital and 56-bed Super-Specialty Hospital, the K. J. Somaiya Hospital complex boasts of the finest medical infrastructure that matches the best in its class worldwide and is absolutely unrivalled in the Eastern Suburbs of Mumbai.</p>
    </div>
</div>
        <Demo />
        </EthProvider>
        </>
    )

}
export default Home;