import {
  mysqlTable,
  mysqlSchema,
  AnyMySqlColumn,
  index,
  foreignKey,
  int,
  varchar,
  datetime,
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const channelMessage = mysqlTable(
  "channel_message",
  {
    id: int().autoincrement().notNull(),
    channelId: int("channel_id")
      .notNull()
      .references(() => serverChannel.id, {
        onDelete: "restrict",
        onUpdate: "restrict",
      })
      .references(() => dmChannel.id, {
        onDelete: "restrict",
        onUpdate: "restrict",
      }),
    userId: int("user_id")
      .notNull()
      .references(() => user.id, {
        onDelete: "restrict",
        onUpdate: "restrict",
      }),
    channelType: int("channel_type").default(0),
    message: varchar({ length: 255 }).default("NULL"),
    createAt: datetime("create_at", { mode: "string" }).default("NULL"),
    updateAt: datetime("update_at", { mode: "string" }).default("NULL"),
    flag: int().default(0),
  },
  (table) => {
    return {
      userId: index("user_id").on(table.userId),
      channelId: index("channel_id").on(table.channelId),
    };
  }
);

export const dmChannel = mysqlTable(
  "dm_channel",
  {
    id: int().autoincrement().notNull(),
    userId: int("user_id")
      .notNull()
      .references(() => user.id, {
        onDelete: "restrict",
        onUpdate: "restrict",
      }),
    user2Id: int("user2_id")
      .notNull()
      .references(() => user.id, {
        onDelete: "restrict",
        onUpdate: "restrict",
      }),
    createAt: datetime("create_at", { mode: "string" }).default("NULL"),
    flag: int().default(0),
  },
  (table) => {
    return {
      userId: index("user_id").on(table.userId),
      user2Id: index("user2_id").on(table.user2Id),
    };
  }
);

export const emoji = mysqlTable(
  "emoji",
  {
    id: int().autoincrement().notNull(),
    serverId: int("server_id")
      .default(0)
      .references(() => server.id, {
        onDelete: "restrict",
        onUpdate: "restrict",
      }),
    // Warning: Can't parse blob from database
    // blobType: blob("emoji_img"),
    flag: int().default(1),
  },
  (table) => {
    return {
      serverId: index("server_id").on(table.serverId),
    };
  }
);

export const img = mysqlTable(
  "img",
  {
    id: int().autoincrement().notNull(),
    messageId: int("message_id")
      .default(0)
      .references(() => channelMessage.id, {
        onDelete: "restrict",
        onUpdate: "restrict",
      }),
    // Warning: Can't parse blob from database
    // blobType: blob("content"),
  },
  (table) => {
    return {
      messageId: index("message_id").on(table.messageId),
    };
  }
);

export const server = mysqlTable("server", {
  id: int().autoincrement().notNull(),
  serverName: varchar("server_name", { length: 255 }).default("NULL"),
  // Warning: Can't parse blob from database
  // blobType: blob("server_avt"),
  inviteLink: varchar("invite_link", { length: 255 }).default("NULL"),
  createAt: datetime("create_at", { mode: "string" }).default("NULL"),
  updateAt: datetime("update_at", { mode: "string" }).default("NULL"),
});

export const serverChannel = mysqlTable(
  "server_channel",
  {
    id: int().autoincrement().notNull(),
    serverId: int("server_id")
      .notNull()
      .references(() => server.id, {
        onDelete: "restrict",
        onUpdate: "restrict",
      }),
    type: int().default(0),
    createAt: datetime("create_at", { mode: "string" }).default("NULL"),
    updateAt: datetime("update_at", { mode: "string" }).default("NULL"),
  },
  (table) => {
    return {
      serverId: index("server_id").on(table.serverId),
    };
  }
);

export const serverUser = mysqlTable(
  "server_user",
  {
    serverId: int("server_id")
      .notNull()
      .references(() => server.id, {
        onDelete: "restrict",
        onUpdate: "restrict",
      }),
    userId: int("user_id")
      .notNull()
      .references(() => user.id, {
        onDelete: "restrict",
        onUpdate: "restrict",
      }),
    flag: int().default(1),
  },
  (table) => {
    return {
      userId: index("user_id").on(table.userId),
    };
  }
);

export const sticker = mysqlTable(
  "sticker",
  {
    id: int().autoincrement().notNull(),
    serverId: int("server_id")
      .default(0)
      .references(() => server.id, {
        onDelete: "restrict",
        onUpdate: "restrict",
      }),
    // Warning: Can't parse blob from database
    // blobType: blob("content"),
    flag: int().default(1),
  },
  (table) => {
    return {
      serverId: index("server_id").on(table.serverId),
    };
  }
);

export const stickerMessage = mysqlTable(
  "sticker_message",
  {
    stickerId: int("sticker_id")
      .notNull()
      .references(() => sticker.id, {
        onDelete: "restrict",
        onUpdate: "restrict",
      }),
    messageId: int("message_id")
      .notNull()
      .references(() => channelMessage.id, {
        onDelete: "restrict",
        onUpdate: "restrict",
      }),
  },
  (table) => {
    return {
      messageId: index("message_id").on(table.messageId),
    };
  }
);

export const user = mysqlTable("user", {
  id: int().autoincrement().notNull(),
  // Warning: Can't parse blob from database
  // blobType: blob("user_avt"),
  userName: varchar("user_name", { length: 255 }).default("NULL"),
  bio: varchar({ length: 255 }).default("NULL"),
  email: varchar({ length: 255 }).default("NULL"),
  password: varchar({ length: 255 }).default("NULL"),
  createAt: datetime("create_at", { mode: "string" }).default("NULL"),
  flag: int().default(1),
});
