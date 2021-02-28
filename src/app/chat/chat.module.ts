import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ChatBodyComponent } from './components/chat-body/chat-body.component';
import { ChatHistoryComponent } from './components/chat-history/chat-history.component';
import { ChatHistoryElementComponent } from './components/chat-history-element/chat-history-element.component';


@NgModule({
  declarations: [ChatComponent, ChatListComponent, ChatBodyComponent, ChatHistoryComponent, ChatHistoryElementComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    MegaMenuModule,
    ScrollPanelModule
  ]
})
export class ChatModule { }
