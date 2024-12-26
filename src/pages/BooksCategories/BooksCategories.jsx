import { useLoaderData } from "react-router-dom";
import Book from "../../components/Book/Book";

const BooksCategories = () => {
    const booksByCategories = useLoaderData()
    return (
        <div>
            <div className="md:grid md:grid-cols-4 md:gap-8">
                {
                    booksByCategories.map(book => <Book book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default BooksCategories;