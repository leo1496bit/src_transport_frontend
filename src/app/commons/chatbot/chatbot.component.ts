import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {
  @Output() openChat = new EventEmitter<any>();

  putOpenChat(){
    this.openChat.emit();
  }
}
