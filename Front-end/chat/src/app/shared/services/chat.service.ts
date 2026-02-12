import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Message } from '../interfaces/message.interface';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private messagesSubject = new BehaviorSubject<Message[]>([]);
  private currentUserSubject = new BehaviorSubject<string>('');
  private apiUrl = 'http://localhost:3000/chat/message';

  readonly messages$: Observable<Message[]> = this.messagesSubject.asObservable();
  readonly currentUser$: Observable<string> = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  public addMessage(username: string, text: string): void {
    const trimmedUsername = username.trim() || 'Anonim';

    const currentUser = this.currentUserSubject.value;
    if (currentUser !== trimmedUsername) {
      const joinMessage: Message = {
        id: uuidv4(),
        username: 'System',
        text: `${trimmedUsername} s-a alaturat conversatiei`,
        timestamp: new Date(),
        isSystemMessage: true,
      };
      const currentMessages = this.messagesSubject.value;
      this.messagesSubject.next([...currentMessages, joinMessage]);
      this.currentUserSubject.next(trimmedUsername);
    }

    const messageData = {
      username: trimmedUsername,
      text: text.trim(),
    };

    this.http.post<Message>(this.apiUrl, messageData).subscribe({
      next: (response) => {
        const newMessage: Message = {
          username: response.username,
          text: response.text,
          timestamp: response.timestamp,
        };
        const currentMessages = this.messagesSubject.value;
        this.messagesSubject.next([...currentMessages, newMessage]);
      },
      error: (error) => {
        console.error('Eroare la trimiterea mesajului:', error);
      },
    });
  }
}
