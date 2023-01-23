import { Snackbar as MaterialSnackbar } from "@mui/material";

const Snackbar = ({ error, openError, setOpenError }) => {
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenError(false);
  };

  return (
    <MaterialSnackbar
      open={openError}
      autoHideDuration={6000}
      onClose={handleClose}
      message={error}
      action={
        <button 
          type="button" 
          onClick={handleClose}
        >
          close
        </button>
      }
    />
  );
};

export default Snackbar;
