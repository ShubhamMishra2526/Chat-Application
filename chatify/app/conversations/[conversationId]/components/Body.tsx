"use client";

import useConversation from "@/app/hooks/useConversation";
import { FullMessageType } from "@/app/types";
import React, { useEffect, useRef, useState } from "react";
import MessageBox from "./MessageBox";
import axios from "axios";

interface bodyProps {
  initialMessages: FullMessageType[];
}

const Body: React.FC<bodyProps> = ({ initialMessages }) => {
  const [messages, setInitialMessages] = useState(initialMessages);
  const bottomRef = useRef<HTMLDivElement>(null);

  const { conversationId } = useConversation();

  useEffect(() => {
    axios
      .post(`/api/conversations/${conversationId}/seen`)
      .then((response) => {
        console.log("Seen status updated:", response.data);
      })
      .catch((error) => {
        console.error("Error updating seen status:", error);
      });
  }, [conversationId]);

  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message, i) => (
        <MessageBox
          isLast={i === messages.length - 1}
          key={message.id}
          data={message}
        />
      ))}
      <div ref={bottomRef} className="pt-24" />
    </div>
  );
};

export default Body;
