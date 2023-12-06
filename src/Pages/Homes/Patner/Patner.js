import { Box, Typography } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

import Bird from "./img/flying-bird-gif-bird.gif";
const Patner = () => {
  return (
    <Box>
     <Container>
     <Typography
        variant="h3"
        sx={{
          lineHeight: "30px",
          py: 5,
          // textAlign: "left",
          fontWeight: "500",
          color: "white",
          marginBottom:"20px"
        }}
      >
        Our Partners
      </Typography>
     </Container>

      {/* <Marquee style={{ display: 'flex', alignItems: '', justifyContent: 'space-between' }}> */}
      <Marquee direction="right">
        <Box>
          <img style={{ width: "150px" }} src='https://i.ibb.co/PQj40NN/bkash.jpg' alt="" />
          <img style={{ width: "150px" }} src='https://i.ibb.co/Xzrg81M/nogod.png' alt="" />
          <img style={{ width: "150px" }} src= 'https://i.ibb.co/MRtqG0R/u-cash.jpg' alt="" />
          <img style={{ width: "150px" }} src={Bird} alt="" />
          <img style={{ width: "150px" }} src='https://i.ibb.co/8sSFzGb/rocket-1.png' alt="" />
          <img style={{ width: "150px" }} src='https://i.ibb.co/PQj40NN/bkash.jpg' alt="" />
          <img style={{ width: "150px" }} src='https://i.ibb.co/Xzrg81M/nogod.png' alt="" />
          <img style={{ width: "150px" }} src='https://i.ibb.co/MRtqG0R/u-cash.jpg' alt="" />
        </Box>
      </Marquee>

      {/* </Marquee> */}
    </Box>
  );
};

export default Patner;