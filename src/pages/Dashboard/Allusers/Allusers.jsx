import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";


const Allusers = () => {

    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }

    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            })
    }


    return (
        <div>
            <div className="flex justify-evenly mt-4">
                <h2 className="text-3xl">All users</h2>
                <h2 className="text-3xl">Total users:{users.length}</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>

                                    {
                                        user.role === 'seller' ? 'Seller' :
                                            user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost px-3 bg-orange-400"><FaUser className="
                                            text-xl 
                                            text-white 
                                            "></FaUser></button>
                                    }
                                </td>
                                <td>Blue</td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Allusers;