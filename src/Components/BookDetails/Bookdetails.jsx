import { useLoaderData, useParams } from "react-router-dom";

const Bookdetails = () => {
    const books = useLoaderData();
    const { id } = useParams()
    const book = books.find(book => book.bookId == id);
    console.log(book);
    return (
        <div className="flex mt-8">
            <div className="bg-base-100 h-[450px] w-[40%] text-center rounded-xl">
                <img src={book.image} className="w-[60%] h-[80%] mx-auto mt-10" alt="" />
            </div>
            <div className="w-[40%]">
                <h1 className="text-2xl font-bold">{book.bookName}</h1>
                <h1 className="mb-4">By :{book.author}</h1>
                <hr />
                <h1 className="pb-4 pt-2">{book.category}</h1>
                <hr />
                <p className="mb-5 pt-4">
                    <span className="font-bold">Review : </span>
                    {book.review}
                </p>
                <h1><span className="mr-12 font-bold">Tags</span>{
                    book.tags.map((tag, index) => (
                        <span key={index} className="px-4 py-1 font-bold text-green-500 ">
                            {tag}
                        </span>
                    ))
                }</h1>
                <h1 className="pt-4">Number of page : <span className="font-bold pl-12">{book.totalPages}</span></h1>
                <h1 className="pt-4">Publisher : <span className="font-bold pl-24">{book.publisher}</span></h1>
                <h1 className="pt-4">Year of publishing : <span className="font-bold pl-10">{book.yearOfPublishing}</span></h1>
                <h1 className="pt-4">Rating : <span className="font-bold pl-[124px]">{book.rating}</span></h1>
                <div className="flex gap-4 mt-6">
                    <button className="btn bg-[#1313132d] p-4 font-bold border-white">Read</button>
                    <button className="btn text-white bg-[#50B1C9]">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default Bookdetails;