import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    height: "auto",
    width: "100%",
    marginTop: "1rem",
    backgroundColor: "#EDEDEF",
  },
  containerSlim: {
    margin: "0.2rem",
  },
  media: {
    height: 0,
    paddingTop: "100%",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  smallIcon: {
    width: 20,
    height: 20,
    marginRight: "0.5rem",
  },
  breadcrumbs: {
    marginTop: "1rem",
  },
  overline: {},
});
