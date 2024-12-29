import { useLoaderData } from "react-router-dom";
import Book from "../../components/Book/Book";

const Books = () => {
    const books = useLoaderData()
    return (
        <div className="container mx-auto grid grid-cols-4 gap-6">
            {
                books.map(book => <Book key={book._id} book={book}></Book>)
            }
        </div>
    );
};

export default Books;