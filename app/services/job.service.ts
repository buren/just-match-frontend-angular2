import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Job } from './job';

@Injectable()
export class JobService {
  private jobsUrl = 'http://localhost:3003/api/v1/jobs';  // URL to web api

  constructor(private http: Http) { }


  getJobs(): Promise<Job[]> {
    return this.http.get(this.jobsUrl)
               .toPromise()
               .then(response => this.transformJobsData(response.json().data))
               .catch(this.handleError);
  }

  private transformJobsData(data: any) {
    return data.map((jobData) => {
      let attributes = jobData.attributes;
      const id = jobData.id;
      attributes.id = id;

      let job: Job = attributes;
      return job;
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
