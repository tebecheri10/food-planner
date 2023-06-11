import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { BsFillXCircleFill } from "react-icons/bs";
import useModalContext from "../../hooks/useModalContext";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "7px",
  boxShadow: 24,
  p: 4  
};

const closeButtonBox = {
  display: "flex",
  justifyContent: "flex-end",
};

const modalContent = {
  display: "flex",
  flexDirection: "column",
  gap: "15px"
};

const ModalBox = () => {
  const { open, handleClose } = useModalContext();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box sx={closeButtonBox}>
              <BsFillXCircleFill onClick={handleClose} />
            </Box>
            <Box sx={modalContent}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Nuevo plato
              </Typography>
              <TextField
                id="standard-basic"
                label="Nombre del plato"
                variant="standard"
              />
              <Button variant="contained">Agregar</Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalBox;
