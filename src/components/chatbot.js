import React from "react";
import ChatBot from "react-simple-chatbot";
import avatar from "../images/botImages/avatar.png";
import { Link } from "gatsby";

function CustomChatbot(props) {
  const config = {
    width: "300px",
    height: "400px",
    floating: true,
    headerTitle: "Website Guide",
    botAvatar: avatar,
  };
  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to my portfolio site",
      trigger: "Welcome page message",
    },
    {
      id: "Welcome page message",
      message: "How can I help you navigate though me site",
      trigger: "Options for welcome page",
    },
    {
      id: "Options for welcome page",
      options: [
          { value: 1, label: 'Resume', trigger: '4' },
          { value: 2, label: 'Projects', trigger: '5' },
          { value: 3, label: 'Blogs', trigger: '6' },
        ],
    },
    {
      id: '4',
      component: (
        <Link to="/resume">Visit Resume </Link>
      ),
      end: true,
    },
    {
      id: '5',
      component: (
        <Link to="/showcase">See Projects </Link>
      ),
      end: true,
    },
    {
      id: '6',
      component: (
        <Link to="/contact">See Contact details </Link>
      ),
      trigger: "Done",
    },
    {
      id: "Done",
      message: "Have a great day !!",
      end: true,
    },
  ];
  return <ChatBot steps={steps} {...config} />;
}
export default CustomChatbot;
