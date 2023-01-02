import Style from "./Portfolio.module.css";
import { Box, Grid } from "@mui/material";
import Projetos from "./Projetos";

function Portfolio(props) {
  return (
    <Box className={Style.wrapper}>
      <Grid display={"flex"} justifyContent={"center"}>
        <Grid item xs={12} md={6}>
          <Projetos image={props.src} href={props.href} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Portfolio;
