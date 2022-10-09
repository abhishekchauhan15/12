import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AddCardIcon from "@mui/icons-material/AddCard";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VerifiedIcon from "@mui/icons-material/Verified";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

const Cards = ({ title }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick = () => {
    setAnchorEl(null);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };



  return (
    <Card sx={{ maxWidth: 360, borderRadius: "10px" }}>
      <CardHeader
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            />

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
            >
              <MenuItem>
                {" "}
                <Stack sx={{ width: "100%" }}>
                  <Button variant="text" onClick={handleClick}>
                    <DownloadForOfflineIcon /> Save
                  </Button>
                </Stack>
              </MenuItem>
            </Menu>
          </IconButton>
        }
        title={["Amit", <VerifiedIcon style={{ margin: "0 0 0 32" }} />]}
        subheader="ML Engineer "
      />

      <CardContent>
        <Typography
          paragraph
          backgroundColor="#D3CEDF"
          style={{ padding: "6px", borderRadius: "8px" }}
        >
          Heat 1/2 cup of the broth in a pot until simmering, add saffron and
          set aside for 10 minutes.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <Button startIcon={<ThumbUpIcon />}>Like 12K</Button>
      <Button startIcon={<RemoveRedEyeIcon />}>Views 2K</Button>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Button variant="outlined" onClick={handleClick}></Button>
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            This is a success message!
          </Alert>
        </Snackbar>
      </Stack>
    </Card>
  );
};

export default Cards;
