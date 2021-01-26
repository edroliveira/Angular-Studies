import {
  Component,
  EventEmitter,
  Inject,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { MatTable } from "@angular/material/table";

interface Select {
  value: string;
  viewValue: string;
}

interface Person {
  name: string;
  email: string;
  tel: string;
  cpfCnpj: string;
}

const ELEMENT_DATA: Person[] = [];



@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  person: any;

  name: string;
  email: string;
  tel: string;
  cpfCnpj: string;

  dialogData: object[] = [];

  displayedColumns: string[] = [
    'name',
    'email',
    'tel',
    "cpfCnpj",
    "actions",
  ];
  dataSource = ELEMENT_DATA;

  constructor(
    private readonly _formBuilder: FormBuilder,
    public dialog: MatDialog
  ) { 
    this.person = this.dialogData;
   }

  form: FormGroup;
  @Output() step = new EventEmitter<FormGroup>();

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  ngOnInit(): void {
  }

  openDialog(): any {
    const dialogRef = this.dialog.open(PersonDialogComponent, {
      height: "400px",
      width: "60%",
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      const dialogData = result;
      console.log("dialogData: " + dialogData);
      this.addRow(result);
    });
  }

  addRow(rowObj): any {
    this.dataSource.push({
      name: rowObj.name,
      email: rowObj.email,
      tel: rowObj.tel,
      cpfCnpj: rowObj.cpfCnpj,
    });
    this.table.renderRows();
  }

}

@Component({
  selector: 'person-dialog',
  templateUrl: './person-dialog.component.html',
  styleUrls: ['./person-dialog.component.scss']
})
export class PersonDialogComponent implements OnInit {

  form: FormGroup;
  @Output() step = new EventEmitter<FormGroup>();

  maskTelCel = "(00) 00000-0000";

  maskValue = "000.000.000-00";

  selects: Select[] = [
    { value: "CPF", viewValue: "CPF" },
    { value: "CNPJ", viewValue: "CNPJ" },
  ];

  selectControl = new FormControl(this.selects[0].value);

  toggleCpfCnpj(value): any {
    if (value === "CPF") {
      this.maskValue = "000.000.000-00";
    } else {
      if (value === "CNPJ") {
        this.maskValue = "00.000.000/0000-00";
      }
    }
  }

  onSubmit(): any {
    const value = { socio: this.form.value };
    console.log(value);
  }

  constructor(
    public dialogRef: MatDialogRef<PersonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Person,
    private readonly _formBuilder: FormBuilder,
    public dialog: MatDialog
  ) { 
    this.form = new FormGroup({
      select: this.selectControl,
    });
   }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      tel: ["", [Validators.required, Validators.minLength(11)]],
      cpfCnpj: ["", [Validators.required, Validators.minLength(11)]],
    });
  }

}
