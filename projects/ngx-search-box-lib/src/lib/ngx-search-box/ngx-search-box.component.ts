import { 
  Component, 
  OnInit, 
  Input, 
  ViewChild, 
  ElementRef, 
  EventEmitter,
  Output } from '@angular/core';

import { PanelDropdownComponent } from '../panel-dropdown/panel-dropdown.component';

@Component({
  selector: 'ngx-searchbox',
  templateUrl: './ngx-search-box.component.html',
  styleUrls: ['./ngx-search-box.component.scss']
})
export class NgxSearchBoxComponent implements OnInit {

  value = ''; 

  opened: Boolean;

  @Input() placeholder: string;
  @Input() disabled = false;
  @Input() appearance = 'outline';

  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  @Output() clear: EventEmitter<void> = new EventEmitter<void>();
  
  @ViewChild('input', {static: true})
  public input: ElementRef;

  @ViewChild(PanelDropdownComponent, {static: true})
  public dropdown: PanelDropdownComponent;

  constructor() { }

  ngOnInit() {
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }

  handleSearch($event) {
    console.log('handleSearch', this.value);
    this.stopPropagation(event);
    this.search.emit(this.value);
  }

  open() {
    if (this.dropdown.opened) {
      this.close();    
    }else{
      this.dropdown.open();
    }
    this.opened = this.dropdown.opened;
  }

  close(){
    this.dropdown.close();
    this.opened = this.dropdown.opened;
  }

  clearSearch(): void {
    this.value = '';
    this.clear.emit();
  }

}
