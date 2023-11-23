import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  onCreate() {
    this.openPopup(0, 'Create associate');
  }

  openPopup(code: number, title: string) {
    this.dialog.open(AddComponent, {
      width: '400px',
      enterAnimationDuration: 200,
      exitAnimationDuration: 200,
      data: {
        code,
        title,
      },
    });
  }
}
