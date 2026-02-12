import { Server as HttpServer } from "http";
import { Server, Socket } from "socket.io";

let io: Server;

const activeUsers: Set<string> = new Set();
const messages: { username: string; text: string; timestamp: string }[] = [];

export function getActiveUsers(): string[] {
  return Array.from(activeUsers);
}

export function getMessages(): { username: string; text: string; timestamp: string }[] {
  return messages;
}

export function broadcastMessage(username: string, text: string): { username: string; text: string; timestamp: string } {
  activeUsers.add(username);
  const payload = { username, text, timestamp: new Date().toISOString() };
  messages.push(payload);
  if (io) {
    io.emit("message", payload);
  }
  return payload;
}
