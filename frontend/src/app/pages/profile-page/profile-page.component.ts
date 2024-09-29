import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/components/ui/button/button.component";
import { SvgIconComponent } from '../../shared/components/ui/svg-icon/svg-icon.component';
import { InputComponent } from "../../shared/components/ui/input/input.component";
import { ProfilePostComponent } from "./profile-post/profile-post.component";
import { ProfileInputComponent } from "./profile-input/profile-input.component";

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [ButtonComponent, SvgIconComponent, InputComponent, ProfilePostComponent, ProfileInputComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {

}
