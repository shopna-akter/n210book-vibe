import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooksApplication } from "../utility/Utility";

const ListedBooks = () => {
    const books = useLoaderData();
    useEffect(() =>{
        const storedBooks = getStoredBooksApplication()
        if (books.length > 0) {
            const bookApplied = books.filter(book => book)
        }
    },[])
    return (
        <div className="text-center">
            <div className="w-full bg-base-200 text-center">
                <h1 className="text-2xl font-bold">Books</h1>
            </div>
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"></div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"></div>

            </div>           
        </div>
    );
};

export default ListedBooks;