import { ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, OnInit, Output, ViewChild, OnDestroy, ElementRef, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { debounceTime, skip } from 'rxjs/operators';


@Component({
  selector: 'app-ngx-search-box',
  templateUrl: './ngx-search-box.component.html',
  styleUrls: ['./ngx-search-box.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxSearchBoxComponent),
      multi: true
    }
  ]
})
export class NgxSearchBoxComponent implements OnInit, ControlValueAccessor, OnDestroy {

  value: any;
  private overlayRef: OverlayRef;  

  @ViewChild(MatInput) input: MatInput;

  /**
   * showUnderline?: boolean
   * Sets if the input underline should be visible. Defaults to 'false'.
   */
  @Input() showUnderline = false;

  /**
   * debounce?: number
   * Debounce timeout between keypresses. Defaults to 400.
   */
  @Input() debounce = 400;

  /**
   * placeholder?: string
   * Placeholder for the underlying input component.
   */
  @Input() placeholder: string;

  @Input() clearIcon = 'close';

  /**
   * searchDebounce: function($event)
   * Event emitted after the [debounce] timeout.
   */
  @Output() searchDebounceEvent: EventEmitter<string> = new EventEmitter<string>();

  /**
   * search: function($event)
   * Event emitted after the key enter has been pressed.
   */
  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();

  /**
   * clear: function()
   * Event emitted after the clear icon has been clicked.
   */
  @Output() clearEvent: EventEmitter<void> = new EventEmitter<void>();

  /**
   * blur: function()
   * Event emitted after the blur event has been called in underlying input.
   */
  @Output() blurEvent: EventEmitter<void> = new EventEmitter<void>();

  // constructor(private changeDetectorRef: ChangeDetectorRef) {}

  constructor(private changeDetectorRef: ChangeDetectorRef,
    private host: ElementRef<HTMLInputElement>,  
    private ngControl: NgControl,  
    private vcr: ViewContainerRef,  
    private overlay: Overlay) {}

  ngOnDestroy() {
    this.closeInfoOverlay();
  }

  openInfoOverlay(param: ParameterDescriptor, relative: MatButton, template: TemplateRef<any>) {
    this.closeInfoOverlay();

    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().flexibleConnectedTo(relative._elementRef).withPositions([{
        overlayX: 'end',
        overlayY: 'bottom',
        originX: 'center',
        originY: 'top'
      }]).withPush().withViewportMargin(30).withDefaultOffsetX(37).withDefaultOffsetY(-10),
      scrollStrategy: this.overlay.scrollStrategies.close(),
      hasBackdrop: true,
      backdropClass: 'info-backdrop'
    });
    this.overlayRef.backdropClick().subscribe(() => this.closeInfoOverlay());

    const portal = new TemplatePortal(template, this.viewContainerRef);
    this.overlayRef.attach(portal);
  }

  closeInfoOverlay() {
    if (this.overlayRef) {
      this.overlayRef.detach();
      this.overlayRef.dispose();
      this.overlayRef = null;
    }

  ngOnInit(): void {
    this.input.ngControl.valueChanges.pipe(
      debounceTime(this.debounce),
      skip(1), // skip first change when value is set to undefined
    ).subscribe((value: string) => {
      this._searchTermChanged(value);
    });
  }

  /**
   * Method to focus to underlying input.
   */
  focus(): void {
    this.input.focus();
  }

  handleBlur(): void {
    this.blurEvent.emit(undefined);
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }

  handleSearch(event: Event): void {
    this.stopPropagation(event);
    this.searchEvent.emit(this.value);
  }

  /**
   * Method to clear the underlying input.
   */
  clear(): void {
    this.value = '';
    this.changeDetectorRef.markForCheck();
    this.clearEvent.emit(undefined);
  }

  private _searchTermChanged(value: string): void {
    this.searchDebounceEvent.emit(value);
  }

  writeValue(obj: any): void {
    this.value = obj;
    this.changeDetectorRef.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChange = (_: any) => () => {};
  onTouched = () => () => {};

}
