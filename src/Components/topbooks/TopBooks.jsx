import { useLoaderData } from "react-router-dom";

const BookCard = () => {
  const topBooks = useLoaderData()
  const [bookName , image ,  author ,category , totalPages , tags , publisher ,yearOfPublishing , totalSale , rating] = topBooks

  return (
    <div className="book-card card">
      <img src={image} alt={bookName} />
      <div className="card-body">
        <h3>{bookName}</h3>
        <p><strong>Author:</strong> {author}</p>
        <p><strong>Category:</strong> {category}</p>
        <p><strong>Tags:</strong> {tags.join(', ')}</p>
        <p><strong>Total Pages:</strong> {totalPages}</p>
        <p><strong>Publisher:</strong> {publisher}</p>
        <p><strong>Year of Publishing:</strong> {yearOfPublishing}</p>
        <p><strong>Rating:</strong> {rating}</p>
        <p><strong>Total Sale:</strong> {totalSale}</p>
      </div>
    </div>
  );
};

export default BookCard;
