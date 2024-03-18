import React from 'react'
import githubLogo from "../../assets/logos/githublogo.png";
import linkedinLogo from "../../assets/logos/linkedinlogo.png";
import stackOverflowLogo from "../../assets/logos/stackoverflow.png";

//The following code imports the logos from the assets folder and sets a link to each one
export default function Footer() {
    return (
        <div className='row mt-5'>
            <div className="footer">
                <a href="https://github.com/Fderosier" target='_blank' className='singleLogo'>
                    <img
                        className="logos"
                        src={githubLogo}
                    >
                    </img>
                </a>
                <a href="www.linkedin.com/in/francis-derosier-b08022296" target='_blank' className='singleLogo'>
                    <img
                        className="logos"
                        src={linkedinLogo}
                    >
                    </img>
                </a>
                <a href="https://stackoverflow.com/users/22726136/frankiederosier" target='_blank' className='singleLogo'>
                    <img
                        className="logos"
                        src={stackOverflowLogo}
                    >
                    </img>
                </a>
            </div>
        </div>
    );
}