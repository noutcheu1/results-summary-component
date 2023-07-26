import { Component, OnInit } from '@angular/core';
import { faEye, faBolt, faBrain, faMessage} from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FMentorP';
  visual = faEye;
  reaction=faBolt;
  memory = faBrain;
  verbal = faMessage;
  visual_value: number = 0;
  verbal_value: number = 0;
  memory_value: number = 0;
  reaction_value: number = 0;
  url : string = "./assets/data.json";
  list_of_value : any;

  constructor(private http_api : HttpClient){}

  ngOnInit(){
    
    this.http_api.get(this.url).subscribe(result =>{
      
      this.list_of_value = result;
      this.initValue(this.list_of_value);

      
    },
    error => {
      console.log(error);
    }
    );
  
   
  }
  
  public initValue(list_of_value: any): void  {
    
    this.visual_value = this.list_of_value[0]["score"];
    this.verbal_value = this.list_of_value[1]["score"];
    this.memory_value = this.list_of_value[2]["score"];
    this.reaction_value = this.list_of_value[3]["score"];
  
  }
}
