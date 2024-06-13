import "dotenv/config";
import { run, HandlerContext } from "@xmtp/message-kit";

run(async (context: HandlerContext) => {
  // Get the message and the address from the sender
  const { content, senderAddress, typeId } = context.message;

  if (typeId === "text") {
    const { content: text } = content;
    if (text?.startsWith("/slots") || text?.startsWith("/slots")) {
      await context.textReply(`https://slot-machine-frame.vercel.app/`);
    } else {
      await context.textReply(`gm`);
    }
  }
});
