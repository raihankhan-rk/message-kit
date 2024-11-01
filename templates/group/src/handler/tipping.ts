import { HandlerContext, User } from "@xmtp/message-kit";
import { getUserInfo } from "../lib/resolver.js";

export async function handler(context: HandlerContext) {
  const {
    members,
    getMessageById,
    message: { content, sender, typeId },
  } = context;
  const msg = await getMessageById(content.reference);
  const replyReceiver = members?.find(
    (member) => member.inboxId === msg?.senderInboxId,
  );
  let amount: number = 0,
    receivers: User[] = [];
  // Handle different types of messages
  if (typeId === "reply" && replyReceiver) {
    // Process reply messages/
    //ha
    const { content: reply } = content;

    if (reply.includes("degen")) {
      receivers = [replyReceiver];
      const match = reply.match(/(\d+)/);
      if (match)
        amount = parseInt(match[0]); // Extract amount from reply
      else amount = 10;
    }
  } else if (typeId === "text") {
    const { content: text, params } = content;
    if (text.startsWith("/tip") && params) {
      // Process text commands starting with "/tip"
      const {
        params: { amount: extractedAmount, username },
        content: text,
      } = content;
      console.log(username);
      amount = extractedAmount || 10; // Default amount if not specified
      receivers = await Promise.all(
        username.map((username: string) => getUserInfo(username)),
      ); // Extract receiver from parameters
    }
  }
  if (!sender || receivers.length === 0 || amount === 0) {
    context.reply("Sender or receiver or amount not found.");
    return;
  }
  const receiverAddresses = receivers.map((receiver) => receiver.address);
  // Process sending tokens to each receiver
  console.log(receivers, receiverAddresses);
  context.sendTo(
    `You received ${amount} tokens from ${sender.address}.`,
    receiverAddresses,
  );

  // Notify sender of the transaction details
  context.sendTo(
    `You sent ${amount * receiverAddresses.length} tokens in total.`,
    [sender.address],
  );
}
