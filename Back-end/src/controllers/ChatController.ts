import { Body, Controller, Get, Post, Route, Tags } from "tsoa";
import { getActiveUsers, getMessages, broadcastMessage } from "../socket";

interface MessageRequest {
  username: string;
  text: string;
}

interface MessageResponse {
  username: string;
  text: string;
  timestamp: string;
}

@Route("chat")
@Tags("Chat")
export class ChatController extends Controller {
  @Get("/users")
  public async getUsers(): Promise<string[]> {
    return getActiveUsers();
  }

  @Get("/messages")
  public async getAllMessages(): Promise<MessageResponse[]> {
    return getMessages();
  }

  @Post("/message")
  public async sendMessage(@Body() body: MessageRequest): Promise<MessageResponse> {
    return broadcastMessage(body.username, body.text);
  }
}
