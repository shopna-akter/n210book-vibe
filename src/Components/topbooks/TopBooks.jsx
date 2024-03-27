import { useLoaderData } from "react-router-dom";

const BookCard = () => {
  const topBooks = useLoaderData();

  return (
    <div>
      {topBooks.map((book) => (
        <div key={book.bookId} className="card border-2 card-side mb-8 bg-base-100">
          <img src={book.image} className="h-72 my-10 w-48 lg:ml-12" alt="Book" />
          <div className="card-body text-left">
            <h2 className="card-title mb-0 flex-grow">{book.bookName}</h2>
            <p>By : {book.author}</p>
            <div className="lg:flex gap-4 mb-1">
              <h1 className="mb-3 lg:mb-0 "><span className="lg:mr-12 font-bold">#Tags</span>{
                book.tags.map((tag, index) => (
                  <span key={index} className="px-4 text-green-500 py-1 font-bold">
                    {tag}
                  </span>
                ))
              }</h1>
              <h1 className="flex gap-1"><img src="/public/Frame (6).png" alt="" /> Year of publishing : {book.yearOfPublishing}</h1>
            </div>
            <div className="lg:flex gap-2 flex-wrap">
              <h1 className="flex gap-2 pb-1"><img src="/public/Frame (7).png" alt="" />Publisher : {book.publisher}</h1>
              <h1 className="flex gap-2 pb-1"><img src="/public/Frame (8).png" alt="" />Page : {book.totalPages}</h1>
              <h1 className="flex gap-2 pb-1"><img src="/public/Frame (8).png" alt="" />TotalSale : {book.totalSale}</h1>
            </div>
            <div className="flex gap-2 mt-3 lg:gap-4">
              <button className="text-[#328EFF] p-2 rounded-3xl bg-[#328eff1c]">Category : {book.category}</button>
              <button className="text-[#FFAC33] p-2 rounded-3xl bg-[#FFAC331c]">Rating : {book.rating}</button>
              <button className="bg-[#23BE0A] btn-success btn hover:bg-[#23BE0A] text-white">View Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookCard;
