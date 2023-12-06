import React, { useState } from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import Sliderimage from "../images/Slider.png";
import Sliderimage1 from "../images/Ring.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Sliderstyle from './Sliderstyle'

const Slider = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const slides = [
    {
      src: Sliderimage,
      alt: "Image 1 for carousel",
    },
    {
      src: Sliderimage1,
      alt: "Image 2 for carousel",
    },
    {
      src: Sliderimage,
    },
  ];

  return (
    <div>
      <Box
        sx={Sliderstyle.Slidercontainer}
      >
        <Grid container>
          <Grid
            item
            lg={6}
            md={12}
            sm={12}
            xs={12}
            sx={{
              paddingX: { md: "70px", sm: "0px", xs: "20px" },
              paddingY: { md: "90px", sm: "40px", xs: "30px" },
            }}
          >
            <div className="about-content">
              <Typography variant="h4">
                We Picked Every Item <br /> With Care,
                <span style={{ color: "#F7941D", fontSize: "35px" }}>
                  You Must Try{" "}
                </span>
                <br /> At least Once.{" "}
              </Typography>
              <Button>
                Go To Collection <ArrowRightAltIcon />{" "}
              </Button>
            </div>
          </Grid>

          <Grid
            item
            lg={6}
            md={12}
            sm={12}
            xs={12}
            sx={{
              marginLeft: { lg: "auto", md: "auto", sm: "0", xs: "0" },
            }}
          >
            <img
              src={slides[slide].src}
              alt={slides[slide].alt}
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid
            item
            xs={12}
            className="indicators"
            sx={{
              position: "absolute",
              bottom: { md: "20px", sm: "0", xs: "-23px" },
            }}
          >
            {slides.map((_, index) => (
              <button
                key={index}
                className={
                  slide === index ? "indicator" : "indicator indicator-inactive"
                }
                onClick={() => setSlide(index)}
              ></button>
            ))}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Slider;
