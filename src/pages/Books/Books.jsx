import { useLoaderData } from "react-router-dom";
import Book from "../../components/Book/Book";

const Books = () => {
    const books = useLoaderData()
    return (
        <div className="container mx-auto px-4 md:px-0">
            <div>
            <h2 className='text-4xl mb-4 font-semibold'>All Books</h2>
            </div>
            <div className=" md:grid md:grid-cols-4 md:gap-6 space-y-4 md:space-y-0">
                {
                    books.map(book => <Book key={book._id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;