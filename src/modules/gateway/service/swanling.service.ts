import { SPLURGE_SWANLING_MICROSERVICE_URL, SWANLINGS_MICROSERVICE_TOKEN } from '@modules/common/environment';
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { CreateSwanlingInput } from '../dto/input/create-swanling.input';
import { UpdateSwanlingInput } from '../dto/input/update-swanling.input';

@Injectable()
export class SwanlingService {
  constructor(private readonly httpService: HttpService) {}
  private logger: Logger = new Logger(this.constructor.name);

  async createSwanling(input: CreateSwanlingInput) {
    return lastValueFrom(
      this.httpService
        .post(`${SPLURGE_SWANLING_MICROSERVICE_URL}/create`, input, {
          headers: { token: SWANLINGS_MICROSERVICE_TOKEN },
        })
        .pipe(map((resp) => resp.data)),
    );
  }

  async updateSwanling(id: string, input: UpdateSwanlingInput) {
    return lastValueFrom(
      this.httpService
        .patch(`${SPLURGE_SWANLING_MICROSERVICE_URL}/update/${id['id']}`, input, {
          headers: { token: SWANLINGS_MICROSERVICE_TOKEN },
        })
        .pipe(map((resp) => resp.data)),
    );
  }

  async getSwanlings() {
    return lastValueFrom(
      this.httpService
        .get(`${SPLURGE_SWANLING_MICROSERVICE_URL}/all`, { headers: { token: SWANLINGS_MICROSERVICE_TOKEN } })
        .pipe(map((resp) => resp.data)),
    );
  }

  async getSwanling(id: string) {
    return lastValueFrom(
      this.httpService
        .get(`${SPLURGE_SWANLING_MICROSERVICE_URL}/${id['id']}`, { headers: { token: SWANLINGS_MICROSERVICE_TOKEN } })
        .pipe(map((resp) => resp.data)),
    );
  }
}
