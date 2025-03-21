import { fonts } from "./fonts";

const theme = {
  colors: {
    primary: "#2DB400 ",
    secondary: "#1A1A1A",
    background: "#F5F5F5",
    cardBackground: "#FFFFFF",
    border: "#E5E5E5",
    textPrimary: "#000000",
    textSecondary: "#666666",
    textMuted: "#A3A3A3",
  },
  layout: {
    maxWidth: "440px",
    minWidth: "320px",
    height: "100vh",
    wrapperPadding:
      "env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)",
  },
  fonts, // ✅ 폰트 추가
};

export default theme;
