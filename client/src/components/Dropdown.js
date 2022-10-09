import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import Button from "@mui/material/Button";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import BlockIcon from "@mui/icons-material/Block";
import ReportIcon from "@mui/icons-material/Report";

const Dropdown = ({ anchorEl, handleClick }) => {
  return (
    <div>
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
        <MenuItem >
          {" "}
          <Button variant="text" onClick={handleClick}  >
            <DownloadForOfflineIcon /> <spam>Save</spam>
          </Button>
        </MenuItem>
        <MenuItem>
          {" "}
          <Button variant="text" onClick={handleClick}>
            <GroupAddIcon />  <spam>Follow</spam>
          </Button>
        </MenuItem>
        <MenuItem>
          {" "}
          <Button variant="text" onClick={handleClick}>
            <BlockIcon /> <spam>Block</spam> 
          </Button>
        </MenuItem>
        <MenuItem>
          {" "}
          <Button variant="text" onClick={handleClick}>
            <ReportIcon /> <spam>Report</spam> 
          </Button>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Dropdown;
