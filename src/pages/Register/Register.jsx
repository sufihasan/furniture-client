import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const imgage_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imgage_hosting_api = `https://api.imgbb.com/1/upload?key=${imgage_hosting_key}`;
const Register = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile } = useAuth();


    const onSubmit = async (data = []) => {


        console.log(data);

        //upload to image bb and  get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(imgage_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data',
            }
        });

        console.log(res.data.data.display_url);

        //create and update user
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, res.data.data.display_url)
                    .then(() => {
                        console.log('user create successful');

                        //create user entry into database
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            ...(data.typeOfUser === 'seller' && { role: data.typeOfUser })
                        }


                        console.log(userInfo);

                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                console.log(res.data);
                                if (res.data.insertedId) {
                                    console.log('user added to database');
                                    // reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "Your work has been saved",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    // naviget('/');
                                }
                            })

                    })
            })
            .catch(error => {
                console.error(error);
            })


    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:w-1/2 lg:ml-10 lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: true })} type="text" placeholder="Full Name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" placeholder="Enter Email Please" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Eamil is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", {

                                required: true,
                                minLength: 6,
                                maxLength: 15,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/

                            })} type="password" placeholder="password" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Password is required</span>}
                            {errors.password?.type === "minLength" && <span className="text-red-500"> Min length of Password is 6 charecter</span>}
                            {errors.password?.type === "maxLength" && <span className="text-red-500"> Max length of Password is 20 charecter</span>}
                            {errors.password?.type === "pattern" && <span className="text-red-500">
                                Password must have one upper case one lower case and one number and one special charecter </span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Bayer or Seller</span>
                            </label>

                            <select defaultValue="default" {...register("typeOfUser", { required: true })}
                                className="select select-bordered w-full">
                                <option value="bayer">Buyer</option>
                                <option value="seller">Seller</option>

                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Profile Photo</span>
                            </label>
                            <input {...register("image", { required: true })} type="file"
                                className="file-input file-input-bordered w-full max-w-xs"
                            />
                            {errors.image && <span className="text-red-600">Photo is required</span>}
                        </div>




                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="px-6 pb-2">Already have an account Please<Link className="text-primary ml-1" to="/login">Login</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;