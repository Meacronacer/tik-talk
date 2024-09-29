import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() type: 'button' | 'submit' = 'button';
  @Input() size: 'small' | 'default' | 'big' = 'default';
  @Input() variant: 'default' | 'secondary' = 'default';

  public class: string | string[] = '';

  public styles = {
    base: 'h-[44px] py-[10px] px-[20px] text-[14px] leading-[171%] font-bold transition-colors',
    size: {
      default: 'w-[440px]',
      small: '',
      big: '',
    },
    variants: {
      default:
        'border-[1px] border-[#000] bg-[#ae7aff] text-[#000] hover:bg-[#000] hover:text-white hover:border-white ',
      secondary: '',
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
