import React from "react";
import { Button } from "@mui/material";
import SearchResult from "./SearchResult";
import "./SearchPage.css";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="serchPage_info">
        <p>62 Stays 26 august to 30 august 2 guest</p>
        <h1>stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-25178105/original/15fe6c94-cea3-470e-9644-4fff84ac4b28.jpeg?im_w=240"
        location="Cape Town, South Africa"
        title="Endless Views & Privacy"
        description="2guests 1bedroom 1bed 1bath"
        star={4.3}
        price="1,708 ZAR / night"
        total="R10,468.93 ZAR / total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-894078164123753275/original/0d804cf5-5cf3-48c0-8389-916c87b9b273.jpeg?im_w=720"
        location="Entire rental unit in Cape Town, South Africa"
        title="Dream View Studio"
        description="2guests 1bedroom 1bed 1bath"
        star={4.93}
        price=" R1,014.71 ZAR / night"
        total="R7,264.71 ZAR / total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/5c537c42-5973-4c4f-a71c-ddfcbb085295.jpg?im_w=720"
        location="Entire rental unit in Cape Town, South Africa"
        title="Beautiful 1 Bedroom flat with Solar installation"
        description="2guests 1bedroom 1bed 1bath"
        star={4.94}
        price="R626 ZAR / night"
        total="R3,638.16 ZAR/ total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-33448948/original/68af5e51-4f35-4622-b674-ee07452ba4b2.jpeg?im_w=720"
        location="Entire rental unit in Cape Town, South Africa"
        title="Private, secure guest suite"
        description="2guests Studio 1bed 1bath"
        star={4.93}
        price="R430 ZAR / night"
        total="R2,847.76 ZAR / total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-627983975723676691/original/52d069df-32f2-4d0e-a423-1fcfb77c884f.jpeg?im_w=720"
        location="Entire rental unit in Cape Town, South Africa"
        title="Beachfront Apartment With Views"
        description="2 guests 1 bedroom 1 bed 1 bath"
        star={4.94}
        price="R950 ZAR / night"
        total="R6,102.36 ZAR / total"
      />
    </div>
  );
};

export default SearchPage;
