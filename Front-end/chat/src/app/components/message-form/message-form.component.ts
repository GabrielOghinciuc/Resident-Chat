import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../shared/services/chat.service';

@Component({
  selector: 'app-message-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './message-form.component.html',
  styleUrl: './message-form.component.scss',
})
export class MessageFormComponent {
  public username = '';
  public messageText = '';

  constructor(private chatService: ChatService) {}

  public onSubmit(): void {
    const text = this.messageText.trim();

    if (!text) {
      return;
    }

    this.chatService.addMessage(this.username, text);
    this.messageText = '';
  }
}
