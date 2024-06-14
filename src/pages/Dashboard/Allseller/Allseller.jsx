import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const Allseller = () => {
    const axiosSecure = useAxiosSecure();

    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/role/seller?role=${'seller'}`)
            return res.data;
        }
    })

    const handleDeleteUser = seller => {
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

                axiosSecure.delete(`/users/${seller._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "A seller has been deleted.",
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
            <div className="flex justify-evenly mt-4">
                <h2 className="text-3xl">All Seller</h2>
                <h2 className="text-3xl">Total Seller: {sellers.length}</h2>
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
                            sellers.map((seller, index) => <tr key={seller._id}>
                                <th>{index + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>

                                <td>
                                    <button onClick={() => handleDeleteUser(seller)} className="btn btn-ghost"><FaTrash className="
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

export default Allseller;