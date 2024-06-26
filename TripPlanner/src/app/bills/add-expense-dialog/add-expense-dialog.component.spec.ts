import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-expense-dialog',
  templateUrl: './add-expense-dialog.component.html',
  styleUrls: ['./add-expense-dialog.component.scss'],
})
export class AddExpenseDialogComponent {
  paidBy: string[] = [];
  paidTo: string[] = [];
  amount: number;
  description: string;

  constructor(
    public dialogRef: MatDialogRef<AddExpenseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data.expense) {
      this.paidBy = data.expense.paidBy || [];
      this.paidTo = data.expense.paidTo || [];
      this.amount = data.expense.amount;
      this.description = data.expense.description;
    } else {
      this.amount = 0;
      this.description = '';
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onAddClick(): void {
    this.dialogRef.close({ paidBy: this.paidBy, paidTo: this.paidTo, amount: this.amount, description: this.description });
  }
}