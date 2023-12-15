import React from 'react';
import { Grid, Typography, CardMedia, Box } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import { Stack } from "@mui/material";
import Daraz from '../../../images/Daraz.png';
import Shopify from '../../../images/shopify.png';
import Fresh from '../../../images/dfresh.jpg';
import Amazon from '../../../images/dfresh.jpg';

const TrustedPartners = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));

  // Define responsive width and height based on screen size
  const width = isMd ? 50 : isSm ? 80 : 40;
  const height = width; // Make the height equal to the width for a square avatar

  return (
    <Box>
    <Grid container spacing={2} sx={{ marginTop: "20px" }}>
      <Grid item lg={12} md={12} sm={12} xs={12} sx={{ textAlign:'center' }}>
        <Typography variant='h2' sx={{fontWeight:'600'}}>Our Trusted Partners</Typography>
        <Typography variant='subtitle1' sx={{color:'#484444'}}>
          You offer a good product, make advertising, analyze the market but
          <br /> still have no improvement?
        </Typography>
        </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ marginTop: "20px" ,paddingX:'80px'}}>
          <Grid item lg={3} md={12} sm={12} xs={12}>
           <img
                src={Fresh}
                alt="Trusted Partners"
                style={{ width: '100%' }}
              />
   </Grid>

          <Grid item lg={3} md={12} sm={12} xs={12}>
            
              <img
                src={Fresh}
                alt="Trusted Partners"
                style={{ width: '100%' }}
              />
           
          </Grid>
          <Grid item lg={3} md={12} sm={12} xs={12}>
            
              <img
                src={Amazon}
                alt="Trusted Partners"
                style={{ width: '100%' }}
              />
          
          </Grid>
          <Grid item lg={3} md={12} sm={12} xs={12}>
            
            <img
              src={Amazon}
              alt="Trusted Partners"
              style={{ width: '100%' }}
            />
        
        </Grid>
        </Grid>
        </Box>
   
   
  );
};

export default TrustedPartners;
