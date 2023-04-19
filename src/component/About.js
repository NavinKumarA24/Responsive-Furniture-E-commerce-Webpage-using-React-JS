import Img1 from './assets/images/img-1.png'
function About(){

    return(
        <div className="container-fluid bg-warning py-5 mt-5" id="about">
        <div className="container mt-5 ">
            <div className="row">
                <div className="col-md-6 mt-3">
                    <h1 className="text-white">ABOUT US </h1>
                    <p className="mt-5 text-light">There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered alteration in some form by injected humour, or randomised words
                        which dont look even slightly believableThere are many variations of passages of Lorem
                        Ipsum available, but the majority have able</p>
                    <a href="" className="btn btn-dark mt-5 py-3 px-4 about-us-button">READ MORE</a>
                </div>
                <div className="col-md-6">
                    <img src={Img1} className="mt-5 chair-img" alt="" />
                </div>
            </div>

        </div>

    </div>
   )   }
export default About;