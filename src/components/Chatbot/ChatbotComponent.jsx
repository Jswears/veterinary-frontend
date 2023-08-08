import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
import { theme } from "./ChatbotStyle"; //
import { Link } from "react-router-dom";
import BotLogo from "../../assets/images/botlogo.png";
import { useState } from "react";

const ChatbotComponent = () => {
  const [chatbotOpen, setChatbotOpen] = useState(true);

  const handleChatbotToggle = () => {
    setChatbotOpen(!chatbotOpen);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="chatbot-container">
        {/* Chatbot avatar that opens chatbot on click */}
        <div className="chatbot-avatar" onClick={handleChatbotToggle}>
          <img
            src={BotLogo}
            alt="Chatbot Avatar"
            style={{ width: "50px", height: "50px" }}
          />
        </div>
        {/* Actual Chatbot */}
        {chatbotOpen && (
          <ChatBot
            headerTitle="VetBot"
            bubbleStyle={{
              background: theme.botBubbleColor,
              fontSize: "13px",
              fontFamily: "'Open Sans', sans-serif",
              padding: "8px 12px",
            }}
            contentStyle={{
              fontFamily: theme.fontFamily,
              fontSize: "14px",
              color: theme.userFontColor,
            }}
            botAvatar={BotLogo}
            style={{ width: "300px", height: "400px" }}
            steps={[
              {
                id: "1",
                message: "Hello, I am VetBot, how may I help you?",
                trigger: "2",
              },
              {
                id: "2",
                options: [
                  {
                    value: 1,
                    label: "Create new form",
                    trigger: "11",
                  },
                  {
                    value: 2,
                    label: "See my forms",
                    trigger: "12",
                  },
                  {
                    value: 3,
                    label: "Register new pet",
                    trigger: "13",
                  },
                  {
                    value: 4,
                    label: "Your Pets",
                    trigger: "14",
                  },
                  {
                    value: 5,
                    label: "See Your Feedbacks",
                    trigger: "15",
                  },
                  {
                    value: 6,
                    label: "Complaints",
                    trigger: "16",
                  },
                  {
                    value: 7,
                    label: "See Store",
                    trigger: "17",
                  },
                ],
              },
              {
                id: "3",
                options: [
                  {
                    value: 1,
                    label: "Go to options",
                    trigger: "2",
                  },
                  {
                    value: 2,
                    label: "End conversation",
                    end: true,
                  },
                ],
              },
              // New Form section
              {
                id: "11",
                component: (
                  <div>
                    You can create a new form to request feedback from
                    veterinary <Link to={"/new-form"}> here</Link>
                  </div>
                ),
                trigger: "3",
              },
              // Your Form section
              {
                id: "12",
                component: (
                  <div>
                    {" "}
                    You can see your forms here and check if they were read or
                    received any feedback<Link to={"/your-forms"}> Forms</Link>.
                  </div>
                ),
                trigger: "3",
              },
              // New Pet section
              {
                id: "13",
                component: (
                  <div>
                    You can register a new pet
                    <Link to={"/new-pet"}> here</Link>
                  </div>
                ),
                trigger: "3",
              },
              // Your Pets section
              {
                id: "14",
                component: (
                  <div>
                    You can see your registered pets{" "}
                    <Link to={"/your-pets"}> here</Link>.
                  </div>
                ),
                trigger: "3",
              },
              // Your Feedbacks section
              {
                id: "15",
                component: (
                  <div>
                    You can see the feedback received from veterinary doctors
                    here. <Link to={"/your-feedbacks"}> here</Link>.
                  </div>
                ),
                trigger: "3",
              },
              // Complaints section
              {
                id: "16",
                component: (
                  <div>
                    You can submit your complaints{" "}
                    <Link to={"/complaints"}> here.</Link>.
                  </div>
                ),
                trigger: "3",
              },
              // Store section
              {
                id: "17",
                component: (
                  <div>
                    You can buy medicine from our store.{" "}
                    <Link to={"/store"}> here</Link>.
                  </div>
                ),
                trigger: "3",
              },
            ]}
          />
        )}
      </div>
    </ThemeProvider>
  );
};

export default ChatbotComponent;
