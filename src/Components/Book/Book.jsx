import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
const Book = ({ book }) => {
    return (
        <div>
            <motion.div key={book._id} whileHover={{ scale: 1.05 }} className="mb-4">
                <Link to={`/Book/${book.bookId}`}>
                    <div className="card border bg-base-100 shadow-xl">
                        <figure><img src={book.image} className='h-80 mt-4 lg:mt-0' alt="Shoes" /></figure>
                        <div className="card-body text-left">
                            <h2 className="card-title text-green-600 gap-4 flex">{book.tags.map((tag, index) => (
                                <span key={index} className="px-4 py-1">
                                    {tag}
                                </span>
                            ))}</h2>
                            <p className='font-bold text-xl'>{book.bookName}</p>
                            <p>By : {book.author}</p>
                            <div className="card-actions justify-between">
                                <h1>{book.category}</h1>
                                <h1 className='flex gap-1'> {book.rating} <img src="/public/Frame (5).png" alt="" /></h1>
                            </div>
                        </div>
                    </div>
                </Link>
            </motion.div>
        </div >
    );
};
Book.propTypes = {
    book: PropTypes.object
}

export default Book;