import { FaBookBookmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
    const { _id, bookname, authorname, bookimage, description, category, rating, bookcontent, quantity } = book;
    return (
        <div>
            <div className="w-full max-w-sm overflow-hidden bg-white flex flex-col rounded-lg shadow-lg dark:bg-gray-800">
                <img className="object-cover object-center w-full h-56" src={bookimage} alt="avatar" />
                <div className="flex items-center px-6 py-3 bg-gray-900">
                    <FaBookBookmark className="text-white"></FaBookBookmark>
                    <h1 className="mx-3 text-lg font-semibold text-white">{bookname}</h1>
                </div>
                <div className="px-6 py-4">
                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">By: {authorname}</h1>
                    <p className="py-2 text-gray-700 dark:text-gray-400">{category}</p>
                    <div className="flex items-center">
                        <h1 className="pr-2 text-sm">Ratings</h1>
                        <p className="py-2 text-gray-700 dark:text-gray-400">{rating}</p>
                    </div>
                    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                        <h1 className="pr-2 text-sm">Available</h1>
                        <p>{quantity}</p>
                        <Link to={`/book-details/${_id}`}><button className="text-blue-500 underline ml-4">Book Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;