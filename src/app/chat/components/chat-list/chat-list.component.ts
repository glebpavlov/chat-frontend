import { Component, OnInit } from '@angular/core';
import { ChatListItem } from '../../interfaces/chat-list-item';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

  chatList: ChatListItem[] = [];

  constructor() {
  }

  ngOnInit(): void {

    this.chatList = [
      {
        id: 0,
        label: 'Веселый пони'
      },
      {
        id: 1,
        label: 'Быстрый Вилли'
      },
      {
        id: 1,
        label: 'Быстрый Вилли'
      },
      {
        id: 1,
        label: 'Быстрый Вилли'
      },
      {
        id: 1,
        label: 'Быстрый Вилли'
      },
      {
        id: 1,
        label: 'Быстрый Вилли'
      },
      {
        id: 1,
        label: 'Быстрый Вилли'
      },
      {
        id: 1,
        label: 'Быстрый Вилли'
      },
      {
        id: 1,
        label: 'Быстрый Вилли'
      },
      {
        id: 1,
        label: 'Быстрый Вилли'
      },
      {
        id: 1,
        label: 'Быстрый Вилли'
      },
      {
        id: 1,
        label: 'Быстрый Вилли'
      },
      {
        id: 1,
        label: 'Быстрый Вилли'
      },
      {
        id: 0,
        label: 'Веселый пони'
      },
      {
        id: 1,
        label: 'Быстрый Вилли'
      },
      {
        id: 0,
        label: 'Веселый пони'
      },
      {
        id: 1,
        label: 'Быстрый Вилли'
      },
      {
        id: 0,
        label: 'Веселый пони'
      },
      {
        id: 1,
        label: 'Быстрый Вилли'
      },
      {
        id: 0,
        label: 'Веселый пони'
      },
      {
        id: 1,
        label: 'Быстрый Вилли'
      },
      {
        id: 0,
        label: 'Веселый пони'
      },
      {
        id: 1,
        label: 'Быстрый Вилли'
      },
      {
        id: 0,
        label: 'Веселый пони'
      },
      {
        id: 1,
        label: 'Быстрый Вилли'
      },
      {
        id: 0,
        label: 'Веселый пони'
      },
      {
        id: 1,
        label: 'Быстрый Вилли'
      },
      {
        id: 0,
        label: 'Веселый пони'
      },
      {
        id: 1,
        label: 'Быстрый Вилли'
      },
      {
        id: 0,
        label: 'Веселый пони'
      },
      {
        id: 1,
        label: 'Быстрый Вилли'
      },

    ];
  }

}
