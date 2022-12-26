import { Box, Grid } from "@mui/material";
import Style from "./Footer.module.css";

function Footer() {
  return (
    <Box
      className={Style.Footer}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      py={"0.1rem"}
      sx={{ opacity: 0.7 }}
      width={"100%"}
    >
      <p>template created by Pedro Lima &copy; 2023</p>
    </Box>
  );
}

export default Footer;
