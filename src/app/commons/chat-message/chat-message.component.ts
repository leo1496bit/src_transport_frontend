import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.css'
})
export class ChatMessageComponent {
  @Input() openChat:boolean = false;
  @Output() openChatChange =  new EventEmitter<boolean>();

  closeChat(){
    this.openChatChange.emit(false);
  }
}
