import {
  AppBar,
  Button,
  Stack,
  styled,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import type { NextComponentType } from "next";
import Image from "next/image";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useContext } from "react";
import { GlobalContext } from "../pages/_app";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useRouter } from "next/router";

const ButtonIcon = styled(Button)`
  display: "inline-block";
  padding: 0;
  min-height: 0;
  min-width: 0;
`;

const Header: NextComponentType = () => {
  const { pathname } = useRouter();
  const { selectedTheme, setSelectedTheme } = useContext(GlobalContext);
  const isPc = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      <AppBar
        sx={{
          boxShadow: 0,
          alignItems: "center",
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            maxWidth: 736,
            justifyContent: "space-between",
          }}
        >
          <Stack
            direction="row"
            spacing={isPc ? 3 : 1}
            sx={{ alignItems: "center" }}
          >
            <Link href="/">
              <Stack
                direction="row"
                spacing={1}
                sx={{ alignItems: "center", cursor: "pointer" }}
              >
                <div style={{ width: 40, height: 40, position: "relative" }}>
                  <Image
                    src={
                      selectedTheme === "dark" ? "/icon_b.png" : "/icon_w.png"
                    }
                    alt="Picture of Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                {isPc && (
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    fontSize={20}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    HELLO, WOONY
                  </Typography>
                )}
              </Stack>
            </Link>

            <Stack direction="row">
              <Link href="/work">
                <Typography
                  sx={{
                    cursor: "pointer",
                    ":hover": { textDecoration: "underline" },
                    px: 1,
                    py: 0.5,
                    height: "100%",
                    borderRadius: 2,
                    bgcolor: pathname === "/work" ? "primary.dark" : undefined,
                  }}
                >
                  Work
                </Typography>
              </Link>
              <Link href="/posts">
                <Typography
                  sx={{
                    cursor: "pointer",
                    ":hover": { textDecoration: "underline" },
                    px: 1,
                    py: 0.5,
                    height: "100%",
                    borderRadius: 2,
                    bgcolor: pathname === "/posts" ? "primary.dark" : undefined,
                  }}
                >
                  Posts
                </Typography>
              </Link>
              <Link href="https://github.com/WhoIsWoony">
                <Stack
                  direction="row"
                  spacing={0.4}
                  sx={{ alignItems: "center", pl: 2 }}
                >
                  <GitHubIcon
                    sx={{ color: "primary.light", width: 20, height: 20 }}
                  />
                  <Typography
                    sx={{
                      cursor: "pointer",
                      ":hover": { textDecoration: "underline" },
                    }}
                  >
                    Source
                  </Typography>
                </Stack>
              </Link>
            </Stack>
          </Stack>
          <Stack>
            <ButtonIcon
              color="dark"
              onClick={() => {
                setSelectedTheme?.((prev) =>
                  prev === "dark" ? "light" : "dark"
                );
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
