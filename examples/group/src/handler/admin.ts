import { HandlerContext } from "@xmtp/message-kit";
import type { User } from "@xmtp/message-kit";

// Reusable function to handle adding members
function handleAddMembers(
  addedInboxes: { inboxId: string }[],
  members: User[],
) {
  const addedNames = members
    ?.filter((member: User) =>
      addedInboxes.some(
        (added: { inboxId: string }) =>
          added?.inboxId?.toLowerCase() === member?.inboxId?.toLowerCase(),
      ),
    )
    .map((member: User) => member.username)
    .filter((username: string) => username && username.trim() !== "")
    .map((username: string) => `@${username}`)
    .join(", "); // Join names for message formatting

  if (addedNames) {
    let messages = [
      `Yo, ${addedNames}! 🫡`,
      `LFG ${addedNames}!`,
      `${addedNames}🤝`,
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  }
  return "";
}
function handleRemoveMembers() {
  let messages = [`🪦`, `👻`, `hasta la vista, baby`];
  return messages[Math.floor(Math.random() * messages.length)];
}

export async function handler(context: HandlerContext) {
  const {
    group,
    members,
    message: { content, typeId },
  } = context;
  if (typeId === "group_updated" && group) {
    const { removedInboxes, addedInboxes } = content;
    let message: string = "";
    if (addedInboxes && addedInboxes.length > 0) {
      message += handleAddMembers(addedInboxes, members!);
    } else if (removedInboxes && removedInboxes.length > 0) {
      message += handleRemoveMembers();
    }
    await context.send(message);
  } else if (typeId === "text" && group) {
    const {
      command,
      params: { username, name },
      params,
    } = content;

    console.log("removedInboxes", command, params);

    switch (command) {
      case "remove":
        try {
          if (!Array.isArray(username)) {
            context.reply("Wrong username");
            return;
          }
          const removedInboxes = username?.map((user: User) => user.inboxId);
          if (!removedInboxes || removedInboxes.length === 0) {
            context.reply("Wrong username");
            return;
          }
          await group.sync();
          await group.removeMembersByInboxId(removedInboxes);
          const messages = handleRemoveMembers();
          context.reply(messages);
        } catch (error) {
          context.reply("Error: Check admin privileges");
          console.error(error);
        }
        break;
      case "add":
        try {
          if (!Array.isArray(username)) {
            context.reply("Wrong username");
            return;
          }
          const addedInboxes = username?.map((user: User) =>
            user?.inboxId?.toLowerCase(),
          );
          if (!addedInboxes || addedInboxes.length === 0) {
            context.reply("Wrong username");
            return;
          }
          await group.sync();
          await group.addMembersByInboxId(addedInboxes);
          await group.sync();
          const messages = handleAddMembers(
            [{ inboxId: addedInboxes[0] }],
            members!,
          );
          context.reply(messages);
        } catch (error) {
          context.reply("Error: Check admin privileges");
          console.error(error);
        }
        break;
    }
  }
  return;
}
