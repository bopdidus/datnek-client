import { Component, OnInit, Input, Inject, Output, EventEmitter  } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {  Validators, FormBuilder } from '@angular/forms';
import { Language} from '../language';
import { DataService } from '../data.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-main-cmp',
  templateUrl: './main-cmp.component.html',
  styleUrls: ['./main-cmp.component.css'],
  providers: [DataService]
})
export class MainCmpComponent implements OnInit {
//this variable allows me to take information form app-component
  @Input() currentLanguage: string;
  //this variable is for sending information about the state of dialog
  @Output() newDialogEvent = new EventEmitter<boolean>();

  formLang;
  langs:[any];
  taille= 0;
  constructor(public dialog: MatDialog, private formBuilder: FormBuilder, private dataService: DataService) {
    this.formLang = this.formBuilder.group({
      choice: [Validators.required],
      speak: [Validators.required],
      write: [Validators.required],
      comp: [Validators.required],
    });

   }

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any)=>{
      console.log(data);
      this.langs = data;
    });
    this.taille = this.langs.length;
  }

  stateDialof(value: boolean) {
    
  }

  openDialog(): void {
    this.newDialogEvent.emit(true);
    const dialogRef = this.dialog.open(DialogItem, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.newDialogEvent.emit(false);
      //this.animal = result;
    });
  }

  onSubmit(frm){
    // we create the json boject before sending
  
    let obj = JSON.parse('{"name": "'+frm.choice+'","speakingLevel": "'+ frm.speak+'","writingLevel":"'+ frm.write +'", "comprehension":"'+ frm.comp+'"}');

    this.dataService.addLanguage(obj).subscribe((data: any)=>{
      console.log(data);
      this.langs = data;
    })
  }
}

@Component({
  selector: 'dialog-item',
  templateUrl: 'dialog-item.html',
})
export class DialogItem {

  constructor(
    public dialogRef: MatDialogRef<DialogItem>,
    @Inject(MAT_DIALOG_DATA) public data: String) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}