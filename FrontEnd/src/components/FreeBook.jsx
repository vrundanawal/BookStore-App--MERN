import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
//how to access the data from list.json file
import list from '../../public/list.json';
import Cards from './Cards';

const FreeBook = () => {
  //filter list if the book category is free
  const filterBook = list.filter((book) => book.category === 'Free');
  //from react-slick library to add carousal resposive
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2 ">Free offered courses</h1>
          <p>
            This is a fascinating book that offers a wealth of knowledge and
            insights. Perfect for anyone looking to expand their understanding
            and skills.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {filterBook.map((book) => (
              <Cards key={book.id} book={book} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBook;