import { SPLURGE_SWAN_MICROSERVICE_URL, SWANS_MICROSERVICE_TOKEN } from '@modules/common/environment';
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { CreateSwanInput } from '../dto/input/create-swan.input';
import { UpdateSwanInput } from '../dto/input/update-swan.input';

@Injectable()
export class SwanService {
  constructor(private readonly httpService: HttpService) {}
  private logger: Logger = new Logger(this.constructor.name);

  async createSwan(input: CreateSwanInput) {
    return lastValueFrom(
      this.httpService
        .post(`${SPLURGE_SWAN_MICROSERVICE_URL}/create`, input, { headers: { token: SWANS_MICROSERVICE_TOKEN } })
        .pipe(map((resp) => resp.data)),
    );
  }

  async updateSwan(id: string, input: UpdateSwanInput) {
    return lastValueFrom(
      this.httpService
        .patch(`${SPLURGE_SWAN_MICROSERVICE_URL}/update/${id['id']}`, input, {
          headers: { token: SWANS_MICROSERVICE_TOKEN },
        })
        .pipe(map((resp) => resp.data)),
    );
  }

  async getSwans() {
    return lastValueFrom(
      this.httpService
        .get(`${SPLURGE_SWAN_MICROSERVICE_URL}/all`, { headers: { token: SWANS_MICROSERVICE_TOKEN } })
        .pipe(map((resp) => resp.data)),
    );
  }

  async getSwan(id: string) {
    return lastValueFrom(
      this.httpService
        .get(`${SPLURGE_SWAN_MICROSERVICE_URL}/${id['id']}`, { headers: { token: SWANS_MICROSERVICE_TOKEN } })
        .pipe(map((resp) => resp.data)),
    );
  }
}
