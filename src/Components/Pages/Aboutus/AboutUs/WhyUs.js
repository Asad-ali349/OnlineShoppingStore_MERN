import React from "react";
import pic1 from "../../../images/Professional Staff.png";
import pic2 from "../../../images/Completed Projects.png";
import pic3 from "../../../images/Acheived Awards.png";
import tickimage from "../../../images/Tick Image.png";
import { Box, Card, Grid,Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';





const WhyUs = () => {
  const data = [
    {
      pic: pic3,
      counting: "10000 +",
      title: "Our Categories",
    },
    {
      pic: pic2,
      counting: "3680 +",
      title: "Our Products",
    },
    {
      pic: pic1,
      counting: "8350 +",
      title: "Successful Delivery",
    },
  ];
  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{
          paddingX: { md: "80px", sm: "50px", xs: "30px" },
          marginTop: "56px",
        }}
      >
        <Grid item md={7} sm={12} xs={12} className=" left-div">
          <h1>Why Us?</h1>
          <Typography>
            You offer a good product, make advertising, analyze the market but{" "}
            <br /> still have no improvement? Our qulificated specialists are
            ready to <br /> solve any of your problems. We work with the newest
            techniques <br /> and create strategies to catch more customers for
            you.
          </Typography>

          <div className="professional-team">
            <div className="professional-team-left">
              <img src={tickimage} alt="professional" />
            </div>
            <div className="professional-team-right">Professional Team</div>
          </div>
          <div className="professional-team">
            <div className="professional-team-left">
              <img src={tickimage} alt="professional" />
            </div>
            <div className="professional-team-right">Affordable Price</div>
          </div>
          <div className="professional-team">
            <div className="professional-team-left">
              <img src={tickimage} alt="professional" />
            </div>
            <div className="professional-team-right">
              Achieve a Specific Goal
            </div>
          </div>
        </Grid>
        <Grid item md={5} sm={12} xs={12}>
         
            <Grid
              container
              spacing={2}
              className="right-div-box">
              <Grid item xs={12}>
           {data.map((item, index) => (
                  <List
                   key={index}
                   sx={{
                    backgroundColor: "#F7941D",
                    marginBottom: { md: "0", sm: "0", xs: "20px" },
                    color:'#FFFFFF',
               
                  }} >
      <ListItem>
        <ListItemAvatar >
        <img src={item.pic} alt="icon-image" />
      </ListItemAvatar>
        <ListItemText 
        sx={{padding:"10px"}}
        primary={
          <Typography variant="h4" sx={{color:'#FFFFFF'}} >
          {item.counting}
        </Typography>
        }
        
         secondary={
          <Typography sx={{color:'#FFFFFF'}}  >
          {item.title}
        </Typography>
         }
         
         />
      </ListItem>
      <Divider />

      
    </List>
       ))}
    
    

  
            
              

                    
                     
              </Grid>
            </Grid>
   
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyUs;
