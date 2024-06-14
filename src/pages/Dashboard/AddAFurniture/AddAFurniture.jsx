import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaChair } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useCurrentTime from "../../../hooks/useCurrentTime";

const imgage_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imgage_hosting_api = `https://api.imgbb.com/1/upload?key=${imgage_hosting_key}`;
const AddAFurniture = () => {

    const { register, handleSubmit, reset } = useForm();

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const currentTime = useCurrentTime();

    const { user } = useAuth();

    const onSubmit = async (data = []) => {
        console.log(data)
        //upload to image bb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(imgage_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data',
            }
        })

        // if (!res.data.success) {
        //     return <span className="loading loading-spinner loading-lg"></span>
        // }

        if (res.data.success) {
            const furnitureItem = {
                furnitureName: data.furniturename,
                category: data.category,
                price: parseFloat(data.price),
                condition: data.condition,
                image: res.data.data.display_url,
                details: data.funituredetails,
                location: data.location,
                mobileNumber: data.mobilenumber,
                yearOfPurchase: data.yearofpuchase,
                userEmail: user.email,
                userName: user.displayName,
                createdAt: currentTime

            }

            const furnitureRes = await axiosSecure.post('/furniture', furnitureItem);
            console.log(furnitureRes.data);
            if (furnitureRes.data.insertedId) {
                // show success pop up
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.furniturename} is added successfull`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }


        console.log('with img url', res.data);


    }


    return (
        <div>
            <h2 className="text-3xl text-center">Add a new furniture</h2>

            <form onSubmit={handleSubmit(onSubmit)}>



                <div className="flex gap-6">
                    {/* Furniture name */}
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Furniture Name*</span>
                        </div>
                        <input
                            {...register("furniturename", { required: true })}
                            type="text" placeholder="Enter Furniture Name" className="input input-bordered w-full " />

                    </label>

                    {/* category */}
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Category*</span>
                        </div>

                        <select defaultValue="default" {...register("category", { required: true })}
                            className="select select-bordered w-full">
                            <option disabled value="default">Select a category</option>
                            <option value="leavingroom">Leaving Room</option>
                            <option value="bedroom">Bedroom</option>
                            <option value="dining">Dining</option>

                        </select>

                    </label>

                </div>

                <div className="flex gap-6">
                    {/* Furniture Condition */}
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Furniture Condition*</span>
                        </div>

                        <select defaultValue="default" {...register("condition", { required: true })}
                            className="select select-bordered w-full">
                            <option disabled value="default">Select a condition</option>
                            <option value="excellent">Excellent</option>
                            <option value="good">Good</option>
                            <option value="fair">Fair</option>

                        </select>

                    </label>

                    {/* price */}
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Price*</span>
                        </div>
                        <input
                            {...register("price", { required: true })}
                            type="number" placeholder="Enter Price"
                            className="input input-bordered w-full " />

                    </label>

                </div>

                <div className="flex gap-6">
                    {/* Location */}
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Location*</span>
                        </div>
                        <input
                            {...register("location", { required: true })}
                            type="text" placeholder="Enter Location" className="input input-bordered w-full " />

                    </label>

                    {/* Mobile Number */}
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Mobile Number*</span>
                        </div>
                        <input
                            {...register("mobilenumber", { required: true })}
                            type="text" placeholder="Enter Mobile Number"
                            className="input input-bordered w-full " />

                    </label>

                </div>

                <div className="flex gap-6">
                    {/* Year of Purchase */}
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Year of Purchase*</span>
                        </div>
                        <input
                            {...register("yearofpuchase", { required: true })}
                            type="text" placeholder="Enter Year of Purchase" className="input input-bordered w-full " />

                    </label>

                    {/* Mobile Number */}
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Furniture Image*</span>
                        </div>
                        <input {...register("image", { required: true })} type="file"
                            className="file-input file-input-bordered w-full max-w-xs"
                        />
                    </label>


                </div>

                {/* Furniture Details */}
                <label className="form-control mb-6">
                    <div className="label">
                        <span className="label-text">Furniture Details*</span>

                    </div>
                    <textarea {...register("funituredetails")}
                        required
                        className="textarea textarea-bordered h-24"
                        placeholder="Write about your furniture"></textarea>

                </label>




                <button className="btn">
                    Add Furniture <FaChair className="ml-4"></FaChair>
                </button>
            </form>

        </div>
    );
};

export default AddAFurniture;