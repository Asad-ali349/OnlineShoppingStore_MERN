import React from "react";
import { Typography, Box, TextField, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Loginstyle from "../Loginscreen/Login.style";
import theme from "../../Theme/Theme";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Forgotimage from "../../images/forgotscreen.png";
import Card from "@mui/material/Card";
import Callsupport from "../../Callsupport/Callsupport";
import { ThemeProvider } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import forgotstyle from './Forgotpassword.style'


const Forgotpassword = () => {
  const spacing = {
    xs: 2, // Spacing for extra small screens
    sm: 2, // Spacing for small screens
    md: 4, // Spacing for medium screens
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Grid container spacing={4} sx={Loginstyle.Maincontainer}>
          <Grid item md={5} sm={10} xs={12}>
            <Card
              sx={forgotstyle.Forgotcard}
            >
                <Grid container >
                  <Grid item md={10} sm={12} xs={12} sx={{ margin: "auto" }}>
                    <Typography
                      variant="subtitle1"
                      sx={forgotstyle.forgotheading}
                    >
                      Forget Password
                    </Typography>
                    <br />

                    <Typography
                      variant="subtitle1"
                      sx={{
                        lineHeight: { md: "71.12px", sm: "30px", xs: "30px" },
                        textAlign:{md:'start',sm:'start',xs:'center'}

                      }}
                    >
                      Enter email address that associated with your account.
                    </Typography>
                <br />
                    <TextField
                      required
                      fullWidth
                      type="email"
                      size="large"
                      label="Email Address"
                      placeholder="Enter Email"
                      sx={{ marginTop: { md: "0", sm: "30px", xs: "20px" } }}
                      InputProps={{
                        startAdornment: (
                          <MailOutlineIcon
                            style={{
                              fontSize: 14, // Adjust the icon size as needed
                              marginRight: "8px", // Adjust the spacing as needed
                            }}
                          />
                        ),
                        style:forgotstyle.myTextField
                      }}
                      InputLabelProps={{
                       style:forgotstyle.myLabel
                      }}
                    />
                  </Grid>
                </Grid>
                <br />
                <br />
                <Grid container  justifyContent="center">
                  <Grid item md={10} sm={12} xs={12}>
                    <Link to="/Forgotemail">
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={forgotstyle.forgotbutton}
                      >
                        Send Email
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
                <Grid
                  container
                  justifyContent={"center"}
                  sx={{ marginTop: { md: "40px", sm: "38px", xs: "5px" } }}
                >
                  <Grid item sx={{ textAlign: "center" }}>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      <span style={{ color: "#F7941D" }}>
                        {" "}
                        Go back to login screen?{" "}
                      </span>{" "}
                    </Link>
                  </Grid>
                </Grid>
            
            </Card>
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            sx={{
              display: { md: "flex", sm: "block", xs: "block" },
              justifyContent: "flex-end",
            }}>
                  <Card sx={{backgroundColor:'transparent',boxShadow:'0px 0px 0px 0px'}} >
                  <CardMedia
        component="img"
        image={Forgotimage}
        alt="Paella dish"
        sx={{width:'100%'}}
      />

            </Card>

          </Grid>
        </Grid>

        <Callsupport />
      </Box>
    </ThemeProvider>
  );
};

export default Forgotpassword;
