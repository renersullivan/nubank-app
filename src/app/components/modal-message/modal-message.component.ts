import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.scss'],
})
export class ModalMessageComponent implements OnInit {
  @Input() model_title: string;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async closeModel(): Promise<void> {
    const close: string = 'Modal Removed';
    await this.modalController.dismiss(close);
  }
}
