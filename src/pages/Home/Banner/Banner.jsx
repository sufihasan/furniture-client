

const Banner = () => {
    return (

        <>
            <section className="bg-white dark:bg-gray-900 border">
                <div className="grid max-w-screen-xl px-4 pt-8 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12 ">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                            Welcome to <br />Furniture Treasure.
                        </h1>

                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            Welcome to our marketplace! Discover the best deals on pre-loved furniture or find a new home
                            for your own cherished pieces. We connect buyers and sellers across Bangladesh, offering a secure and
                            seamless platform for trading high-quality,
                            second-hand furniture. Join our community and give your furniture a second life today!
                        </p>

                        <button className="btn btn-primary text-xl">Join Us</button>
                    </div>

                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img className="rounded-full" src="https://i.ibb.co/xFmLZGW/oldisgold.jpg" alt="hero image" />
                    </div>
                </div>
            </section>


        </>

    );
};

export default Banner;