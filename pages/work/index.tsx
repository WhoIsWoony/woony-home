import {
  Box,
  Grid,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";

const listWork = [
  {
    img: "/work_pumpkin_crm.png",
    title: "Pumpkin Co. CRM",
    content: "CRM app and web for offline kindergarten management.",
    to: "https://velog.io/@whoiswoony/Work-Pumpkin-Co.-CRM",
  },
  {
    img: "/work_kgs_project.png",
    title: "KGS_PROJECT.ML",
    content:
      "Construction and visualization of knowledge graph based on natural processing through Naver News.",
    to: "https://velog.io/@whoiswoony/Work-KGSPROJECT.ML",
  },
  {
    img: "/work_kamui_file.png",
    title: "kamuifile.com",
    content:
      "Unlimited file transfer using 1:1 webRTC and format conversion, compression, and reduction for various image formats.",
    to: "https://velog.io/@whoiswoony/Work-kamuifile.com",
  },
  {
    img: "/work_polygon_flip.png",
    title: "Polygon Coin Flip",
    content:
      "It is a complete dapp-based P2E service developed through Polygon, a Layer-2 blockchain, and IPFS web hosting.",
    to: "https://velog.io/@whoiswoony/Work-POLYGON-COIN-FLIP",
  },
  {
    img: "/work_real_city.png",
    title: "Real City",
    content:
      "RealCity is a B-grade content community that has achieved MAU 100,000 in collaboration with Facebook influencer 'Kill Cider'.",
    to: "https://velog.io/@whoiswoony/Work-Real-City",
  },
  {
    img: "/work_modi_play.png",
    title: "MODI Play",
    content:
      "MODI Play allows MODI and Smartphone to use sensors or apps in the smartphone using BLE communication.",
  },
];

const listOldWork = [
  {
    title: "JAMONG",
    subtitle: "javascript, React Native, nodejs, AWS",
    content: "App based on Tinder UI/UX for online AD poster collectors",
  },
  {
    title: "For Doc",
    subtitle: "javascript, nodejs, React Native, graphQL, prisma, MySQL, AWS",
    content: "App for doctors community.",
  },
  {
    title: "청사주차단속관리",
    subtitle: "Kotlin Android, Nodejs, AWS",
    content: "App for Sejong Parking Management Enforcement",
  },
  {
    title: "NANABA",
    subtitle: "Java Android, Nodejs, AWS",
    content:
      "Online coupon management system for college students and students",
  },
  {
    title: "국민대학교 자율주행 공모전",
    subtitle: "OpenCV, Image Processing, Lidar",
    content: "Autonomous Driving Contest held by Kookmin University",
  },
  {
    title: "교내 공모전 수상 스마트 미러",
    subtitle: "Python, Hotword Detection, Raspberry Pi",
    content:
      "Smart mirror won an intramural contest. A mirror that provides various API information by customizing hot-word detection on Raspberry Pi.",
  },
];

const Work: NextPage = () => {
  const isPc = useMediaQuery("(min-width:600px)");

  return (
    <Stack alignItems="center" sx={{ bgcolor: "light.main" }}>
      <Stack
        alignItems="center"
        sx={{ width: "100%", maxWidth: 736, px: isPc ? 8 : 2 }}
      >
        <Head>
          <title>Woony's Work</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

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

          <Grid container spacing={2}>
            {listWork.map((item, index) => (
              <Grid
                key={index}
                item
                xs={6}
                style={{
                  display: "block",
                  cursor: "pointer",
                }}
              >
                <Link href={item.to} style={{ textDecoration: "none" }}>
                  <img
                    src={item.img}
                    width="100%"
                    style={{ borderRadius: 8 }}
                    alt="Picture of Logo"
                  />
                  <Typography variant="h6" sx={{ textAlign: "center", mt: 2 }}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ textAlign: "center", color: "#888888" }}
                  >
                    {item.content}
                  </Typography>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Stack>

        <Stack alignItems="flex-start" sx={{ width: "100%", my: 2 }}>
          <Typography variant="h6" fontWeight="bold" sx={{ my: 2 }}>
            Old Work
            <Box
              sx={{
                height: 4,
                width: "100%",
                bgcolor: "primary.light",
              }}
            />
          </Typography>

          <Grid container spacing={2}>
            {listOldWork.map((item, index) => (
              <Grid
                key={index}
                item
                xs={12}
                style={{
                  display: "block",
                }}
              >
                <Stack
                  direction={isPc ? "row" : "column"}
                  sx={{ alignItems: isPc ? "flex-end" : "flex-start" }}
                  spacing={isPc ? 2 : 0}
                >
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body1">{item.subtitle}</Typography>
                </Stack>
                <Typography variant="body1" sx={{ color: "#888888" }}>
                  {item.content}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Work;