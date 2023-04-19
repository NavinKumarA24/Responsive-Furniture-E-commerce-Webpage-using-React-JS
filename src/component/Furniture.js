import Img2 from './assets/images/img-2.png'
import Img3 from './assets/images/img-3.png'

function Furniture(){

    return (
        
            < div id="furniture" >
            <div className="container-fluid  mt-5">
            <div className="container-sm">
                <h1 className="d-flex justify-content-center">OUR FURNITURES</h1>
                <p className="d-flex justify-content-center mt-4">There are many variations of passages of Lorem Ipsum</p>
                <div className="row  mt-5 px-sm-1">
                    <div className="col-md-6 position-relative">
                        <div className="furn">
                            <img src={Img2} className="furn-img" alt="" />
                            <div className="hover-icon">
                                <a href="#" className="text-decoration-none d-flex justify-content-center">
                                    <i className="bi bi-search"></i></a>
                            </div>
                        </div>

                        <h5 className="mt-4 text-warning img-content">TEMPOR INCIDIDUNT UT LABORE ET DOLORE</h5>
                        <p className="mt-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi</p>
                    </div>

                    <div className="col-md-6 position-relative">
                        <div className="furn">
                            <img src={Img3} className="furn-img" alt="" />
                            <div className="hover-icon">
                                <a href="#" className="text-decoration-none d-flex justify-content-center">
                                    <i className="bi bi-search"></i></a>
                            </div>
                        </div>
                        <h5 className="mt-4 text-warning img-content">TEMPOR INCIDIDUNT UT LABORE ET DOLORE</h5>
                        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi</p>
                    </div>

                </div>
            </div>

        </div>
        <div className="container-fluid designers">
            <div className="container mt-5">
                <div className="text-center mt-5">
                    <h1 className="pt-5 text-white">WHO WE ARE ?</h1>


                    <h5 className="mt-3 text-white">DESIGNERS & INNOVATORS</h5>
                    <p className="mt-4 text-white pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut</p>
                    <a className="btn btn-dark btn-lg mb-5 mt-0 about-us-button px-4 quote-button">
                        GET A QUOTE
                    </a>
                </div>

            </div>
        </div>
        </div >
        )
    
}
export default Furniture;