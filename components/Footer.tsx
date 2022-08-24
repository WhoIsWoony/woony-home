import { Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Stack sx={{ width: "100%", alignItems: "center", pb: 2, pt: 4 }}>
      <Typography variant="body2" sx={{ color: "#999999" }}>
        © 2022 Seongun Kang. All Rights Reserved.
      </Typography>
    </Stack>
  );
};

export default Footer;
