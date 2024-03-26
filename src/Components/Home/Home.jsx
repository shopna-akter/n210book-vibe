import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Book from "../Book/Book";

const Home = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <div className="flex bg-[#13131311] rounded-xl h-full">
                <div className="w-2/4 my-14 grid text-left pl-6 items-center justify-center">
                    <h1 className="text-5xl font-bold mt-16">Books to freshen up <br /> your bookshelf</h1>
                    <Link to='/ListedBooks' className="text-white btn btn-success mb-12 w-32 
                    bg-[#23BE0A]">View The List
                    </Link>
                </div>
                <div className="w-2/4 my-14 flex items-center justify-center">
                    <img className="" src="https://i.ibb.co/WGmgZXN/pngwing-1.png" alt="" />
                </div>
            </div>
            <div className="mt-10 text-center ">
                <h1 className="text-2xl font-bold">Books</h1>
                <div className="grid grid-cols-3 gap-12">
                    {
                        books.map(book => <Book
                        key={book.id}
                        book={book} />)
                    }
                </div>

            </div>
        </div>

    );
};

export default Home;