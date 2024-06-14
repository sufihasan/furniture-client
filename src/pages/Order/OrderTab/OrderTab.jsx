import FurnitureCard from "../../../components/FurnitureCard/FurnitureCard";


const OrderTab = ({ items }) => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-6'>
            {
                items.map(item => <FurnitureCard
                    key={item._id}
                    item={item}
                ></FurnitureCard>)
            }
        </div>
    );
};

export default OrderTab;