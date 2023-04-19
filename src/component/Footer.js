import Fb from './assets/images/fb-icon.png'
import Twitter from './assets/images/twitter-icon.png'
import Insta from './assets/images/instagram-icon.png'
import Linkedin from './assets/images/linkedin-icon.png'

function Footer() {

    return (
        <div>
            <div className="container-fluid bg-dark">
                <div className="container">
                    <div className="row d-sm-flex justify-content-between">
                        <div className="col-sm-5 col-md-5 col-lg-3 text-white mt-5">
                            <h1 className="pt-5">Let's design together</h1>
                            <p className="pt-5">There are many variat ions of passages of Lorem Ipsum available , but the
                                majority
                                have
                                suffered altera tion in some form, by</p>
                        </div>
                        <div className="col-sm-5 col-md-5 col-lg-3 text-white mt-5 ">
                            <h3 className="pt-sm-5">LET US HELP YOU</h3>
                            <p className="pt-4">There are many variat ions of passages of Lorem Ipsum available , but the
                                majority
                                have suffered altera tion in some form, by</p>
                        </div>
                        <div className="col-sm-5 col-md-5 col-lg-3 text-white mt-5 ">
                            <h3 className="pt-sm-5">INFORMATION</h3>
                            <p className="pt-4 ">About Us <br></br>
                                Careers <br></br>
                                Sell on shopee <br></br>
                                Press & News<br></br>
                                Competitions<br></br>
                                Terms & Conditions</p>
                        </div>
                    
                    <div className="col-sm-5 col-md-5 col-lg-3 text-white mt-5">
                        <h3 className="pt-sm-5">OUR DESIGN</h3>
                        <p className="pt-4">There are many variat ions of passages of Lorem Ipsum available , but the
                            majority
                            have suffered altera tion in some form, by</p>
                    </div>
                    <div className=" mb-5">
                        <div className="email-enter-right">
                            <input type="text" placeholder="Enter your email" className="email-enter " />
                            <a href="#" 
                                className="float-end subscribe">SUBSCRIBE</a>
                        </div>
                    </div>
                    </div>
                </div>

            </div>


            <div className="text-center">
                <div className="container  mt-4 icon-img">
                    <a href="#"><img src={Fb} alt="" /></a>
                    <a href="#"><img src={Twitter} alt="" /></a>
                    <a href="#"><img src={Insta} alt="" /></a>
                    <a href="#"><img src={Linkedin} alt="" /></a>
                </div>
                <div className="mt-3 copyright">
                    <p >2020 All Rights Reserved. Design by <a href="#" >Free html
                        Templates</a></p>
                </div>
            </div>
        </div>
    )
}
export default Footer;