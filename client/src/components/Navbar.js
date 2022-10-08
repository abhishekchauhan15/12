import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddCardIcon from "@mui/icons-material/AddCard";

const WriteUpButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#1C6758",
  "&:hover": {
    backgroundColor: "#3D8361",
  },
}));
const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#D3CEDF",
  color: "black",
  "&:hover": {
    backgroundColor: "#DDDDDD",
  },
}));

const Navbar = () => {
  return (
    <div>
      <Stack spacing={2} direction="row" style={{ margin: "20px" }}>
        <Stack direction="row">
          <WriteUpButton variant="contained">Write-ups</WriteUpButton>
          <ColorButton variant="contained">Forums</ColorButton>
        </Stack>
        <Stack direction="row">
          <ColorButton variant="contained" endIcon={<AddCardIcon />}>
            New
          </ColorButton>
        </Stack>
      </Stack>
    </div>
  );
};

export default Navbar;
