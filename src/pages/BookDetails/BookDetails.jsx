import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../providers/AuthProviders";
import axios from "axios";

const BookDetails = () => {
    const book = useLoaderData();
    const [startDate, setStartDate] = useState(new Date());
    const [startDates, setStartDates] = useState(new Date());
    const { user } = useContext(AuthContext);
    const { _id, bookname, authorname, bookimage, description, category, bookcontent, quantity } = book;

    const handleBorrowedBook = e => {
        e.preventDefault();

        // const formData = new FormData(e.target);
        // const initialData = Object.fromEntries(formData.entries())
        // console.log(initialData)

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const borroweDdate = form.borroweddate.value;
        const returnDate = form.returndate.value;
        const job_id = _id
        const borrowedData = {name, email, borroweDdate, returnDate, job_id}
        console.log(borrowedData)

        axios.post('http://localhost:5000/borrowed-books', borrowedData)
        .then(data => {
            console.log(data.data);
        })
    }

    return (
        <div className="">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white mb-4">Book Details</h2>
            <div className="flex items-center gap-8">
                <div className="overflow-hidden md:w-2/3 bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <img className="object-cover w-full h-64" src={bookimage} alt="Article" />
                    <div className="p-6">
                        <div>
                            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{category}</span>
                            <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{bookname}</a>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    <img className="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                                    <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">{authorname}</a>
                                </div>
                                <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-6 bg-white rounded-md shadow-md dark:bg-gray-800">
                    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">User Details</h2>
                    <form onSubmit={handleBorrowedBook}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200">User Name</label>
                                <input name="name" disabled type="text" defaultValue={user?.displayName} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200">Email Address</label>
                                <input name="email" disabled type="email" defaultValue={user?.email} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200">Borrowed Date</label>
                                <DatePicker name="borroweddate" disabled className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" selected={startDates} onChange={(date) => setStartDates(date)} />
                            </div>
                            <div className="">
                                <label className="text-gray-700 dark:text-gray-200">Return Date</label>
                                <DatePicker name="returndate" className="block px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                        </div>
                        <div className="flex justify-end mt-6">
                            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Borrow Book</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;