import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortalDirective } from '@angular/cdk/portal';

@Component({
  selector: 'panel-dropdown',
  templateUrl: './panel-dropdown.component.html',
  styleUrls: ['./panel-dropdown.component.scss']
})
export class PanelDropdownComponent {

  protected overlayRef: OverlayRef;
 
  public opened = false;

  @Input()
  public reference: HTMLElement;
 
  @ViewChild(TemplatePortalDirective, {static: true})
  public contentTemplate: TemplatePortalDirective;

  constructor(protected overlay: Overlay) {}
 
 public open() {
    this.overlayRef = this.overlay.create(this.getOverlayConfig());
    this.overlayRef.attach(this.contentTemplate);
    this.syncWidth();
    this.overlayRef.backdropClick().subscribe(() => this.close());
    this.opened = true;
  }

  public close() {
    this.overlayRef.detach();
    this.opened = false;
  }

  @HostListener('window:resize')
  public onWinResize() {
    this.syncWidth();
  }

  protected getOverlayConfig(): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(this.reference)
      .withPush(false)
      .withPositions([{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      }, {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
      }]);

    const scrollStrategy = this.overlay.scrollStrategies.reposition();

    return new OverlayConfig({
      positionStrategy: positionStrategy,
      scrollStrategy: scrollStrategy,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop'
    });
  }

  private syncWidth() {
    if (!this.overlayRef) {
      return;
    }

    const refRect = this.reference.getBoundingClientRect();
    this.overlayRef.updateSize({ width: refRect.width });
  }

}
