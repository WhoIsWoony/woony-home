import {
  AppBar,
  Button,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import type { NextComponentType } from "next";
import Image from "next/image";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useContext } from "react";
import { GlobalContext } from "../pages/_app";

const ButtonIcon = styled(Button)`
  display: "inline-block";
  padding: 0;
  min-height: 0;
  min-width: 0;
`;

const Header: NextComponentType = () => {
  const { mode, setMode } = useContext(GlobalContext);

  return (
    <Stack>
      <AppBar
        color="light"
        sx={{
          boxShadow: 0,
          alignItems: "center",
          px: 2,
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            maxWidth: 1024,
            justifyContent: "space-between",
          }}
        >
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <div style={{ width: 40, height: 40, position: "relative" }}>
              <Image
                src={mode === "dark" ? "/icon_b.png" : "/icon_w.png"}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              HELLO, WOONY
            </Typography>
          </Stack>

          <Stack>
            <ButtonIcon
              color="dark"
              onClick={() => {
                setMode?.((prev) => (prev === "dark" ? "light" : "dark"));
              }}
            >
              <LightModeOutlinedIcon sx={{ margin: 1 }} color="light" />
            </ButtonIcon>
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Stack>
  );
};

export default Header;
