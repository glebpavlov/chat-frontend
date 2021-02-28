import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-history-element',
  templateUrl: './chat-history-element.component.html',
  styleUrls: ['./chat-history-element.component.scss']
})
export class ChatHistoryElementComponent implements OnInit {

  @Input() message;

  /** признак, что сообщение является собственным */
  get isOwn(): boolean {
    return this.message.authorId === 0;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
