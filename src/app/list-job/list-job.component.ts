import { Component, OnInit } from '@angular/core';
import { Job } from '../model/job';

@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.css']
})
export class ListJobComponent implements OnInit {
  jobs!:Job[];
  constructor() { }

  ngOnInit(): void {
    this.jobs=[
      {id:1,title:"bla bla bla",location:"nahj lbok",salary:1500,description:"khedma khyr mdar"},
      {id:2,title:"bla bla bla",location:"nahj lbok",salary:1500,description:"khedma khyr mdar"},
      {id:2,title:"bla bla bla",location:"nahj lbok",salary:1500,description:"khedma khyr mdar"},
      {id:2,title:"bla bla bla",location:"nahj lbok",salary:1500,description:"khedma khyr mdar"},
      {id:2,title:"bla bla bla",location:"nahj lbok",salary:1500,description:"khedma khyr mdar"},
    ]
  }
}
