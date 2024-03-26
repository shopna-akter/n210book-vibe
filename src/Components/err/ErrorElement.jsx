import { Link } from "react-router-dom";

const ErrorElement = () => {
    return (
        <div className="text-center">
            <h1>Opsss!!!</h1>
            <h1>Page not found </h1>
            <div className="flex text-center">
                <p>Try again later or</p>
                <Link to={'/Home'} className="btn btn-ghost">Go back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorElement;