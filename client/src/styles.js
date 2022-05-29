import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  image: {
    marginLeft: "15px",
    // animation: "$spin 4s linear infinite",
  },
  // "@keyframes spin": {
  //   from: {
  //     transform: "rotate(360deg)",
  //   },
  //   to: {
  //     transform: "rotate(0deg)",
  //   },
  // },
}));
