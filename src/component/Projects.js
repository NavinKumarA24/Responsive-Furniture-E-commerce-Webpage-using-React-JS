import Img4 from './assets/images/img-4.png'
import Img5 from './assets/images/img-5.png'
import Img6 from './assets/images/img-6.png'
function Projects() {
    return (
        <div>
            <div className="container-fluid">
                <div className="container text-center mt-5">
                    <h1 className="mt-5 pro" >OUR PROJECTS</h1>
                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>

            </div>
            <div id="carouselExampleCaptions" className="carousel slide container-fluid mt-5 pb-5" data-bs-ride="carousel">


                <div className="container ">
                    <div className="carousel-inner ">


                        <div className="carousel-item active">
                            <div className="main1">
                                <div className="row  ">


                                    <div className="col-sm-4 p-3 pt-0">
                                        <div className="container-main1 position-relative">
                                            <img src={Img4} className="img-fluid w-100  " alt="..." />

                                            <h4 className="modern-text position-absolute">MODERN HOME DESIGN</h4>
                                            <div className="viewmore position-absolute ">
                                                <div className="viewmore-text">VIEW MORE</div>

                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-sm-4 p-3 pt-0">
                                        <div className="container-main1 position-relative">
                                            <img src={Img5} className="img-fluid w-100  " alt="..." />
                                            <h4 className="modern-text position-absolute">MODERN HOME DESIGN</h4>
                                            <div className="viewmore position-absolute ">
                                                <div className="viewmore-text">VIEW MORE</div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 p-3 pt-0">
                                        <div className="container-main1 position-relative">
                                            <img src={Img6} className="img-fluid w-100 " alt="..." />
                                            <h4 className="modern-text position-absolute">MODERN HOME DESIGN</h4>
                                            <div className="viewmore position-absolute ">
                                                <div className="viewmore-text">VIEW MORE</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <div className="main2">
                                <div className="row  ">


                                    <div className="col-sm-4 p-3 pt-0">
                                        <div className="container-main1 position-relative">
                                            <img src={Img4} className="img-fluid w-100  " alt="..." />

                                            <h4 className="modern-text position-absolute">MODERN HOME DESIGN</h4>
                                            <div className="viewmore position-absolute ">
                                                <div className="viewmore-text">VIEW MORE</div>

                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-sm-4 p-3 pt-0">
                                        <div className="container-main1 position-relative">
                                            <img src={Img5} className="img-fluid w-100  " alt="..." />
                                            <h4 className="modern-text position-absolute">MODERN HOME DESIGN</h4>
                                            <div className="viewmore position-absolute ">
                                                <div className="viewmore-text">VIEW MORE</div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 p-3 pt-0">
                                        <div className="container-main1 position-relative">
                                            <img src={Img6} className="img-fluid w-100 " alt="..." />
                                            <h4 className="modern-text position-absolute">MODERN HOME DESIGN</h4>
                                            <div className="viewmore position-absolute ">
                                                <div className="viewmore-text">VIEW MORE</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="main3">
                                <div className="row  ">


                                    <div className="col-sm-4 p-3 pt-0">
                                        <div className="container-main1 position-relative">
                                            <img src={Img4} className="img-fluid w-100  " alt="..." />

                                            <h4 className="modern-text position-absolute ">MODERN HOME DESIGN</h4>
                                            <div className="viewmore position-absolute ">
                                                <div className="viewmore-text">VIEW MORE</div>

                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-sm-4 p-3 pt-0">
                                        <div className="container-main1 position-relative">
                                            <img src={Img5} className="img-fluid w-100  " alt="..." />
                                            <h4 className="modern-text position-absolute">MODERN HOME DESIGN</h4>
                                            <div className="viewmore position-absolute ">
                                                <div className="viewmore-text">VIEW MORE</div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 p-3 pt-0">
                                        <div className="container-main1 position-relative">
                                            <img src={Img6} className="img-fluid w-100 " alt="..." />
                                            <h4 className="modern-text position-absolute">MODERN HOME DESIGN</h4>
                                            <div className="viewmore position-absolute ">
                                                <div className="viewmore-text">VIEW MORE</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <button className="carousel-control-prev d-none d-lg-block " type="button"
                    data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next d-none d-lg-block " type="button"
                    data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}
export default Projects;