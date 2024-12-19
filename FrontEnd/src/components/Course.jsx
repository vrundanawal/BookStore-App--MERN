import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Course = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get('http://localhost:4001/books');
        const data = response.data;
        setBooks(data);
      } catch (error) {
        console.log('Error : ', error);
      }
    };
    getBooks();
  }, []);

  return (
    <>
      <div className="pt-16 min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="mt-12 items-center justify-center text-center">
            <h1 className="text-2xl  md:text-4xl">
              We're delighted to have you{' '}
              <span className="text-pink-500"> Here! :)</span>
            </h1>
            <p className="mt-12">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
              assumenda? Repellendus, iste corrupti? Tempore laudantium
              repellendus accusamus accusantium sed architecto odio, nisi
              expedita quas quidem nesciunt debitis dolore non aspernatur
              praesentium assumenda sint quibusdam, perspiciatis, explicabo
              sequi fugiat amet animi eos aut. Nobis quisquam reiciendis sunt
              quis sed magnam consequatur!
            </p>
            <Link to="/">
              <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                Back
              </button>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {books.map((book) => (
              <Cards key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
