import { useLoaderData, useParams } from "react-router-dom";
import Book from "../../components/Book/Book";

const BooksCategories = () => {
    const booksByCategories = useLoaderData();
    const {categories} = useParams();
    return (
        <div className="container mx-auto">
            <h2 className=' text-2xl md:text-3xl mb-4 font-semibold px-4 md:px-0'>{categories} Book</h2>
            <div className="md:grid md:grid-cols-4 md:gap-8">
                {
                    booksByCategories.map(book => <Book key={book._id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default BooksCategories;