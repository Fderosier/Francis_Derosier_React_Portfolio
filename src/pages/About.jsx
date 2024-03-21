import profilePic from "../../assets/frankieselfie.PNG";

//This is the about page which sources the html for the about page
export default function AboutPage() {
    return (
        <div className="container pt-4">
            <h2 className="contentHeader w-100">About</h2>
            <section className="about row">

                <img src={profilePic} className=" col w-50 d-flex flex-wrap imgshadow " alt="frankieselfie.PNG" />
                <section className="col">

                    <div>
                        <h3>College years:</h3>
                        <p> Francis Started his college career as a engineering major as he enjoyed the construction scene. He then gained interest in the software side of things which lead him into enrolling into a fullstack devoloper bootcamp at University of New Hampshire pursing software devolopment.  </p>
                    </div>
                    <div>
                        <h3>After College:</h3>
                        <p> Once graduated Francis plans to pursing his goal of becoming a software engineer</p>
                    </div>
                    <div>
                        <h3>Hobbies:</h3>
                        <p></p>
                    </div>
                </section>
            </section>
        </div>
    )
}