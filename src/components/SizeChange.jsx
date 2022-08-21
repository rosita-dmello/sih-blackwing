import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Container from "@mui/material/Container";
function SizeChange({ size, setSize }) {
  return (
    <Container maxWidth="xl" minHeight="30vh" sx={{ ml: 40 }}>
      <IconButton
        aria-label="increase-fontSize"
        onClick={() => setSize((prev) => prev + 2)}
      >
        <AddCircleIcon />
      </IconButton>
      <IconButton
        aria-label="increase-fontSize"
        onClick={() => setSize((prev) => prev - 2)}
      >
        <RemoveCircleIcon />
      </IconButton>
    </Container>
  );
}

export default SizeChange;
