import React from "react";

import Carousel from "react-material-ui-carousel";

function HomeSlider(props) {
  let items = [
    {
      name: "Gaming Setup",
      image:
        "https://images.unsplash.com/photo-1572314493295-09c6d5ec3cdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    },
    {
      name: "Mac Setup",
      image:
        "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1331&q=80",
    },
  ];

  return (
    <Carousel className="homepage-slider">
      {items.map((item) => (
        <img src={item.image} alt={item.name}></img>
      ))}
    </Carousel>
  );
}

export default HomeSlider;
