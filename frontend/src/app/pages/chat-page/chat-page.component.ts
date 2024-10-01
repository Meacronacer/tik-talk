import { Component } from '@angular/core';
import { SvgIconComponent } from '../../shared/components/ui/svg-icon/svg-icon.component';
import { ChatUserComponent } from "./chat-user/chat-user.component";
import { ProfileInputComponent } from "../profile-page/profile-input/profile-input.component";

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [SvgIconComponent, ChatUserComponent, ProfileInputComponent],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.scss'
})
export class ChatPageComponent {

}
