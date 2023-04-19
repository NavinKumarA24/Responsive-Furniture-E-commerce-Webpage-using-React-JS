import chair from '../component/assets/images/chair.png';
import table from '../component/assets/images/table.png';
import dining from '../component/assets/images/dining table.png';
import book from '../component/assets/images/book.png';
import kitchen from '../component/assets/images/kitchen.png';
import tv from '../component/assets/images/tv-unit.png';
import Card from './Card';
function Shop() {
    const carddata=[{
        id:"product1",
        title:"Chair",
        image:chair,
        desc:"Cushion for your home",
        price:12.27,
        stocks:30
    },
    {
        id:"product2",
        title:"Table",
        image:table,
        desc:"Make attraction in your hall",
        price:14.55,
        stocks:10
    },
    {
        id:"product3",
        title:"Dining-Table",
        image:dining,
        desc:"Give attraction to your hall",
        price:20.68,
        stocks:73
    },
    {
        id:"product4",
        title:"Book-self",
        image:book,
        desc:"Read untill tired",
        price:39.43,
        stocks:0
    },
    {
        id:"product5",
        title:"Kitchen-Equip",
        image:kitchen,
        desc:"Cook with Happiness",
        price:45.99,
        stocks:100
    },
    {
        id:"product6",
        title:"TV-Unit",
        image:tv,
        desc:"Enjoy like a theatre",
        price:15.72,
        stocks:25
    }


]
    return (

        <div>
            <div className="container" id="service">
                <div className="container d-flex justify-content-center shop">
                    <h1 >ADD TO YOUR HOME</h1>
                </div>
                
            </div>
            <div className="container ">
                <div className="row mt-5 px-5 icon ">
                            {carddata.map((pro)=> {return (<Card title={pro.title } key={pro.id} image={pro.image} price={pro.price} desc={pro.desc} id={pro.id}/>)}) }            
                </div>

            </div>
        </div>
    )
}

export default Shop;