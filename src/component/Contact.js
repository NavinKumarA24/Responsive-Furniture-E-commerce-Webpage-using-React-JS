import Img9 from './assets/images/img-9.png'
function Contact() {
    return (
        <div className="container-fluid contact-us mt-5 pb-5" id="contact">
            <div className="container pt-5">

                <h2 className="text-white  ">CONTACT US</h2>

                <div className="row">
                    <div className=" col-sm-12 col-md-6 pt-5">

                        <input type="text" placeholder="Name" className="email-bt" required/>
                        <input type="text" placeholder="Email" className="email-bt" required/>
                        <input type="text" placeholder="Phone Number" className="email-bt" required/>
                        <textarea name="" id="" cols="30" rows="10" className="massage-bt "
                            placeholder="Message" required></textarea>
                        <button className="btn btn-lg px-5 mt-5 sentbtn">SEND</button>

                        
                    </div>
                    <div className="col-sm-12 col-md-6 mt-5 pt-4 ">
                            <img src={Img9} className="img-fluid" alt="" />
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;