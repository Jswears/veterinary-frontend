import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
import "../Chatbot/chatbot.css";

export const theme = {
  background: "#e6eaf8",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#fcc2b4",
  headerFontColor: "#9993bd",
  headerFontSize: "15px",
  botBubbleColor: "#9993bd",
  botFontColor: "#fff",
  userBubbleColor: "#f5f8fb",
  userFontColor: "#fff",
  width: "200px",
  height: "200px",
};

const ThemedExample = () => <ThemeProvider theme={theme}></ThemeProvider>;

export default ThemedExample;
