import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-billeterie',
  templateUrl: './billeterie.component.html',
  styleUrls: ['./billeterie.component.scss']
})
export class BilleterieComponent implements OnInit {

  formData: FormGroup;
  session: any;

  constructor(private api: ApiService, private fb : FormBuilder) { }


  getDate(){
    this.api.getSession().subscribe((result)=>{
        this.session = result;
    })
  };


  ngOnInit() { 
    this.formData = this.fb.group({
      email : [''],
      date  : [''],
      nom: [''],
      nbPerson: [''],
      ville: ['']
    });
    
    this.getDate()
  }





  postInfo(){
    this.api.formPost(this.formData.value).subscribe()
    }
  }



  