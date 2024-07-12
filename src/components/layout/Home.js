import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";
import { listListing } from "./action/listingAction";

const Home = () => {
  const dispatch = useDispatch();
  const listingList = useSelector((state) => state.listingList);
  const { loading, error, listings } = listingList;

  useEffect(() => {
    dispatch(listListing());
  }, [dispatch]);
  return (
    <div className="home">
      <Banner />
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="home_section">
          {listings.map((listing) => (
            <Card
              src={listing.img}
              title={listing.title}
              description={listing.description}
              price={listing.price}
            />
          ))}
        </div>
      )}
      <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/monet/Luxury-684763757047711680/original/48161af7-0e24-4d39-a187-b45ea277d49f?im_w=720"
          title="Iron Man House"
          description="Entire villa in Cape Town, South Africa"
        />

        <Card
          src="https://a0.muscache.com/im/pictures/a3a11849-ed9c-4674-8546-d210f0245496.jpg?im_w=720"
          title="Hollywood Mansion"
          description="Entire villa in Cape Town, South Africa"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-655743318495785740/original/395456e1-517c-40e5-b42a-7389e8b54ed8.jpeg?im_w=720"
          title="Luxury, Modern Lifestyle, Amazing Views, Camps Bay"
          description="Entire rental unit in Cape Town, South Africa"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/a3e07d96-169a-41a4-81e1-e02109a28bfe.jpg?im_w=720"
          title="Grand Villa"
          description="Entire villa in Thalang, Thailand"
        />
      </div>
      <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/monet/Luxury-640045233317855589/original/a48a58a2-d1d3-4d09-8ad5-fdb08507363f?im_w=720"
          title="Villa Buena"
          description="Entire villa in Illes Balears, Spain"
          price="R6,119 ZAR/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/monet/Luxury-602569246153730946/original/7c5c7ae3-14c2-4539-ab85-e3ee40867fec?im_w=720"
          title="Luxury villa Supreme Rogoznica 1 with pool"
          description="Entire villa in Rogoznica, Croatia"
          price="R42,146 ZAR/ night"
        />

        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-873069117835483193/original/64e68a05-f5e9-46ca-a3ef-7952bb4fa3de.jpeg?im_w=720"
          title="Trisara"
          description="Entire place in Bharje, India"
          price="R178,715/ night ZAR"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-37922090/original/3e98dbd8-1b21-49b2-afc7-f1a227470804.jpeg?im_w=720"
          title="Luxury Villa Skyfall Phuket"
          description="Entire villa in Tambon Ratsada, Thailand"
          price="R2,606 ZAR/ night"
        />
      </div>
    </div>
  );
};

export default Home;
