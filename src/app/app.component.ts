import { Component } from '@angular/core';
import { faEye, faBolt, faBrain, faMessage} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FMentorP';
  visual = faEye;
  reaction=faBolt;
  memory = faBrain
  verbal = faMessage

}
