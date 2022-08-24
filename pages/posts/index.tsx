import {
  Avatar,
  Box,
  Button,
  Divider,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import { GlobalContext } from "../_app";

const Posts: NextPage = () => {
  const { selectedTheme, setSelectedTheme } = useContext(GlobalContext);
  const isPc = useMediaQuery("(min-width:600px)");

  return (
    <Stack alignItems="center" sx={{ bgcolor: "light.main" }}>
      <Stack
        alignItems="center"
        sx={{ width: "100%", maxWidth: 736, px: isPc ? 8 : 2 }}
      >
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </Stack>
    </Stack>
  );
};

export default Posts;