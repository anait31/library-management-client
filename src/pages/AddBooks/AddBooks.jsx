import axios from "axios";

const AddBooks = () => {
    const addBook = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries())

        axios.post('http://localhost:5000/books', initialData)
        .then(data => {
            console.log(data.data)
        })
    }

    return (
        <div>
            <form onSubmit={addBook}>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm text-gray-500 dark:text-gray-300">Book Name</label>
                        <input name="book-name" type="text" placeholder="Book Name" className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-500 dark:text-gray-300">Author Name</label>
                        <input name="author-name" type="text" placeholder="Author Name" className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-500 dark:text-gray-300">Books Image</label>
                        <input name="book-image" type="text" placeholder="Photo URL" className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-500 dark:text-gray-300">Quantity</label>
                        <input name="quantity" type="number" placeholder="Quantity" className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-500 dark:text-gray-300">Category</label>
                        <select name="category" className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300">
                            <option defaultValue="Please Select Books Category">Please Select Books Category</option>
                            <option value="Novel">Novel</option>
                            <option value="Thriller">Thriller</option>
                            <option value="History">History</option>
                            <option value="Drama">Drama</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm text-gray-500 dark:text-gray-300">Book Content</label>
                        <input name="book-content" type="text" placeholder="Book Content" className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                    </div>
                </div>
                <div className="mt-4">
                    <label className="block text-sm text-gray-500 dark:text-gray-300">Description</label>
                    <textarea name="description" placeholder="Description..." className="block  mt-2 w-full  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"></textarea>
                </div>
                <button className="px-6 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AddBooks;