import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormControlName,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent implements OnInit {
  @Input() type: 'text' | 'password' = 'text';
  @Input() size: 'small' | 'default' | 'big' = 'default';
  @Input() variant: 'default' | 'secondary' = 'default';
  @Input() control!: FormControl;
  
  public class: string | string[] = '';

  public styles = {
    base: 'h-[44px] py-[12px]',
    size: {
      default: 'w-[440px]',
      small: '',
      big: '',
    },
    variants: {
      default: 'px-5 bg-[#000] border-[1px] border-white rounded-[2px]',
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
