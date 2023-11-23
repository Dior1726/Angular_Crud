import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  title = 'Create';

  isEdit = false;

  dialogData: any;

  constructor(
    private builder: FormBuilder,
    private ref: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { code: number; title: string }
  ) {}

  ngOnInit(): void {
    this.dialogData = this.data;
    this.title = this.data.title;
  }

  associateForm = this.builder.group({
    id: this.builder.control(0),
    name: this.builder.control('', Validators.required),
    email: this.builder.control(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    phone: this.builder.control('', Validators.required),
    address: this.builder.control('', Validators.required),
    type: this.builder.control('Customer'),
    group: this.builder.control('level-1'),
    status: this.builder.control(true),
  });

  onSubmit(event: Event) {
    event.preventDefault();
  }

  onClose() {
    this.ref.close();
  }
}
