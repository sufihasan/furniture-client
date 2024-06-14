import FurnitureCard from "../../../components/FurnitureCard/FurnitureCard";
import useFurniture from "../../../hooks/useFurniture";


const Advertised = () => {
    const [furnitures] = useFurniture();

    // const dining = furnitures.filter(item => item.category === 'dining');
    const advertises = furnitures.filter(furniture => furniture.advertise === 'advertiseOk');
    return (
        <div >
            {/* <h2>total advertise Item: {advertises.length}</h2> */}

            {
                advertises.length > 0 &&
                <div className="py-10 grid grid-cols-3 gap-6">
                    {
                        advertises.map(item => <FurnitureCard
                            key={item._id}
                            item={item}
                        ></FurnitureCard>)
                    }
                </div>
            }
        </div>
    );
};

export default Advertised;