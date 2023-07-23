import React from "react";
import vg from "../assets/4.jpg";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar.</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            lorem 50 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quidem tempora esse, dolores, suscipit blanditiis voluptatum harum
            commodi asperiores ab velit quis, quisquam nihil repellat vel fugit!
            Explicabo fugit necessitatibus totam laboriosam qui nobis fugiat
            nihil assumenda ullam.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            lorem 50 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quidem tempora esse, dolores, suscipit blanditiis voluptatum harum
            commodi asperiores ab velit quis, quisquam nihil repellat vel fugit!
            Explicabo fugit necessitatibus totam laboriosam qui nobis fugiat
            nihil assumenda ullam.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{ animationDelay: "0.7s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{ animationDelay: "0.9s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
