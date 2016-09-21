import { Component, Input } from '@angular/core';
import { Job } from './../models/job';

@Component({
  selector: 'job-card',
  styles: [`
    .job-card {
      padding: 10px;
      border: 1px solid #000;
      display: inline-block;
      border-radius: 2px;
      max-width: 300px;
      height: 300px;
      vertical-align: top;
      margin: 20px;
    }
  `],
  template: `
  <div class="job-card">
    <img src="http://placehold.it/50x50" alt="{{job.name}} logo"/>
    <h2>{{job.name}}</h2>
    <div>800 SEK | {{job.hours}} | 100 SEK/h</div>
    <p>{{job.description}}</p>
  </div>
  `
})

export class JobCardComponent {
  @Input()
  job: Job;
}
