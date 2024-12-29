import { useLoaderData } from "react-router-dom";
import Book from "../../components/Book/Book";

const Books = () => {
    const books = useLoaderData()
    return (
        <div className="container mx-auto">
            <div>
            <h2 className='text-4xl mb-4 font-semibold'>All Books</h2>
            </div>
            <div className=" grid grid-cols-4 gap-6">
                {
                    books.map(book => <Book key={book._id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;