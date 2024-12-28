import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Categories = () => {
    return (
        <div className="py-12">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-semibold">Book Categories</h2>
                <p className="mt-2">Book Categories refer to the various genres or classifications that help organize books based on <br /> their content, style, or target audience.</p>
            </div>
            <div className="md:flex md:gap-8">
                <Link to={'/books/Thriller'}>
                    <div className="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        <div className="px-4 py-2">
                            <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">Thriller BOOKS</h1>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
                        </div>
                        <img className="object-cover w-full h-48 mt-2" src="https://images.pexels.com/photos/29891565/pexels-photo-29891565/free-photo-of-cozy-reading-nook-with-warm-candlelight-ambiance.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="NIKE AIR" />
                        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                            <h1 className="text-lg font-bold text-white">Free</h1>
                            <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">View All</button>
                        </div>
                    </div>
                </Link>
                <Link to={'/books/History'}>
                    <div className="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        <div className="px-4 py-2">
                            <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">History Books</h1>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
                        </div>
                        <img className="object-cover w-full h-48 mt-2" src="https://images.pexels.com/photos/207681/pexels-photo-207681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="NIKE AIR" />
                        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                            <h1 className="text-lg font-bold text-white">Free</h1>
                            <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">View All</button>
                        </div>
                    </div>
                </Link>
                <Link to={'/books/Drama'}>
                    <div className="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        <div className="px-4 py-2">
                            <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">Drama Books</h1>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
                        </div>
                        <img className="object-cover w-full h-48 mt-2" src="https://images.pexels.com/photos/1643033/pexels-photo-1643033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="NIKE AIR" />
                        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                            <h1 className="text-lg font-bold text-white">Free</h1>
                            <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">View All</button>
                        </div>
                    </div>
                </Link>
                <Link to={'/books/Comic'}>
                    <div className="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        <div className="px-4 py-2">
                            <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">Comic Books</h1>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
                        </div>
                        <img className="object-cover w-full h-48 mt-2" src="https://images.pexels.com/photos/29907113/pexels-photo-29907113/free-photo-of-cozy-indoor-window-scene-with-aloe-plant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="NIKE AIR" />
                        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                            <h1 className="text-lg font-bold text-white">Free</h1>
                            <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">View All</button>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Categories;