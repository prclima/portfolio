import Style from "./Portfolio.module.css";
import { Box, Grid } from "@mui/material";
import Projetos from "./Projetos";

function Portfolio(props) {
  return (
    <Box className={Style.wrapper}>
      <Grid display={"flex"} justifyContent={"center"} flexWrap={"wrap"}>
        <Projetos image={props.src} />
      </Grid>
    </Box>
  );
}

export default Portfolio;
