import React from 'react';
import { addItem } from '../redux/reducer/Cartreducer';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


function Card(props) {





    const navigate = useNavigate();


    const list = useSelector((state) => state.cart.list)
    const element = list.find((item) => item.id === props.id)


    const dispatch = useDispatch()

    const addtoCart = () => {

        dispatch(addItem(props));
    };


    return (
        <div className="col-8 col-sm-12 col-md-4 col-xl-4 ">

            <div className="card border-0">
                <div className="card-body text-center d-flex flex-column align-items-center mt-2 py-2">
                    <h5 className="card-title">{props.title}</h5>
                    <img src={props.image} className='prop-image' alt="..." />
                    <h3 className=" my-2 text-primay ">${props.price}</h3>
                    {element?.count > 0 ? (<button className="btn btn-success btn-lg mt-3" onClick={() => navigate('/Cart')}>Go to Carts</button >
                    ) : (<button className="btn btn-outline-warning btn-lg mt-3" onClick={addtoCart}>Add to Cart</button>)}

                </div>
            </div>
        </div>


    )
}


export default Card

// {element?.count > 0 ? (<button className="btn btn-danger btn-lg mt-3" onClick={() => navigate('/Cart')}>Go to Carts</button >
// ) : (<button className="btn btn-outline-primary btn-lg mt-3" onClick={addtoCart}>Add to Cart</button>)}
