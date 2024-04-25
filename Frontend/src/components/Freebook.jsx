import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import list from "../../public/list.json"

const Freebook = () => {
  const filterData = list.filter((data) => data.category === "Free");
  console.log(filterData);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <h1 className="font-semibold text-xl pb-2">Free Offered Course</h1>
        <p>
          lorem, ispum dolar sit amet consectetur adipisicing elite. Dolar, et
          totam. Tempora amet atque expedita, quae corrupti total sed particular
          corporis at veniam est voluptas animi!
        </p>
      </div>
    </>
  );
}

export default Freebook