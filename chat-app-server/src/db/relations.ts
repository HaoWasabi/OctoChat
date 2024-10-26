import { relations } from "drizzle-orm/relations";
import {
  serverChannel,
  channelMessage,
  user,
  dmChannel,
  server,
  emoji,
  img,
  serverUser,
  sticker,
  stickerMessage,
} from "./schema";

export const channelMessageRelations = relations(
  channelMessage,
  ({ one, many }) => ({
    serverChannel: one(serverChannel, {
      fields: [channelMessage.channelId],
      references: [serverChannel.id],
    }),
    user: one(user, {
      fields: [channelMessage.userId],
      references: [user.id],
    }),
    dmChannel: one(dmChannel, {
      fields: [channelMessage.channelId],
      references: [dmChannel.id],
    }),
    imgs: many(img),
    stickerMessages: many(stickerMessage),
  })
);

export const serverChannelRelations = relations(
  serverChannel,
  ({ one, many }) => ({
    channelMessages: many(channelMessage),
    server: one(server, {
      fields: [serverChannel.serverId],
      references: [server.id],
    }),
  })
);

export const userRelations = relations(user, ({ many }) => ({
  channelMessages: many(channelMessage),
  dmChannels_userId: many(dmChannel, {
    relationName: "dmChannel_userId_user_id",
  }),
  dmChannels_user2Id: many(dmChannel, {
    relationName: "dmChannel_user2Id_user_id",
  }),
  serverUsers: many(serverUser),
}));

export const dmChannelRelations = relations(dmChannel, ({ one, many }) => ({
  channelMessages: many(channelMessage),
  user_userId: one(user, {
    fields: [dmChannel.userId],
    references: [user.id],
    relationName: "dmChannel_userId_user_id",
  }),
  user_user2Id: one(user, {
    fields: [dmChannel.user2Id],
    references: [user.id],
    relationName: "dmChannel_user2Id_user_id",
  }),
}));

export const emojiRelations = relations(emoji, ({ one }) => ({
  server: one(server, {
    fields: [emoji.serverId],
    references: [server.id],
  }),
}));

export const serverRelations = relations(server, ({ many }) => ({
  emojis: many(emoji),
  serverChannels: many(serverChannel),
  serverUsers: many(serverUser),
  stickers: many(sticker),
}));

export const imgRelations = relations(img, ({ one }) => ({
  channelMessage: one(channelMessage, {
    fields: [img.messageId],
    references: [channelMessage.id],
  }),
}));

export const serverUserRelations = relations(serverUser, ({ one }) => ({
  server: one(server, {
    fields: [serverUser.serverId],
    references: [server.id],
  }),
  user: one(user, {
    fields: [serverUser.userId],
    references: [user.id],
  }),
}));

export const stickerRelations = relations(sticker, ({ one, many }) => ({
  server: one(server, {
    fields: [sticker.serverId],
    references: [server.id],
  }),
  stickerMessages: many(stickerMessage),
}));

export const stickerMessageRelations = relations(stickerMessage, ({ one }) => ({
  sticker: one(sticker, {
    fields: [stickerMessage.stickerId],
    references: [sticker.id],
  }),
  channelMessage: one(channelMessage, {
    fields: [stickerMessage.messageId],
    references: [channelMessage.id],
  }),
}));
