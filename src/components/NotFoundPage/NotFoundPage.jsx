

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <img
                src="https://i.ibb.co/8Bynchs/pagenofound.png"
                alt="404 Not Found"
                className="mb-8"
            />
            <h1 className="text-5xl font-bold mb-4 text-red-500">Page Not Found</h1>
            <p className="text-xl text-gray-700 mb-8">Sorry, the page you are looking for does not exist.</p>
            <a href="/" className="btn btn-primary">Go Home</a>
        </div>
    );
};

export default NotFoundPage;