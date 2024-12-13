import React from 'react';
//how to access the data from list.json file
import list from '../../public/list.json';

const FreeBook = () => {
  //filter list if the book category is free
  const filterBook = list.filter((book) => book.category === 'Free');

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <h1 className="font-semibold text-xl pb-2 ">Free offered courses</h1>
        <p>
          This is a fascinating book that offers a wealth of knowledge and
          insights. Perfect for anyone looking to expand their understanding and
          skills.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filterBook.map((book) => (
            <div key={book.id} className="mb-4 p-4 border rounded-lg shadow-md">
              <h2 className="text-lg font-bold">{book.title}</h2>
              <p className="text-sm text-gray-600">{book.author}</p>
              <p className="text-sm text-gray-600">{book.price}</p>
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-auto mt-2"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FreeBook;
