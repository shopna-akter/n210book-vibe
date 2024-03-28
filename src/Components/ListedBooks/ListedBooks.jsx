import { getStoredBooksApplication, getStoredReadBooksApplication } from "../utility/Utility";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const ListedBooks = () => {
    const books = useLoaderData();
    const [wishBooks, setWishBooks] = useState([]);
    const [sortedWishBooks, setSortedWishBooks] = useState([]);
    const [sortBy, setSortBy] = useState(null); // State to hold the selected sorting criteria

    useEffect(() => {
        const storedId = getStoredBooksApplication();
        if (books.length > 0) {
            const booksWish = [];
            for (const id of storedId) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    booksWish.push(book);
                }
            }
            setWishBooks(booksWish);
            setSortedWishBooks(booksWish); // Initialize sortedWishBooks with unsorted wishlist books
        }
    }, [books]);

    const [readBooks, setReadBooks] = useState([]); // State to hold read books

    useEffect(() => {
        const storedId = getStoredReadBooksApplication();
        if (books.length > 0) {
            const booksRead = [];
            for (const id of storedId) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    booksRead.push(book);
                }
            }
            setReadBooks(booksRead);
        }
    }, [books]);

    // Function to sort wishlist books based on selected criteria
    const sortWishBooks = (criteria) => {
        if (criteria === sortBy) {
            // If already sorted by the same criteria, reverse the order
            setSortedWishBooks(prevState => [...prevState].reverse());
        } else {
            setSortBy(criteria);
            if (criteria === "rating") {
                // Sort by rating
                setSortedWishBooks(prevState => [...prevState].sort((a, b) => b.rating - a.rating));
            } else if (criteria === "pages") {
                // Sort by number of pages
                setSortedWishBooks(prevState => [...prevState].sort((a, b) => b.totalPages - a.totalPages));
            } else if (criteria === "year") {
                // Sort by published year
                setSortedWishBooks(prevState => [...prevState].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing));
            }
        }
    };

    return (
        <div className="text-center">
            {/* Sorting dropdown */}
            <div tabIndex={0} role="button" className="dropdown btn btn-success dropdown-right bg-[#23BE0A]">
                <div tabIndex={0} role="button" className="m-1 mt-4 flex text-white">Sort By <img src="/public/Frame (2).svg" className="pb-2 pl-2" alt="" /></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52">
                    <li onClick={(e) => { e.preventDefault(); sortWishBooks("rating"); }}><a>Rating</a></li>
                    <li onClick={(e) => { e.preventDefault(); sortWishBooks("pages"); }}><a>Number of Pages</a></li>
                    <li onClick={(e) => { e.preventDefault(); sortWishBooks("year"); }}><a>Published Year</a></li>
                </ul>
            </div>
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {readBooks.map(book => (
                        <div key={book.bookId}>
                            <div key={book.bookId} className="card card-side mb-8 bg-base-100">
                                <figure><img src={book.image} className="h-72 w-48" alt="Movie" /></figure>
                                <div className="card-body text-left">
                                    <h2 className="card-title mb-0 flex-grow">{book.bookName}</h2>
                                    <p>By : {book.author}</p>
                                    <div className="lg:flex gap-4 mb-1">
                                        <h1 className="mb-3 lg:mb-0 "><span className="lg:mr-12 font-bold">#Tags</span>{
                                            book.tags.map((tag, index) => (
                                                <span key={index} className="px-4 text-green-500 py-1 font-bold  ">
                                                    {tag}
                                                </span>
                                            ))
                                        }</h1>
                                        <h1 className="flex gap-1"><img src="/public/Frame (6).png" alt="" /> Year of publishing : {book.yearOfPublishing}</h1>
                                    </div>
                                    <div className="flex gap-1">
                                        <h1 className="flex gap-1"><img src="/public/Frame (7).png" alt="" />Publisher : {book.publisher}</h1>
                                        <h1 className="flex gap-1 "><img src="/public/Frame (8).png" alt="" />Page : {book.totalPages}</h1>
                                    </div>
                                    <div className="flex gap-2 mt-3 lg:gap-4">
                                        <button className="text-[#328EFF] p-2 rounded-3xl bg-[#328eff1c]">Category : {book.category}</button>
                                        <button className="text-[#FFAC33] p-2 rounded-3xl bg-[#FFAC331c]">Rating : {book.rating}</button>
                                        <Link to={`/Book/${book.bookId}`} className="bg-[#23BE0A] btn-success btn
                                    hover:bg-[#23BE0A] text-white">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {sortedWishBooks.map(book => (
                        <div key={book.bookId} className="card card-side mb-8 bg-base-100">
                            <figure><img src={book.image} className="h-72 w-48" alt="Movie" /></figure>
                            <div className="card-body text-left">
                                <h2 className="card-title mb-0 flex-grow">{book.bookName}</h2>
                                <p>By : {book.author}</p>
                                <div className="lg:flex gap-4 mb-1">
                                    <h1 className="mb-3 lg:mb-0 "><span className="lg:mr-12 font-bold">#Tags</span>{
                                        book.tags.map((tag, index) => (
                                            <span key={index} className="px-4 text-green-500 py-1 font-bold  ">
                                                {tag}
                                            </span>
                                        ))
                                    }</h1>
                                    <h1 className="flex gap-1"><img src="/public/Frame (6).png" alt="" /> Year of publishing : {book.yearOfPublishing}</h1>
                                </div>
                                <div className="flex gap-1">
                                    <h1 className="flex gap-1"><img src="/public/Frame (7).png" alt="" />Publisher : {book.publisher}</h1>
                                    <h1 className="flex gap-1 "><img src="/public/Frame (8).png" alt="" />Page : {book.totalPages}</h1>
                                </div>
                                <div className="flex gap-2 mt-3 lg:gap-4">
                                    <button className="text-[#328EFF] p-2 rounded-3xl bg-[#328eff1c]">Category : {book.category}</button>
                                    <button className="text-[#FFAC33] p-2 rounded-3xl bg-[#FFAC331c]">Rating : {book.rating}</button>
                                    <Link to={`/Book/${book.bookId}`} className="bg-[#23BE0A]
                                     btn-success btn
                                    hover:bg-[#23BE0A] text-white">View Details</Link>
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
