import React from "react";
import { Box, Grid, Card, Typography } from "@mui/material";
import Narrationimage from "../../../images/redwatch.png";
import Watchimage from "../../../images/watch-1.png";
import Watchimage1 from "../../../images/watch-2.png";
import { useState } from "react";
import { IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
const slides = [
  {
    src: Narrationimage,
    alt: "Slide 1",
  },
  {
    src: Watchimage,
    alt: "Slide 2",
  },
  {
    src: Watchimage1,
    alt: "Slide 3",
  },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <Box>
      <Grid
        item
        container
        sx={{
          marginTop: "50px",
          paddingX: { md: "65px", sm: "40px", xs: "30px" },
          backgroundColor: "white",
        }} >
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="h5" sx={{ color: "#F7941D" ,paddingBottom:'20px'}}>
            Relevant Products
          </Typography>
        </Grid>
      </Grid>
      <Divider variant="inset"  sx={{ marginX:{ md: "50px", sm: "0px", xs: "0px" }}}/>
      <br/>
      <Grid
        container
        spacing={3}
        sx={{ paddingX: {md: "40px", sm: "20px", xs: "10px"}}} >
        <Grid item lg={3} md={6} xs={12} sm={6}>
          <Card>
            <Grid container alignItems="center" justifyContent="center">
              <Grid item xs={12} >
             <Grid container alignItems="center" justifyContent="center">
                  <Grid item xs={2}>
                    <IconButton
                      onClick={handlePreviousSlide}
                      disabled={currentSlide === 0}    >
                      <KeyboardArrowLeftIcon />
                    </IconButton>
                  </Grid>
                  <Grid item xs={8}>
                    <Link to="/singleproduct">
                      <img
                        src={slides[currentSlide].src}
                        alt={slides[currentSlide].alt}
                        style={{width:"100%"}}
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={2}>
                    <IconButton
                      onClick={handleNextSlide}
                      disabled={currentSlide === slides.length - 1}
                    >
                      <ChevronRightIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Box display="flex">
              <Divider flexItem sx={{ marginRight: "16px", flexGrow: 1 }} />
             <Typography>Watch</Typography>
              <Divider flexItem sx={{ marginLeft: "16px", flexGrow: 1 }} />
            </Box>
            <Grid container spacing={2} sx={{ padding: "10px" }}>
              <Grid item xs={6} sx={{ display: "flex" }}>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#1D1E1E", fontWeight: "bold" }}
                >
                  {" "}
                  Apple Series{" "}
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{ display: "flex", justifyContent: "flex-end" }} >
                <Typography variant="h6" sx={{ color: "#F7941D" }}>
                  $2,435
                </Typography>
              </Grid>
            </Grid>

            <Typography
              sx={{
                textAlign: "center",
                fontSize: "12px",
                color: "#7F7F7F",
                padding: "8px",
              }}
            >
              Apple Watch Series 8 features temperature sensing for insights
              into women's health, Car Crash Detection, and sleep stages to
              understand your sleep.
            </Typography>
            <br/>
          </Card>
        </Grid>
      </Grid>
      <br/>

    </Box>
  );
}
