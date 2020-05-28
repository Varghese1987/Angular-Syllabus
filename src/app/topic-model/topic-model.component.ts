import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-topic-model',
  templateUrl: './topic-model.component.html',
  styleUrls: ['./topic-model.component.css']
})
export class TopicModelComponent{

  @Input("id") id;
  myForm: FormGroup;

    constructor(
      public activeModal: NgbActiveModal,
      private formBuilder: FormBuilder
      ) {
        this.createForm();
      }
      private createForm() {
        this.myForm = this.formBuilder.group({
          title: '',
          type: '',
          content:'',
          instructions:''
        });
      }
      
      submitForm(){
        this.activeModal.close(this.myForm.value);
        
      }
    }