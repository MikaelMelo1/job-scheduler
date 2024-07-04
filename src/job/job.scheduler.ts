import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { JobService } from './job.service';

@Injectable()
export class JobScheduler {
    constructor(private readonly jobService: JobService) { }

    @Cron(CronExpression.EVERY_MINUTE)
    async handleCron() {
        console.log('Fetching jobs every 1 minute...');
        await this.jobService.fetchJobs();
    }
}
