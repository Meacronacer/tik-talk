import { Component } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/ui/button/button.component";
import { SvgIconComponent } from '../../../shared/components/ui/svg-icon/svg-icon.component';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [ButtonComponent, SvgIconComponent],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.scss'
})
export class SearchItemComponent {

}
