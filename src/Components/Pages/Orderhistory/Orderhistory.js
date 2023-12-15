import React from "react";
import { createTheme } from "@mui/material/styles";
import Leftsidebar from "../../Dashboardsidebar/Sidebar";
import {
  Table,
  Box,
  Grid,
  Typography,
  TableBody,
  TableCell,
  tableCellClasses,
  TableHead,
  TableRow,
  Divider,
  Stack,IconButton
} from "@mui/material";
import Useimage from '../../images/piechart.png'
import Carimage from '../../images/cancelorder.png'
import { styled } from "@mui/material/styles";
import GppGoodIcon from '@mui/icons-material/GppGood';
import Callsupport from "../../Callsupport/Callsupport";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TableContainer from '@mui/material/TableContainer';

const Orderrecord = () => {
  const theme = createTheme({
    components: {
      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: "#2E3192",
            height: 3,
            color: "#2E3192",
            fontWeight: "bold",
          },
        },
      },
    },
  });
  const buttonStyle1 = {
    backgroundColor: "#F3F3F3", // Change this to your desired background color
    color: "#182733", // Change this to the text color you want
    borderRadius: "23px",
    height: "45.42px",
    width: "50px",
  };
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "white",
      color: "black",
      fontWeight: "500",
      fontSize: '20px',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: { md: 14, sm: "18px", xs: "10px" },
      color: "black",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "white",
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData(
      "#8132",
      "02 April, 2019",
      <Typography sx={{color:'#FF9900'}}>Pending</Typography>,

      
      "5 item(s)",
      "$2,719.00"
    ),
    createData(
      "#8132",
      "02 April, 2019",
      <Typography sx={{color:'#0EAE00'}}>Completed</Typography>,
      "5 item(s)",
      "$2,719.00"
    ),
    createData(
      "#8132",
      "02 April, 2019",
      <Typography sx={{color:'#FF0000'}}>Cancel</Typography>,
      "5 item(s)",
      "$2,719.00"
    ),
    createData(
      "#8132",
      "02 April, 2019",
      <Typography sx={{color:'#FF9900'}}>Pending</Typography>,
      "5 item(s)",
      "$2,719.00"
    ),
  ];
    return (
    <Box>
      <Grid container sx={{marginTop:{md: "50px", sm: "40px", xs: "20px"},paddingX:{md:'20px',sm:'20px',xs:'10px'}}}>
        <Grid
          item
          lg={3}
          md={12}
          sm={12}
          xs={11}  >
           <Leftsidebar/>
         </Grid>
        <Grid
          item
          lg={9}
          md={12}
          sm={12}
          xs={10}
          sx={{marginX:{lg:"0px",md:"44px",sm:"26px",xs:"18px"}}}
          >
          <Grid
            container>
            <Grid
              item
              lg={11}
              md={12}
              sm={12}
              xs={12}
              sx={{border: "1px solid #D5D5D5",borderRadius:'15px',padding:{md:"0px",sm:"5px",xs:"10px"}}} >
           <Grid container>
            <Grid  item md={11} sm={12}  xs={12}>
              <Box sx={{display: "flex"}}>
              <Typography
                component="h1"
                variant="h5"
                sx={{
                 padding:'10px',
                  color: "black",
                  fontWeight: "600",
                  fontSize: { lg: "35px", md: "38px", sm: "30px", xs: "25px"}}}>
                Order History
              </Typography>
            <Stack direction="row" spacing={1} sx={{marginLeft:'auto',marginTop:3}}>
            <Typography sx={{ color: "#484444" }}> Sort By: </Typography>
            <Typography sx={{ color: "#484444" }}> AUG </Typography>
            <Stack>
              <KeyboardArrowUpIcon sx={{ fontSize: "10px" }} />
              <KeyboardArrowDownIcon sx={{ fontSize: "10px" }} />
            </Stack>
          </Stack>
           </Box>
             </Grid>
              <Divider />
              <TableContainer >
              <Table aria-label="a dense table" >
                <TableHead  sx={{fontSize:{md: "25px",sm: "18px",xs:"12px" }}}>
                  <TableRow>
                    <StyledTableCell> Orders </StyledTableCell>
                    <StyledTableCell>Date</StyledTableCell>
                    <StyledTableCell>Status</StyledTableCell>
                    <StyledTableCell> Items</StyledTableCell>
                    <StyledTableCell> Payment </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell >
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell >
                        {row.calories}
                      </StyledTableCell>
                      <StyledTableCell>
                        {row.fat}
                      </StyledTableCell>
                      <StyledTableCell >
                        {row.carbs}
                      </StyledTableCell>
                      <StyledTableCell >
                        {row.protein}
                      </StyledTableCell>
                    </StyledTableRow>

                  ))}
                </TableBody>
              </Table>
              </TableContainer>
            </Grid>
            </Grid>
            </Grid>
         
          <Grid
            item
            container>
            <Grid
              item
              md={11}
              sm={12}
              xs={12}
              sx={{border: (theme) => `2px solid ${theme.palette.divider}`,borderRadius:'15px',marginTop: {md:"30px",sm:'40px',xs:'10px'},padding:'20px'}}>
          <Grid
        container>
        <Divider/>
        <Grid item  md={4} sm={6}  xs={12}>
          <Stack spacing={2} direction="row" alignItems="center">
            <Stack>
              <IconButton type="button" style={buttonStyle1}>
                <img src={Useimage} />
              </IconButton>
            </Stack>
            <Stack sx={{ minWidth: 0 }}>
              <Typography
                 variant="h6"
               sx={{ fontWeight: "700"}}>
                23
              </Typography>
              <Typography noWrap>Pending Orders</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={4} sm={6}  xs={12}>
          <Stack spacing={2} direction="row" alignItems="center">
            <Stack>
              <IconButton type="button" style={buttonStyle1}>
              <GppGoodIcon sx={{color:'green'}} />
                  </IconButton>
            </Stack>
            <Stack sx={{ minWidth: 0 }}>
              <Typography 
                 variant="h6"
              sx={{ fontWeight: "700"}}>
                23
              </Typography>
              <Typography
              variant="body2"
              sx={{ fontWeight: "400"}}>
               Completed Orders</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={4} sm={6}  xs={12}>
          <Stack spacing={2} direction="row" alignItems="center">
            <Stack>
              <IconButton type="button" style={buttonStyle1}>
              <img src={Carimage}/>
              </IconButton>
            </Stack>
            <Stack sx={{ minWidth: 0 }}>
              <Typography
               variant="subtitle2"
               

               sx={{ fontWeight: "700" ,fontSize:'22px'}}>
              23
              </Typography>
              <Typography 
              variant="body2"
              sx={{ fontWeight: "400"}}
              noWrap>Cancel Orders</Typography>
            </Stack>
          </Stack>
        </Grid>

      </Grid>
      </Grid>
      </Grid>

        </Grid>
      </Grid>
      <Callsupport />
    </Box>
  );
};

export default Orderrecord;
