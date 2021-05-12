import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles({
  container: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#EDEDEF",
    width: "40%",
    opacity: "0.4",
    marginTop: "20%",
  },
  title: {
    margin: "1rem",
  },
  input: {
    textAlign: "center",
    width: "85%",
    color: "#EDEDEF",
    margin: "0.5rem",
  },
  button: {
    margin: "1rem",
  },
  icon: {
    width: '40%',
    height: 'auto',
  }
});