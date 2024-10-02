import { Component, Input, OnInit } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() icon?: string;
  @Input() type: 'button' | 'submit' = 'button';
  @Input() size: 'small' | 'default' | 'big' = 'default';
  @Input() variant: 'default' | 'secondary' = 'default';

  public class: string | string[] = '';

  public styles = {
    base: 'h-[44px] border-[1px] flex items-center gap-x-2 text-[14px] leading-[171%] font-extrabold transition-colors',
    size: {
      default: 'px-[20px]',
      small: 'px-[14px]',
      big: 'w-full',
    },
    variants: {
      default:
        'border-[#000] bg-[#ae7aff] text-[#000] hover:bg-[#000] hover:text-white hover:border-white ',
      secondary: 'hover:bg-red-400 ',
    },
  };

  ngOnInit(): void {
    this.class = [
      this.styles.base,
      this.styles.size[this.size],
      this.styles.variants[this.variant],
    ].join(' ');
  }
}
