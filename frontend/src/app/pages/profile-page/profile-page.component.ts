import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/components/ui/button/button.component";

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {

}
