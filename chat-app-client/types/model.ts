export type serverChannel = {
  id: number;
  server_id: number;
  channel_name: string;
  type: number;
  create_at: Date;
  update_at: Date;
};

export type channelMessage = {
  id?: number;
  user_name: string;
  message: string;
  update_at?: Date;
};
