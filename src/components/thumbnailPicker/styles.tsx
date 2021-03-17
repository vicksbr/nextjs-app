import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalBody: {
    display: "flex",
    flexFlow: "column",
    background: "#fff",
    padding: "24px 24px 18px 24px",
    borderRadius: 4,
    boxShadow:
      "0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.2)",
    height: "70vh",
    width: "50vw",
    minWidth: 508,
    minHeight: 593,
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    right: 0,
    objectFit: "cover",
  },
  modalTitle: {
    marginBottom: 14,
    color: theme.palette.grey[900],
  },
  cropper: {
    width: "100%",
    marginBottom: 20,
    height: 0,
    flex: "1",
  },
  buttonsContainer: {
    textAlign: "right",
  },
  dropText: {
    color: "#FFF",
  },
  dropStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "146px",
    position: "relative",
    cursor: "pointer",
    backgroundColor: "#979797",
    borderRadius: "4px",
    overflow: "hidden",
  },
  "@keyframes dropAcceptSlide": {
    "0%": {
      backgroundPosition: "0 0",
    },
    "100%": {
      backgroundPosition: "-70px 0",
    },
  },
  acceptDrop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "146px",
    position: "relative",
    cursor: "pointer",
    backgroundColor: "#979797",
    backgroundSize: "150% 100%",
    backgroundImage:
      "repeating-linear-gradient(-45deg, #8f8f8f, #8f8f8f 25px, transparent 25px, transparent 50px)",
    animation: "$dropAcceptSlide 2s linear infinite",
    borderRadius: "4px",
    overflow: "hidden",
  },
}));

export default styles;
