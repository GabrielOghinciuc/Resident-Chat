export interface Message {
  id?: string;
  username: string;
  text: string;
  timestamp: Date | string;
  isSystemMessage?: boolean;
}
