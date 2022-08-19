import React, { useEffect } from "react";
import { ClientContext } from "../context/ClientProvider";
import { Link } from "react-router-dom";
import Image from "../Image/IMAGE.png";
import Image1 from "../Image/IMAGE (1).png";
import Image2 from "../Image/IMAGE (2).png";
import Image3 from "../Image/IMAGE (3).png";
import Image4 from "../Image/IMAGE (4).png";

function MainPages() {
  const { products, getProducts } = React.useContext(ClientContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <div className="page-1">
        <div className="text">
          <div className="h1-text">
            <h1>
              The new phones are <br /> here take a look.
            </h1>
          </div>
          <div className="p-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque in est <br /> dui, aliquam, tempor. Faucibus morbi
              turpis.
            </p>
          </div>
          <button>Explore</button>
        </div>
        <div className="page-image">
          <img src={Image} alt="" />
        </div>
      </div>
      <div className="page-2">
        <div className="h2-text">
          <h2>Shop our latest offers and categories</h2>
        </div>
        <div className="p2-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            in est dui, aliquam, <br /> tempor. Faucibus morbi turpis. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="image-filter">
          <div className="image-filter-left">
            <div className="image-icon1">
              <Link to="/products/notebooks">
                <img src={Image1} alt="" />
                <div className="image-text1">
                  <p>Laptops</p>
                  <h2>True Laptop Solution</h2>
                </div>
              </Link>
            </div>
            <div className="image-icon2">
              <Link to={"/products/watches"}>
                <img src={Image2} alt="" />
                <div className="image-text2">
                  <p>Watch</p>
                  <h2>Not just stylisht</h2>
                </div>
              </Link>
            </div>
          </div>
          <div className="image-filter-right">
            <div className="image-icon3">
              <Link to={"/products/phones"}>
                <img src={Image3} alt="" />
                <div className="image-text3">
                  <p>Phones</p>
                  <h2>Your day to day life</h2>
                </div>
              </Link>
            </div>
            <div className="image-icon4">
              <Link to={"/products/tables"}>
                <img src={Image4} alt="" />
                <div className="image-text4">
                  <p>Tablet</p>
                  <h2>Empower your work</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPages;
