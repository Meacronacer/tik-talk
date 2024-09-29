import { Component } from '@angular/core';
import { SvgIconComponent } from '../../../shared/components/ui/svg-icon/svg-icon.component';
import { ProfileCommentComponent } from "../profile-comment/profile-comment.component";
import { ProfileInputComponent } from "../profile-input/profile-input.component";

@Component({
  selector: 'app-profile-post',
  standalone: true,
  imports: [SvgIconComponent, ProfileCommentComponent, ProfileInputComponent],
  templateUrl: './profile-post.component.html',
  styleUrl: './profile-post.component.scss'
})
export class ProfilePostComponent {
  public showComments: boolean = false


  showCommentsToggle() {
    this.showComments = !this.showComments
  }
}
