import { Component } from '@angular/core';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { MessageFormComponent } from './components/message-form/message-form.component';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [Header, ChatBoxComponent, MessageFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
