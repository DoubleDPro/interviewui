import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TextTaskService} from '../services/text-task/text-task.service';
import {TextTask} from '../model/text-task/text-task';

@Component({
  selector: 'text-task-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: 'text-task.component.html',
  styleUrl: 'text-task.component.css'
})
export class TextTaskComponent {

  constructor(private textTaskService: TextTaskService) {}

  textTaskContent = '';

  onSubmit() {
    let textTask = new TextTask(this.textTaskContent);

    console.log('Saving text task ' + textTask);

    this.textTaskService.saveTextTask(textTask).subscribe(
      () => console.log('Send to save text task')
    );
  }



}
