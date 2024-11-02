import { run, HandlerContext } from "@xmtp/message-kit";

console.log(process.env.NODE_ENV);
run(
  async (context: HandlerContext) => {
    // Get the message and the address from the sender
    const { content, sender } = context.message;

    // To reply, just call `reply` on the HandlerContext
    await context.send(`gm`);
  },
  {
    client: {
      logging: "debug",
    },
  },
);
