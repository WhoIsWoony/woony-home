import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";

const listWork = [
  {
    img: "/work_pumpkin_crm.png",
    title: "Pumpkin Co. CRM",
    content: "CRM app and web for offline kindergarten management.",
    to: "https://velog.io/@whoiswoony/Work-Pumpkin-Co.-CRM",
  },
];

const Posts: NextPage = () => {
  const isPc = useMediaQuery("(min-width:600px)");

  return (
    <Stack alignItems="center" sx={{ bgcolor: "light.main" }}>
      <Stack
        alignItems="center"
        sx={{ width: "100%", maxWidth: 736, px: isPc ? 8 : 2 }}
      >
        <Head>
          <title>Woony's Post</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Stack alignItems="flex-start" sx={{ width: "100%", my: 2 }}>
          <Typography variant="h6" fontWeight="bold" sx={{ my: 2 }}>
            Posts
            <Box
              sx={{
                height: 4,
                width: "100%",
                bgcolor: "primary.light",
              }}
            />
          </Typography>

          <Typography
            variant="body1"
            sx={{ textAlign: "center", color: "#888888" }}
          >
            Working on it...
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Posts;
