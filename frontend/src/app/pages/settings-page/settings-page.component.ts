import { Component } from '@angular/core';
import { ProfileInputComponent } from '../profile-page/profile-input/profile-input.component';
import { SvgIconComponent } from '../../shared/components/ui/svg-icon/svg-icon.component';
import { ButtonComponent } from '../../shared/components/ui/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [
    ProfileInputComponent,
    SvgIconComponent,
    ButtonComponent,
    RouterLink,
  ],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.scss',
})
export class SettingsPageComponent {
  onFileDrop() {}
}
