import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useGlobalContext } from "../../context";
import { team } from "../../localData/teamData";
const Team = () => {
  const { dark } = useGlobalContext();
  const classes = useStyles(dark);
  const responsive = {
    560: {
      items: 1,
    },
    760: {
      items: 2,
    },
    1204: {
      items: 3,
    },
    1506: {
      items: 4,
    },
    1806: {
      items: 5,
    },
  };
  const items = team.map((person) => {
    return (
      <Box>
        <img src="" alt="" />
      </Box>
    );
  });
  return (
    <section className={classes.team}>
      <Container className={classes.bigCont}>
        <Typography variant="h2" align="center">
          Meet Our Team
        </Typography>
        <Box className={classes.center}>
          <div className={classes.underline}></div>
        </Box>
        <Box className={classes.center}>
          <Typography variant="body1" align="center" className={classes.lorem}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            dolorem dicta libero veritatis reiciendis quis pariatur magni.
          </Typography>
        </Box>
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          items={items}
          responsive={responsive}
        />
      </Container>
    </section>
  );
};

export default Team;
