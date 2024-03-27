import { Link } from "react-router-dom";

const ErrorElement = () => {
    return (
        <div className="bg-gray-100 flex justify-center items-center h-screen">
            <div className="text-center">
               <figure><img src="https://img.freepik.com/free-vector/hand-drawn-404-error_23-2147737389.jpg?w=740&t=st=1711558712~exp=1711559312~hmac=1b9fbb728d98b24ab1b65d716c0152d529a7d1fa63be5e3867e8af0c6149c6e4" alt="Error Illustration" className="mx-auto w-[370px] mb-8 rounded-xl" /></figure> 
                <h1 className="text-3xl font-bold mb-4">Error 404: Page Not Found</h1>
                <p className="mb-4">Oh no! It seems like you have taken a wrong turn.</p>
                <Link to='/' className="btn btn-ghost">Back to home</Link>
                <div className="text-left mb-2">
                    <h2 className="text-lg font-semibold mb-2">What went wrong?</h2>
                    <ul className="list-disc pl-5">
                        <li>You may have mistyped the URL.</li>
                        <li>The page you are looking for might have been moved or deleted.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ErrorElement;