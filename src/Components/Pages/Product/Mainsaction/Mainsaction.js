import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Grid, Button, Typography, Card } from "@mui/material";
import productimage from "../../../images/Product.png";
import Mainstyle from "../Mainsaction/Mainsaction.style";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Relatedtab from "../Relatedtab/Relatedtab";
import Paginationcomp from "../Paginationcomp/Paginationcomp";
import Featuredcategories2 from "../../../Featuredcategory/Featuredcategory";
import FormControlLabel from "@mui/material/FormControlLabel";
import Callsupport from "../../../Callsupport/Callsupport";

const ITEM_HEIGHT = "100%";
const ITEM_PADDING_TOP = 8;

const About = () => {
  const [expanded, setExpanded] = useState([true, true, true]); // Initialize to true for each Accordion
  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[panel] = isExpanded;
      return newExpanded;
    });
  };
  const accordionStyle = {
    backgroundColor: "#fff",
    color: "rgba(0, 0, 0, 0.87)",
    borderRadius: "4px",
    boxShadow: "none", // Remove box shadow
    border: "none", // Remove border
    position: "relative",
    overflowAnchor: "none",
  };
  
  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "30px",
          paddingX: { md: "95px", sm: "70px", xs: "38px" },
          borderRadius: "15px",
        }}
      >
        <Grid   lg={2} md={12} sm={12} xs={12} sx={Mainstyle.FilterSaction}>
          <Card sx={{ border: "1px solid #9B9B9B" }}>
            <Typography
              sx={{ color: "#3C3737", padding: "15px", fontWeight: "600" }}
            >
              Filters
            </Typography>

            <div>
              {[
                {
                  label: (
                    <Typography sx={{ color: "#3C3737", fontWeight: "600" }}>
                      Categories
                    </Typography>
                  ),

                  content: (
                    <div>
                      <Typography style={{ color: "#F7941D" }}>
                        {" "}
                        Laptop & Mac
                      </Typography>
                      <Typography>Mobile & Tablet</Typography>
                      <Typography>Home Devices</Typography>
                      <Typography>TV & Audio</Typography>
                      <Typography>Fitness</Typography>
                      <Typography>Games & Toys</Typography>
                      <Typography>TV & Audio</Typography>
                      <Typography>Accessories</Typography>
                      <Typography>Security</Typography>
                    </div>
                  ),
                },
                {
                  label: (
                    <Typography sx={{ color: "#3C3737", fontWeight: "600" }}>
                      Price Range
                    </Typography>
                  ),
                  content: (
                    <div>
                      <TextField id="outlined-basic" label="From" />
                      <TextField id="filled-basic" label="To" />
                      <br />
                      <br />
                      <Typography>Price: $0.00 – $3200.00</Typography>
                    </div>
                  ),
                },
                {
                  label: (
                    <Typography sx={{ color: "#3C3737", fontWeight: "600" }}>
                      Brand
                    </Typography>
                  ),
                  content: (
                    <div>
                      <FormControlLabel
                        control={
                          <Checkbox
                            value="allowExtraEmails"
                            color="primary"
                            sx={Mainstyle.checkboxsubheading}
                          />
                        }
                        label={
                          <Typography
                            variant="body1"
                            sx={Mainstyle.checkboxsubheading}
                          >
                            Apple
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            value="allowExtraEmails"
                            color="primary"
                            sx={Mainstyle.checkboxsubheading}
                          />
                        }
                        label={
                          <Typography
                            variant="body1"
                            sx={Mainstyle.checkboxsubheading}
                          >
                            Samsung
                          </Typography>
                        }
                      />
                      <br />
                      <FormControlLabel
                        control={
                          <Checkbox
                            value="allowExtraEmails"
                            color="primary"
                            sx={Mainstyle.checkboxsubheading}
                          />
                        }
                        label={
                          <Typography
                            variant="body1"
                            sx={Mainstyle.checkboxsubheading}
                          >
                            Sony
                          </Typography>
                        }
                      />

                      <br />

                      <FormControlLabel
                        control={
                          <Checkbox
                            value="allowExtraEmails"
                            color="primary"
                            sx={Mainstyle.checkboxsubheading}
                          />
                        }
                        label={
                          <Typography
                            variant="body1"
                            sx={Mainstyle.checkboxsubheading}
                          >
                            Oppo
                          </Typography>
                        }
                      />
                    </div>
                  ),
                },
                {
                  label: (
                    <Typography sx={{ color: "#3C3737", fontWeight: "600" }}>
                      Discount
                    </Typography>
                  ),
                  content: (
                    <div>
                      <FormControlLabel
                        control={
                          <Checkbox
                            value="allowExtraEmails"
                            color="primary"
                            sx={Mainstyle.checkboxsubheading}
                          />
                        }
                        label={
                          <Typography
                            variant="body1"
                            sx={Mainstyle.checkboxsubheading}
                          >
                            Any
                          </Typography>
                        }
                      />
                      <br />
                      <FormControlLabel
                        control={
                          <Checkbox
                            value="allowExtraEmails"
                            color="primary"
                            sx={Mainstyle.checkboxsubheading}
                          />
                        }
                        label={
                          <Typography
                            variant="body1"
                            sx={Mainstyle.checkboxsubheading}
                          >
                            No
                          </Typography>
                        }
                      />
                      <br />
                      <FormControlLabel
                        control={
                          <Checkbox
                            value="allowExtraEmails"
                            color="primary"
                            sx={Mainstyle.checkboxsubheading}
                          />
                        }
                        label={
                          <Typography
                            variant="body1"
                            sx={Mainstyle.checkboxsubheading}
                          >
                            Yes
                          </Typography>
                        }
                      />
                    </div>
                  ),
                },
                {
                  label: (
                    <Typography sx={{ color: "#3C3737", fontWeight: "600" }}>
                      Color
                    </Typography>
                  ),

                  content: (
                    <div>
                      <Grid container spacing={2}>
                        <Grid item xs={2}>
                          <Card sx={Mainstyle["card-1"]}></Card>
                        </Grid>
                        <Grid item xs={2}>
                          <Card sx={Mainstyle["card-2"]}></Card>
                        </Grid>
                        <Grid item xs={2}>
                          <Card sx={Mainstyle["card-3"]}></Card>
                        </Grid>
                        <Grid item xs={2}>
                          <Card sx={Mainstyle["card-4"]}></Card>
                        </Grid>
                        <Grid item xs={2}>
                          <Card sx={Mainstyle["card-5"]}></Card>
                        </Grid>
                        <Grid item xs={2}>
                          <Card sx={Mainstyle["card-6"]}></Card>
                        </Grid>
                      </Grid>
                      <Grid container spacing={2} sx={{ marginTop: "2px" }}>
                        <Grid item xs={2}>
                          <Card sx={Mainstyle["card-7"]}></Card>
                        </Grid>
                        <Grid item xs={2}>
                          <Card sx={Mainstyle["card-8"]}></Card>
                        </Grid>
                        <Grid item xs={2}>
                          <Card sx={Mainstyle["card-9"]}></Card>
                        </Grid>
                        <Grid item xs={2}>
                          <Card sx={Mainstyle["card-10"]}></Card>
                        </Grid>
                        <Grid item xs={2}>
                          <Card sx={Mainstyle["card-11"]}></Card>
                        </Grid>
                        <Grid item xs={2}>
                          <Card sx={Mainstyle["card-12"]}></Card>
                        </Grid>
                      </Grid>

                      <Grid container spacing={2} sx={{ marginTop: 2 }}>
                        <Grid
                          item
                          xs={12}
                          sx={{ backgroundColor: "#F1F1F1", padding: "10px" }}
                        >
                          <Button
                            size="large"
                            variant="contained"
                            color="primary"
                            sx={Mainstyle.fliterbutton}
                          >
                            Clear Filter
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                  ),
                },
              ].map((section, index) => (
                <Accordion
                  key={index}
                  expanded={expanded[index] || false}
                  onChange={handleAccordionChange(index)}
                  style={accordionStyle}
                >
                  <AccordionSummary
                    sx={{ backgroundColor: "#F1F1F1" }}
                    expandIcon={<ExpandMoreIcon />}
                  >
                    <Typography>{section.label}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>{section.content}</AccordionDetails>
                </Accordion>
              ))}
            </div>
          </Card>
        </Grid>
        <Grid item spacing={2}  lg={10} md={12} sm={12} xs={12}>
          <Grid
            container
            spacing={2}
            sx={{
              backgroundColor: "#FCF7FE",
              borderRadius: "15px",
              marginTop:{md:'0px',sm:'0px',xs:'10px'},
              textAlign:{md:'start',sm:'center',xs:'center'},
            }}
          >
            <Grid item md={6} sm={12} xs={12}>
              <img src={productimage} style={{ width: "100%" }} />
            </Grid>
            <Grid
              item
              md={6}
              sm={12}
              xs={12}
              sx={{
                margin: { md: "auto", sm: "0", xs: "0" },
              }}>
              <Typography sx={Mainstyle.Mainheading}>
                Online <br/>
                <span
                  style={{
                    color: "#F7941D",
                    fontSize: { md: "3rem", sm: "3rem", xs: "1rem" },
                  }}>
                  Shopping
                </span>
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "25px", fontWeight: "400" }}>
                Up to 50% off
              </Typography>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse{" "}
                <br /> cillum dolore eu fugiat nulla pariatu
              </p>
              <Button sx={Mainstyle.Mainbutton}>Shop Now</Button>
            </Grid>
          </Grid>

          <Relatedtab />
          <Paginationcomp />
        </Grid>
      </Grid>
      <Featuredcategories2 />
      <Callsupport />
    </Box>
  );
};

export default About;
