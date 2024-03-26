import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooksApplication } from "../utility/Utility";

const ListedBooks = () => {
    const books = useLoaderData()
    const [readBooks, setReadBooks] = useState([])
    useEffect(() => {
        const storedId = getStoredBooksApplication();
        if (books.length > 0) {
            const booksRead = [];
            for (const id of storedId) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    booksRead.push(book)
                }
            }
            setReadBooks(booksRead)
        }
    }, []);

    return (
        <div className="text-center">
            <div className="w-full bg-base-200 text-center pt-12 h-36">
                <h1 className="text-2xl font-bold">Books : { }</h1>
            </div>
            <div tabIndex={0} role="button" className="dropdown btn btn-success dropdown-right bg-[#23BE0A]">
                <div tabIndex={0} role="button" className="m-1 mt-4 flex text-white">Sort By <img src="/public/Frame (2).svg" className="pb-2 pl-2" alt="" /></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {readBooks.map(book => (
                        <div key={book.bookId}>
                            <h2>{book.title}</h2>
                            <p>Author: {book.author}</p>
                            
                        </div>
                    ))}
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"></div>

            </div>
        </div>
    );
};

export default ListedBooks;

