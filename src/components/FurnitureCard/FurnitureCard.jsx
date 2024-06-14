

const FurnitureCard = ({ item }) => {



    const { furnitureName, price, details, image, condition,
        location, _id, mobileNumber, yearOfPurchase, userName, createdAt } = item;





    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>

            <p className="bg-slate-900 text-white 
            absolute right-0 mr-3 
            bg-opacity-50 mt-2 px-2 rounded">${price}</p>

            <div className="card-body text-center flex flex-col items-center">
                <h2 className="card-title">{furnitureName}</h2>
                <div className="flex gap-4">
                    <h2 ><span className="font-bold">Seller Name:</span> {userName ? userName : 'Mr.x'}</h2>
                    <h2 ><span className="font-bold">Condition:</span> {condition}</h2>
                </div>
                <div className="flex gap-4">
                    <h2 ><span className="font-bold">Location:</span> {location}</h2>
                    <h2><span className="font-bold">Years of Use:</span> {yearOfPurchase} years</h2>
                </div>

                <h2><span className="font-bold">Date of Post:</span> {createdAt ? createdAt : 'Not inserted'}</h2>
                <h2><span className="font-bold">Mobile:</span> {mobileNumber}</h2>
                <p className="">{details}</p>

                <div className="card-actions justify-end">


                    <button className="btn btn-outline
                     bg-slate-100 border-orange-400
                      border-0 border-b-4 mt-4"
                    >Book Now</button>



                </div>
            </div>
        </div>
    );
};

export default FurnitureCard;