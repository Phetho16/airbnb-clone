import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";
// import {listListing} from "./action/listingAction" 

const Home = () => {
//   const dispatch = useDispatch();
//   const listingList = useSelector(state => state.listingList)
//   const {loading, error, listings} = listingList

//   useEffect(() =>{
//     dispatch(listListing())
//   }, [dispatch])
  return (
    <div className="home">
      <Banner />
     <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=320"
          title="Moinho das Feteiras | The Mill"
          description="Windmill in Ponta Delgada, Portugal"
        />

        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-676044415326884478/original/e32429f8-56bd-4ba1-a98a-46efc64e3e69.jpeg?im_w=320"
          title="OMG Winner, Coconest Langkawi"
          description="Campsite in Langkawi, Malaysia"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/6dcdc10d-400a-4ae9-b811-d3271655ecf4.jpg?im_w=320"
          title="Driftwood Treehouse by the Sea"
          description="Treehouse in East London, South Africa"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-917780628259593306/original/f273fcbe-f1de-48b5-b28d-fa247e2d5646.jpeg?im_w=320"
          title="NOCK | Private Cabin with a Breathtaking Bay View"
          description="Entire cabin in Ghosta, Lebanon"
        />
      </div>
      <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/55cde044-a7de-4b33-aff1-3692301e86c9.jpg?im_w=320"
          title="CocoHut: Recharge in Nature on a Regenerative Farm"
          description="Entire villa in Predeal, Romania"
          price="R6,119 ZAR/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-53356466/original/f353fb80-0915-40ab-8032-6bc810ac273e.jpeg?im_w=720"
          title="Vila Sonja - Fairytale Villa - Magic Location"
          description="Campsite in Langkawi, Malaysia"
          price="R15,327 ZAR/ night"
        />

        <Card
          src="https://a0.muscache.com/im/pictures/c579efd0-3a7a-4132-8bbb-cf7eeadc9806.jpg?im_w=320"
          title="Aura House 2bds Eco Bamboo House, Pool, River View"
          description="Entire villa in Abiansemal, Indonesia"
          price="R9,549/ night ZAR"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/a84d991e-8d4a-4ff6-818b-ca07292d3343.jpg?im_w=320"
          title="Inaugural offer- Cavehouse with private pool"
          description="Cave in Kalpetta, India"
          price="R2,606 ZAR/ night"
        />
      </div>
    </div>
  );
};

export default Home;
