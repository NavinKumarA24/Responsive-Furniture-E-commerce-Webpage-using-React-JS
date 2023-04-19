import Icon1 from './assets/images/icon-1.png';
import Icon2 from './assets/images/icon-2.png';
import Icon3 from './assets/images/icon-3.png';
import Icon4 from './assets/images/icon-4.png';
function Services(){

    return(
        <div>
        <div className="container" id="service">
            <div className="container  d-flex justify-content-center service">
                <h1 >OUR SERVICES</h1>
            </div>
            <div className="d-flex justify-content-center mt-3 service-para">
                <p>There are many variations of passages of Lorem Ipsum</p>
            </div>
        </div>
        <div className="container ">
            <div className="row mt-5 px-5 icon ">
                <div className="col-sm-6 col-md-6 col-lg-3  ">
                    <div>
                        <img src={Icon1} className="img-fluid mt-lg-5" alt="" />
                        <div className="card-body pt-3">
                            <h5 className="card-title ">FURNITURES</h5>
                            <p className="card-text pt-3">There are many variations of passages of Lorem Ipsum available,
                                but the</p>
                            <a href="#" className="btn btn-warning mt-3 py-2 px-4 icon-button">READ MORE</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3 ">
                    <div>
                        <img src={Icon2} className=" img-fluid  mt-5 mt-sm-0 mt-lg-5 " alt="" />
                        <div className="card-body ">
                            <h5 className="card-title pt-3">OFFICE</h5>
                            <p className="card-text pt-3">There are many variations of passages of Lorem Ipsum available,
                                but the</p>
                            <a href="#" className="btn btn-warning mt-3 py-2 px-4 icon-button">READ MORE</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                    <div>
                        <img src={Icon3} className="img-fluid mt-5 mt-md-5 mt-sm-5 mt-lg-5" alt="" />
                        <div className="card-body">
                            <h5 className="card-title pt-3">HOME</h5>
                            <p className="card-text pt-3">There are many variations of passages of Lorem Ipsum available,
                                but the</p>
                            <a href="#" className="btn btn-warning mt-3 py-2 px-4 icon-button">READ MORE</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                    <div>
                        <img src={Icon4} className="img-fluid  mt-5 mt-md-5 mt-sm-5" alt="" />
                        <div className="card-body">
                            <h5 className="card-title pt-3">BEDROOM</h5>
                            <p className="card-text pt-3">There are many variations of passages of Lorem Ipsum available,
                                but the</p>
                            <a href="#" className="btn btn-warning mt-3 py-2 px-4 icon-button">READ MORE</a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        </div>
    )
}
export default Services;