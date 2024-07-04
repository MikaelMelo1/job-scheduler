import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';
import { JobService } from './job.service';
import { JobScheduler } from './job.scheduler';

@Module({
  imports: [ScheduleModule.forRoot(), HttpModule],
  providers: [JobService, JobScheduler],
})
export class JobModule { }
