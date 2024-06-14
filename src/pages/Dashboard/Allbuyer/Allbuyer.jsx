import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const Allbuyer = () => {
    const axiosSecure = useAxiosSecure();

    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/role/buyer`);
            return res.data;
        }

    });


    const handleDeleteUser = buyer => {
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

                axiosSecure.delete(`/users/${buyer._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="flex justify-evenly mt-4">
                <h2 className="text-3xl">All Buyers</h2>
                <h2 className="text-3xl">Total Buyers:{buyers.length}</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>

                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            buyers.map((buyer, index) => <tr key={buyer._id}>
                                <th>{index + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>

                                <td>
                                    <button onClick={() => handleDeleteUser(buyer)} className="btn btn-ghost"><FaTrash className="
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
    );
};

export default Allbuyer;