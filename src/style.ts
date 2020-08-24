import theme from "@chakra-ui/theme";

const customTheme = {
  ...theme,
  styles: {
    //@ts-ignore
    global: (props: string) => ({
      "html, body": {
        minHeight: "100vh",
        minWidth: "100vw",
      },
      "#root": {
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        flexDir: "column",
      },
    }),
  },
};

export default customTheme;
