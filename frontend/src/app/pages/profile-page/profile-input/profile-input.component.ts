import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/ui/button/button.component";
import { SvgIconComponent } from '../../../shared/components/ui/svg-icon/svg-icon.component';

@Component({
  selector: 'app-profile-input',
  standalone: true,
  imports: [ButtonComponent, SvgIconComponent],
  templateUrl: './profile-input.component.html',
  styleUrl: './profile-input.component.scss'
})
export class ProfileInputComponent {
  @Input() placeholder!: string
}
