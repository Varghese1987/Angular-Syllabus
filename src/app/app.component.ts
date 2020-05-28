import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TopicModelComponent } from './topic-model/topic-model.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayList:"";
  days = [];

      addDay(){
        let temp = 0;
        temp = this.days.length+1;
        let dayObj = {
          dayId: temp,
          topics:[]
        };
        this.days.push(dayObj);
        // console.log(this.days)
        document.getElementById("addTopic").hidden = false;
      }
      deleteDay(day){
        this.days.splice(day,1);
        // console.log(day)
      }
  
  constructor(private modalService: NgbModal) { }
  day = 1;
  selectDay(daySelected){
    this.day = daySelected;
    this.displayList = this.days[this.day-1].topics;
    console.log(this.displayList)
  }
  

  viewTopicModel() {
    console.log(this.day)
        
    const modalRef = this.modalService.open(TopicModelComponent);
    modalRef.componentInstance.id = this.day;

    modalRef.result.then((result) => {
      console.log(result);
      this.days[this.day-1].topics.push(result);
      //let currentDayObj = this.days.find(day = )
      //console.log(this.days)
    }).catch((error) => {
      console.log(error);
    });
  }
    
  }
