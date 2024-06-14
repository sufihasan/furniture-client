
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import { FaMobile, FaTrash } from "react-icons/fa";
import { FaMobileButton } from "react-icons/fa6";
import Swal from "sweetalert2";


const MyProduct = () => {

    const { user } = useAuth();

    console.log(user.email);

    const axiosSecure = useAxiosSecure();

    const { data: sellerFurnitures = [], refetch } = useQuery({
        queryKey: ['sellerFurnitures'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/furniture/advertise?email=${user.email}`);
            return res.data;
        }
    });

    const handleMakeAdvertise = sellerFuniture => {
        axiosSecure.patch(`/furniture/sellerfurniture/${sellerFuniture._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${sellerFuniture.furnitureName} is added to the ardertise page`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            })
    }

    const handleDeleteFurniture = sellerFuniture => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/furniture/${sellerFuniture._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "A furniture has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        })
    }



    return (
        <div>
            <h2>My product</h2>

            <div>
                <div className="flex justify-evenly mt-4">
                    <h2 className="text-3xl">My Products</h2>
                    <h2 className="text-3xl">Total Products: {sellerFurnitures.length}</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Furniture Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Advertise</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                sellerFurnitures.map((sellerFuniture, index) => <tr key={sellerFuniture._id}>
                                    <th>{index + 1}</th>
                                    <td>{sellerFuniture.furnitureName}</td>
                                    <td>{sellerFuniture.price} tk</td>
                                    <td>{sellerFuniture.status === 'sold' ? 'Sold' : 'Avaiable'}</td>
                                    <td>
                                        {
                                            sellerFuniture.advertise === 'advertiseOk' ? 'Advertised' :
                                                <button onClick={() => handleMakeAdvertise(sellerFuniture)} className="btn btn-ghost px-3 bg-orange-400">
                                                    <FaMobile className="text-xl   text-white 
                                            "></FaMobile></button>
                                        }
                                    </td>

                                    <td>
                                        <button onClick={() => handleDeleteFurniture(sellerFuniture)} className="btn btn-ghost"><FaTrash className="
                                    text-xl
                                    text-red-600
                                    "></FaTrash></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>

                    </table>


                </div>
            </div>

        </div>
    );
};

export default MyProduct;