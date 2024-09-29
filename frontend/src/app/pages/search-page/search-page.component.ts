import { Component } from '@angular/core';
import { SvgIconComponent } from '../../shared/components/ui/svg-icon/svg-icon.component';
import { SearchItemComponent } from "./search-item/search-item.component";

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [SvgIconComponent, SearchItemComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {

}
