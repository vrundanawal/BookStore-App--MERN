import React from 'react';

const Cards = ({ book }) => {
  console.log(book);
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img
              src={book.image}
              alt="Shoes"
              className="max-w-[300px] h-[300px]"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {book.name}
              <div className="badge badge-secondary">{book.category}</div>
            </h2>
            <p>{book.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${book.price}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;