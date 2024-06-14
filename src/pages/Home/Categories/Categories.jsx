import { Link } from 'react-router-dom';
import bedroomImg from '../../../assets/categoryImages/bedroomcover.jpeg';
import diningroomImg from '../../../assets/categoryImages/digning.jpeg';
import leavingroomImg from '../../../assets/categoryImages/leavingroom.jpeg';

const Categories = () => {
    return (
        <div className="py-10 grid grid-cols-3 gap-10">

            <div className="card  bg-base-100 shadow-xl">
                <figure><img className='w-full h-72 border' src={bedroomImg} alt="Shoes" /></figure>
                <div className="card-body">

                    <div className="card-actions justify-center">
                        <Link to='order/leavingroom'><button className="btn btn-primary">Book Bedroom Item</button></Link>

                    </div>
                </div>
            </div>

            <div className="card  bg-base-100 shadow-xl">
                <figure><img className='w-full h-72' src={diningroomImg} alt="Shoes" /></figure>
                <div className="card-body">

                    <div className="card-actions justify-center">
                        <Link to='/order/dining'><button className="btn btn-primary">Book Dining Item</button></Link>
                    </div>
                </div>
            </div>

            <div className="card  bg-base-100 shadow-xl">
                <figure><img className='w-full h-72' src={leavingroomImg} alt="Shoes" /></figure>
                <div className="card-body">

                    <div className="card-actions justify-center">
                        <Link to='/order/bedroom'><button className="btn btn-primary">Book Leaving Room Item</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Categories;