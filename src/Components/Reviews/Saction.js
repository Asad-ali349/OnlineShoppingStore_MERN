import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CardActionArea } from "@mui/material";
import Personimage from "../images/person.png";
import { Divider } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import ReactCardSlider from "react-card-slider-component";


export default function MultiActionAreaCard() {
  const cardStyle = {
    textAlign: "center",
    backgroundColor: "#F7F7F7",
    boxShadow:"0px 0px 0px 0px"
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : slides.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < slides.length - 1 ? prevIndex + 1 : 0));
  };
  const slides = [
    {
      title: "This is a title 1",
   
    },
    {
      title: "This is a second title 2",
     
    },
  ]; 


  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "50px",
          paddingX: { md: "50px", sm: "50px", xs: "30px" },
        }}
      >
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ color: "#1D1D1D", fontWeight: "600" }}>
            Our Latest Reviews
          </Typography>
        </Grid>
         <Grid
          container
          spacing={2} 
          sx={{
            marginTop: "50px",
            paddingX: { md: "50px", sm: "50px", xs: "10px" },
          }}>
             {slides.map((slide, index) => (
         <Grid item md={6} sm={12} xs={12}  className={`slide ${index === currentIndex ? 'active-1' : ''}`} key={index}>
            <Card
                sx={{
                  ...cardStyle,
                }}>
                <CardActionArea>
                  <img
                    component="img"
                    src={Personimage}
                    style={{ margin: "auto" }}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ fontWeight: "600", color: "#000000" }} >
                      Anna Merry
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo con exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo con
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ textAlign: "center", color: "#7F7F7F" }}
                    >
                      23rd Oct, 2023
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </Grid>
                   
        ))}
              </Grid>
          
     
      
   
        
        
      </Grid>

      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <KeyboardBackspaceIcon onClick={handlePrev}
              sx={{ color: "#7F7F7F",fontSize: "40px" }}
            />
            <ArrowRightAltIcon  onClick={handleNext} sx={{ color: "#F7941D",fontSize: "60px" }} />
          </Stack>
        </Grid>
      </Grid>
      <Divider
        variant="inset"
        sx={{
          marginX: { md: "50px", sm: "0px", xs: "0px" },
          marginTop: "20px",
        }}
      />
    </Box>
  );
}
