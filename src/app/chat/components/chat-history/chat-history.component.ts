import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.scss']
})
export class ChatHistoryComponent implements OnInit {

  // id 0 == me
  messages = [
    {
      authorId: 0,
      name: 'Я',
      body: 'Дратуйте!',
      date: '2021-02-28T01:44:16'
    },
    {
      authorId: 0,
      name: 'Я',
      body: 'Я новичёк!',
      date: '2021-02-28T01:44:19'
    },
    {
      authorId: 1,
      name: 'Серый пони',
      body: 'Привет новичёк!',
      date: '2021-02-28T01:44:19'
    },
    {
      authorId: 0,
      name: 'Я',
      body: 'Дратуйте!',
      date: '2021-02-28T01:44:16'
    },
    {
      authorId: 0,
      name: 'Я',
      body: 'Я новичёк!',
      date: '2021-02-28T01:44:19'
    },
    {
      authorId: 1,
      name: 'Серый пони',
      body: 'Привет новичёк!',
      date: '2021-02-28T01:44:19'
    },
    {
      authorId: 0,
      name: 'Я',
      body: 'Дратуйте!',
      date: '2021-02-28T01:44:16'
    },
    {
      authorId: 0,
      name: 'Я',
      body: 'Я новичёк!',
      date: '2021-02-28T01:44:19'
    },
    {
      authorId: 1,
      name: 'Серый пони',
      body: 'Привет новичёк!',
      date: '2021-02-28T01:44:19'
    },
    {
      authorId: 0,
      name: 'Я',
      body: 'Дратуйте!',
      date: '2021-02-28T01:44:16'
    },
    {
      authorId: 0,
      name: 'Я',
      body: 'Я новичёк!',
      date: '2021-02-28T01:44:19'
    },
    {
      authorId: 1,
      name: 'Серый пони',
      body: 'Привет новичёк!',
      date: '2021-02-28T01:44:19'
    },
    {
      authorId: 0,
      name: 'Я',
      body: 'Дратуйте!',
      date: '2021-02-28T01:44:16'
    },
    {
      authorId: 0,
      name: 'Я',
      body: 'Я новичёк!',
      date: '2021-02-28T01:44:19'
    },
    {
      authorId: 1,
      name: 'Серый пони',
      body: 'Привет новичёк!',
      date: '2021-02-28T01:44:19'
    },
    {
      authorId: 0,
      name: 'Я',
      body: 'Дратуйте!',
      date: '2021-02-28T01:44:16'
    },
    {
      authorId: 0,
      name: 'Я',
      body: 'Я новичёк!',
      date: '2021-02-28T01:44:19'
    },
    {
      authorId: 1,
      name: 'Серый пони',
      body: 'Привет новичёк!',
      date: '2021-02-28T01:44:19'
    },
    {
      authorId: 0,
      name: 'Я',
      body: 'Дратуйте!',
      date: '2021-02-28T01:44:16'
    },
    {
      authorId: 0,
      name: 'Я',
      body: 'Я новичёк!',
      date: '2021-02-28T01:44:19'
    },
    {
      authorId: 1,
      name: 'Серый пони',
      body: 'Привет новичёк!',
      date: '2021-02-28T01:44:19'
    },
    {
      authorId: 0,
      name: 'Я',
      body: 'Дратуйте!',
      date: '2021-02-28T01:44:16'
    },
    {
      authorId: 0,
      name: 'Я',
      body: 'Я новичёк!',
      date: '2021-02-28T01:44:19'
    },
    {
      authorId: 1,
      name: 'Серый пони',
      body: 'Привет новичёк!',
      date: '2021-02-28T01:44:19'
    },
    {
      authorId: 0,
      name: 'Я',
      body: 'Дратуйте!',
      date: '2021-02-28T01:44:16'
    },
    {
      authorId: 0,
      name: 'Я',
      body: 'Я новичёк!',
      date: '2021-02-28T01:44:19'
    },
    {
      authorId: 1,
      name: 'Серый пони',
      body: 'Привет новичёк!',
      date: '2021-02-28T01:44:19'
    },
    {
      authorId: 0,
      name: 'Я',
      body: 'Дратуйте!',
      date: '2021-02-28T01:44:16'
    },
    {
      authorId: 0,
      name: 'Я',
      body: 'Я новичёк!',
      date: '2021-02-28T01:44:19'
    },
    {
      authorId: 1,
      name: 'Серый пони',
      body: 'Привет новичёк!',
      date: '2021-02-28T01:44:19'
    },
    {
      authorId: 0,
      name: 'Я',
      body: 'Дратуйте!',
      date: '2021-02-28T01:44:16'
    },
    {
      authorId: 0,
      name: 'Я',
      body: 'Я новичёк!',
      date: '2021-02-28T01:44:19'
    },
    {
      authorId: 1,
      name: 'Серый пони',
      body: 'Привет новичёк!',
      date: '2021-02-28T01:44:19'
    }

  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
