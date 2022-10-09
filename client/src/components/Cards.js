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
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VerifiedIcon from "@mui/icons-material/Verified";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Dropdown from "./Dropdown";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Cards = ({ name, position, text, description, likes, views }) => {
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
    <Card sx={{ maxWidth: 360, borderRadius: "10px", margin: "20px" }}>
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
            <Dropdown anchorEl={anchorEl} handleClick={handleClick} />
          </IconButton>
        }
        title={["Amit", <VerifiedIcon style={{ margin: "0 0 0 32" }} />]}
        subheader={position}
      />

      <CardContent>
        <Typography
          paragraph
          backgroundColor="#D3CEDF"
          style={{ padding: "6px", borderRadius: "8px", marginTop: "-19px" }}
        >
          {text}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Button startIcon={<ThumbUpIcon />} style={{ marginLeft: "8px" }}>
        Like {likes}K
      </Button>
      <Button startIcon={<RemoveRedEyeIcon />}>Views {views}K</Button>
      <Button
        startIcon={<ExitToAppIcon />}
        style={{ marginLeft: "40px" }}
      ></Button>

      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Done!
          </Alert>
        </Snackbar>
      </Stack>
    </Card>
  );
};

export default Cards;
