import { Component, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from '../../shared/services/chat.service';

@Component({
  selector: 'app-chat-box',
  imports: [CommonModule],
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.scss',
})
export class ChatBoxComponent implements AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  messages$;
  currentUser$;
  private shouldScrollToBottom = true;

  constructor(private chatService: ChatService) {
    this.messages$ = chatService.messages$;
    this.currentUser$ = chatService.currentUser$;
  }

  ngAfterViewChecked(): void {
    if (this.shouldScrollToBottom && this.messagesContainer) {
      const el = this.messagesContainer.nativeElement;
      el.scrollTop = el.scrollHeight;
    }
  }

  onScroll(): void {
    const el = this.messagesContainer.nativeElement;
    this.shouldScrollToBottom = el.scrollHeight - el.scrollTop === el.clientHeight;
  }
}
