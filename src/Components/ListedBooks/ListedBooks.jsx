import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooksApplication, getStoredReadBooksApplication } from "../utility/Utility";

const ListedBooks = () => {
    const books = useLoaderData()
    const [wishBooks, setWishBooks] = useState([])
    const [readBooks, setReadBooks] = useState([])
    useEffect(() => {
        const storedId = getStoredBooksApplication();
        if (books.length > 0) {
            const booksWish = [];
            for (const id of storedId) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    booksWish.push(book)
                }
            }
            setWishBooks(booksWish)
        }
    }, []);
    useEffect(() => {
        const storedId = getStoredReadBooksApplication();
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
                            <div key={book.bookId} className="card card-side mb-8 bg-base-100">
                                <img src={book.image} className="h-72 mt-8 w-48" alt="Movie" />
                                <div className="card-body text-left">
                                    <h2 className="card-title mb-0 flex-grow">{book.bookName}</h2>
                                    <p>By : {book.author}</p>
                                    <div className="flex gap-4 mb-4">
                                        <h1><span className="mr-12 font-bold">#Tags</span>{
                                            book.tags.map((tag, index) => (
                                                <span key={index} className="px-4 text-green-500 py-1 font-bold  ">
                                                    {tag}
                                                </span>
                                            ))
                                        }</h1>
                                        <h1 className="flex gap-1"><img src="/public/Frame (6).png" alt="" /> Year of publishing : {book.yearOfPublishing}</h1>
                                    </div>
                                    <div className="flex gap-2">
                                        <h1 className="flex gap-2 font-extralight"><img src="/public/Frame (7).png" alt="" />Publisher : {book.publisher}</h1>
                                        <h1 className="flex gap-2 font-extralight"><img src="/public/Frame (8).png" alt="" />Page : {book.totalPages}</h1>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Watch</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {wishBooks.map(book => (
                        <div key={book.bookId} className="card card-side mb-8 bg-base-100">
                            <img src={book.image} className="h-72 w-48" alt="Movie" />
                            <div className="card-body text-left">
                                <h2 className="card-title mb-0 flex-grow">{book.bookName}</h2>
                                <p>By : {book.author}</p>
                                <div className="flex gap-4">
                                    <h1><span className="mr-12  font-bold">#Tags</span>{
                                        book.tags.map((tag, index) => (
                                            <span key={index} className="px-4 text-green-500 py-1 font-bold  ">
                                                {tag}
                                            </span>
                                        ))
                                    }</h1>
                                    <h1 className="flex gap-1"><img src="/public/Frame (6).png" alt="" /> Year of publishing : {book.yearOfPublishing}</h1>
                                </div>
                                <div className="flex gap-2">
                                    <h1 className="flex gap-2 font-extralight"><img src="/public/Frame (7).png" alt="" />Publisher : {book.publisher}</h1>
                                    <h1 className="flex gap-2 font-extralight"><img src="/public/Frame (8).png" alt="" />Page : {book.totalPages}</h1>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Watch</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ListedBooks;

