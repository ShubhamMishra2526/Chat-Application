import PusherServer from "pusher";
import PusherClient from "pusher-js";

export const pusherServer = new PusherServer({
  appId: process.env.PUSHER_APP_ID!,
  key: "0233f81bbd83e980270e",
  secret: process.env.PUSHER_SECRET!,
  cluster: "ap2",
  useTLS: true,
});
export const pusherClient = new PusherClient("0233f81bbd83e980270e", {
  channelAuthorization: {
    endpoint: "/api/pusher/auth",
    transport: "ajax",
  },
  cluster: "ap2",
});
