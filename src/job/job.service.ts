import { HttpService } from '@nestjs/axios';
import { Injectable, HttpServer } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class JobService {
    constructor(private readonly httpService: HttpService) { }

    async fetchJobs() {
        const url = 'https://motor-vagas-production.up.railway.app/job';
        const body = {
            locations: ["brazil"],
            keyword: "Desenvolvedor Júnior"
        };

        try {
            const response = await firstValueFrom(this.httpService.post(url, body));
            console.log('Fetched jobs:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching jobs:', error);
            throw error;
        }
    }
}
