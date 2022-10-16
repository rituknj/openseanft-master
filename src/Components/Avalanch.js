import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "../Components/Images/hen.avif";
import Image2 from "../Components/Images/hen.avif";
import Card from "react-bootstrap/Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Avalanch.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <section>
      <div className="container  py-5">
        <h1>Avalanche spotlight</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={Image1} />
              <Card.Body>
      <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src="https://i.seadn.io/gcs/files/c00d3dd212a1b3b9a2340cb15e81a880.png?auto=format&w=128"
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Mohammad Ali</span>
                </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={Image1} />
              <Card.Body>
      <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src="https://i.seadn.io/gcs/files/c00d3dd212a1b3b9a2340cb15e81a880.png?auto=format&w=128"
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Mohammad Ali</span>
                </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={Image2} />
              <Card.Body>
      <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src="https://i.seadn.io/gcs/files/c00d3dd212a1b3b9a2340cb15e81a880.png?auto=format&w=128"
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Mohammad Ali</span>
                </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={Image1} />
              <Card.Body>
      <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src="https://i.seadn.io/gcs/files/c00d3dd212a1b3b9a2340cb15e81a880.png?auto=format&w=128"
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Mohammad Ali</span>
                </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={Image2} />
              <Card.Body>
      <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src="https://i.seadn.io/gcs/files/c00d3dd212a1b3b9a2340cb15e81a880.png?auto=format&w=128"
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Mohammad Ali</span>
                </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={Image1} />
              <Card.Body>
      <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src="https://i.seadn.io/gcs/files/c00d3dd212a1b3b9a2340cb15e81a880.png?auto=format&w=128"
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Mohammad Ali</span>
                </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={Image2} />
              <Card.Body>
      <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src="https://i.seadn.io/gcs/files/c00d3dd212a1b3b9a2340cb15e81a880.png?auto=format&w=128"
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Mohammad Ali</span>
                </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={Image1} />
              <Card.Body>
      <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src="https://i.seadn.io/gcs/files/c00d3dd212a1b3b9a2340cb15e81a880.png?auto=format&w=128"
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Mohammad Ali</span>
                </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={Image2} />
              <Card.Body>
      <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src="https://i.seadn.io/gcs/files/c00d3dd212a1b3b9a2340cb15e81a880.png?auto=format&w=128"
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Mohammad Ali</span>
                </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
