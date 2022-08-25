import React, { ReactNode, useContext } from "react";
import Link from "next/link";
import { Transition, TransitionGroup } from "react-transition-group";
import { useRouter } from "next/router";
import Header from "../components/Header";
import { GlobalContext } from "./_app";
import Image from "next/image";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import Footer from "../components/Footer";

interface Props {
  children: ReactNode;
}
const TIMEOUT = 300;
const getTransitionStyles: any = {
  entering: {
    position: `absolute`,
    opacity: 0,
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    transform: `translateY(0rem)`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    transform: `translateY(2rem)`,
    opacity: 0,
  },
};

const bubbleTexts: any = {
  "/": { bubbleLeft: "Hello", bubbleRight: "I'm Woony" },
  "/work": {
    bubbleLeft: "Here's my work",
    bubbleRight: "I'm trying my best",
  },
  "/posts": { bubbleLeft: "What do you like?", bubbleRight: "I love coding" },
};

const AppLayout = ({ children }: Props) => {
  const { selectedTheme, setSelectedTheme } = useContext(GlobalContext);
  const { pathname } = useRouter();
  const isPc = useMediaQuery("(min-width:600px)");

  return (
    <Stack
      sx={{
        minHeight: "100vh",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Stack>
        <Header />
        <Stack sx={{ width: "100%", maxWidth: 736, alignItems: "center" }}>
          <Stack
            direction="row"
            sx={{ width: "100%", justifyContent: "center", px: 2 }}
          >
            <Stack
              sx={{
                flex: 1,
                alignItems: "flex-end",
                justifyContent: "flex-top",
                pt: 4,
              }}
            >
              <Typography
                variant={isPc ? "body1" : "body2"}
                sx={{
                  py: isPc ? 2 : 1,
                  px: isPc ? 4 : 2,
                  textAlign: "center",
                  color: "primary.light",
                  position: "relative",
                  bgcolor: "primary.dark",
                  borderRadius: ".4em",
                  "&::after": {
                    content: "''",
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    width: 0,
                    height: 0,
                    border: "20px solid transparent",
                    borderTopColor: "primary.dark",
                    borderBottom: 0,
                    borderRight: 0,
                    ml: "-10px",
                    mb: "-20px",
                  },
                }}
              >
                {bubbleTexts[pathname]["bubbleLeft"]}
              </Typography>
            </Stack>
            <div
              style={{
                width: isPc ? 300 : 100,
                height: isPc ? 300 : 100,
                position: "relative",
                marginTop: 40,
              }}
            >
              <Image
                src={selectedTheme === "dark" ? "/icon_b.png" : "/icon_w.png"}
                alt="Picture of Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <Stack
              sx={{
                flex: 1,
                alignItems: "flex-start",
                justifyContent: "flex-end",
              }}
            >
              <Typography
                variant={isPc ? "body1" : "body2"}
                sx={{
                  py: isPc ? 2 : 1,
                  px: isPc ? 4 : 2,
                  textAlign: "center",
                  color: "primary.light",
                  position: "relative",
                  bgcolor: "primary.dark",
                  borderRadius: ".4em",
                  "&::after": {
                    content: "''",
                    position: "absolute",
                    top: 0,
                    right: "50%",
                    width: 0,
                    height: 0,
                    border: "20px solid transparent",
                    borderBottomColor: "primary.dark",
                    borderTop: 0,
                    borderLeft: 0,
                    mr: "-10px",
                    mt: "-20px",
                  },
                }}
              >
                {bubbleTexts[pathname]["bubbleRight"]}
              </Typography>
            </Stack>
          </Stack>
          {!isPc && (
            <Typography
              variant="h3"
              fontWeight="bold"
              fontSize={30}
              sx={{ whiteSpace: "nowrap", mt: 4 }}
            >
              HELLO, WOONY
            </Typography>
          )}
        </Stack>
        <TransitionGroup style={{ position: "relative" }}>
          <Transition
            key={pathname}
            timeout={{
              enter: TIMEOUT,
              exit: TIMEOUT,
            }}
          >
            {(status) => (
              <div
                style={{
                  ...getTransitionStyles[status],
                }}
              >
                {children}
              </div>
            )}
          </Transition>
        </TransitionGroup>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default AppLayout;
