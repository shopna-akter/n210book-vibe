import { useLoaderData, useParams } from "react-router-dom";

const Bookdetails = () => {
    const books = useLoaderData()
    const {bookId}  = useParams()
    console.log(bookId , books);
    return (
        <div>
            <h1>book details</h1>
        </div>
    );
};

export default Bookdetails;