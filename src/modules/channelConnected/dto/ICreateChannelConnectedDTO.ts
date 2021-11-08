export interface ICreateChannelConnectedDTO {
  user_id: string
  channel_id: string
  level: 'user' | 'voice' | 'op'
}
