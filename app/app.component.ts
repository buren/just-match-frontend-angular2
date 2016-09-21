import { Component, OnInit } from '@angular/core';


import { Job } from './models/job';
import { JobService } from './services/job.service';

@Component({
  selector: 'just-match-app',
  styles: [`
    .job-cards {
    }
  `],
  template: `
    <h1>{{title}}</h1>
    <div class="job-cards">
      <job-card [job]="job" *ngFor="let job of jobs"></job-card>
    </div>
  `,
  providers: [JobService]
})

export class AppComponent implements OnInit {
  title = 'Just Match Angular 2 spike';
  jobs: Job[];

  constructor(private jobService: JobService) { }

  getJobs(): void {
    this.jobService.getJobs().then(jobs => this.jobs = jobs);
  }

  ngOnInit(): void {
    this.getJobs();
  }
}
