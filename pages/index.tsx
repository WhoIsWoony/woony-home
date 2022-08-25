import {
  Avatar,
  Box,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useContext } from "react";
import { GlobalContext } from "./_app";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BookIcon from "@mui/icons-material/Book";

const Home: NextPage = () => {
  const { selectedTheme, setSelectedTheme } = useContext(GlobalContext);
  const isPc = useMediaQuery("(min-width:600px)");

  return (
    <Stack alignItems="center" sx={{ bgcolor: "light.main" }}>
      <Stack
        alignItems="center"
        sx={{ width: "100%", maxWidth: 736, px: isPc ? 8 : 2 }}
      >
        <Head>
          <title>HELLO, WOONY</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Typography
          variant="body1"
          color="light"
          sx={{
            textAlign: "center",
            width: "100%",
            px: 2,
            py: 2,
            borderRadius: 2,

            mt: 4,
            bgcolor: "primary.dark",
            color: "primary.light",
            boxShadow: "0px 0px 20px #0000000f",
            cursor: "pointer",
          }}
        >
          I'm an indie app developer in South Korea!
        </Typography>

        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ width: "100%", marginTop: 4 }}
        >
          <Stack spacing={1}>
            <Typography variant="h4" fontWeight="bold">
              Seongun Kang
            </Typography>
            <Typography variant="body1">
              Developer (Frontend, Backend, DevOps)
            </Typography>
          </Stack>
          <Avatar
            src="/profile.jpeg"
            sx={{ width: 120, height: 120, border: "4px solid #ffffff" }}
          />
        </Stack>

        <Stack alignItems="flex-start" sx={{ width: "100%", my: 2 }}>
          <Typography variant="h6" fontWeight="bold" sx={{ my: 2 }}>
            Work
            <Box
              sx={{
                height: 4,
                width: "100%",
                bgcolor: "primary.light",
              }}
            />
          </Typography>

          <Typography variant="body1">
            &nbsp;&nbsp;&nbsp;Woony is a freelance and a full-stack developer
            based in South Korea with a passion for building digital
            services/stuff he wants. He has a knack for all things launching
            products, from planning and designing all the way to solving
            real-life problems with code. Currently, he is living off of his own
            product called "URLove". He publishes content for marketing his
            products. I am also looking for a company that matches my
            personality.
          </Typography>
        </Stack>

        <Stack alignItems="flex-start" sx={{ width: "100%", my: 2 }}>
          <Typography variant="h6" fontWeight="bold" sx={{ my: 2 }}>
            Bio
            <Box
              sx={{
                height: 4,
                width: "100%",
                bgcolor: "primary.light",
              }}
            />
          </Typography>

          <Stack direction="row" spacing={2}>
            <Typography variant="body1" fontWeight="bold">
              1997.12
            </Typography>
            <Typography variant="body1">
              Born in Daejeon, South Korea
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Typography variant="body1" fontWeight="bold">
              2018.06
            </Typography>
            <Typography variant="body1">
              Joined{" "}
              <Link href="https://global.luxrobo.com/" color="#00a4cd">
                Luxrobo Co., Ltd
              </Link>{" "}
              as an native app developer
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Typography variant="body1" fontWeight="bold">
              2022.02
            </Typography>
            <Typography variant="body1">
              Joined{" "}
              <Link href="https://pumpkincorp.com/" color="#00a4cd">
                Pumpkin Company Corp.
              </Link>{" "}
              as an full-stack developer
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Typography
              variant="body1"
              fontWeight="bold"
              sx={{ whiteSpace: isPc ? "nowrap" : undefined }}
            >
              2023.02 (Comming Soon)
            </Typography>
            <Typography variant="body1">
              Graduated from Kwangwoon Univ. with a Bachelor of Science in
              Computer Science
            </Typography>
          </Stack>
        </Stack>

        <Stack alignItems="flex-start" sx={{ width: "100%", my: 2 }}>
          <Typography variant="h6" fontWeight="bold" sx={{ my: 2 }}>
            I ♥
            <Box
              sx={{
                height: 4,
                width: "100%",
                bgcolor: "primary.light",
              }}
            />
          </Typography>
          <Stack sx={{ width: "100%", alignItems: "center" }}>
            <Typography variant="body1">
              Autistic Guitar, Music, Drawing, Machine Learning, I'm going on a
              diet someday TT
            </Typography>
          </Stack>
        </Stack>

        <Stack alignItems="flex-start" sx={{ width: "100%", my: 2 }}>
          <Typography variant="h6" fontWeight="bold" sx={{ my: 2 }}>
            On the Web
            <Box
              sx={{
                height: 4,
                width: "100%",
                bgcolor: "primary.light",
              }}
            />
          </Typography>

          <Link
            href="https://github.com/WhoIsWoony"
            sx={{
              px: 2,
              py: 1,
              borderRadius: 2,
              ":hover": { bgcolor: "primary.dark", color: "primary.light" },
              cursor: "pointer",
            }}
          >
            <Stack direction="row" spacing={1}>
              <GitHubIcon sx={{ color: "primary.light" }} />
              <Typography variant="body1">@WhoIsWoony (New Github)</Typography>
            </Stack>
          </Link>
          <Link
            href="https://github.com/clover7kso"
            sx={{
              px: 2,
              py: 1,
              borderRadius: 2,
              ":hover": { bgcolor: "primary.dark", color: "primary.light" },
              cursor: "pointer",
            }}
          >
            <Stack direction="row" spacing={1}>
              <GitHubIcon sx={{ color: "primary.light" }} />
              <Typography variant="body1">@clover7kso (Old Github)</Typography>
            </Stack>
          </Link>
          <Link
            href="https://www.linkedin.com/in/WhoIsWoony/"
            sx={{
              px: 2,
              py: 1,
              borderRadius: 2,
              ":hover": { bgcolor: "primary.dark", color: "primary.light" },
              cursor: "pointer",
            }}
          >
            <Stack direction="row" spacing={1}>
              <LinkedInIcon sx={{ color: "primary.light" }} />
              <Typography variant="body1">@WhoIsWoony (Linkedin)</Typography>
            </Stack>
          </Link>
          <Link
            href="https://velog.io/@whoiswoony"
            sx={{
              px: 2,
              py: 1,
              borderRadius: 2,
              ":hover": { bgcolor: "primary.dark", color: "primary.light" },
              cursor: "pointer",
            }}
          >
            <Stack direction="row" spacing={1}>
              <BookIcon sx={{ color: "primary.light" }} />
              <Typography variant="body1">@WhoIsWoony (Velog)</Typography>
            </Stack>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Home;
