import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { JobService } from './job.service';

@Injectable()
export class JobScheduler {
  constructor(private readonly jobService: JobService) {}

  @Cron(CronExpression.EVERY_12_HOURS)
  async handleCron() {
    console.log('Fetching jobs every 12 hours...');
    await this.jobService.fetchJobs();
  }
}
