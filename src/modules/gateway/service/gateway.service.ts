import {
  PURCHASES_MICROSERVICE_TOKEN,
  SPLURGE_PURCHASE_MICROSERVICE_URL,
  SPLURGE_SWANLING_MICROSERVICE_URL,
  SPLURGE_SWAN_MICROSERVICE_URL,
  SWANLINGS_MICROSERVICE_TOKEN,
  SWANS_MICROSERVICE_TOKEN,
} from '@modules/common/environment';
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class GatewayService {
  constructor(private readonly httpService: HttpService) {}
  private logger: Logger = new Logger(this.constructor.name);

  async checkSwanlingHealth() {
    return lastValueFrom(
      this.httpService
        .get(`${SPLURGE_SWANLING_MICROSERVICE_URL}/health-check`, { headers: { token: SWANLINGS_MICROSERVICE_TOKEN } })
        .pipe(map((resp) => resp.data)),
    );
  }

  async checkSwanHealth() {
    return lastValueFrom(
      this.httpService
        .get(`${SPLURGE_SWAN_MICROSERVICE_URL}/health-check`, { headers: { token: SWANS_MICROSERVICE_TOKEN } })
        .pipe(map((resp) => resp.data)),
    );
  }

  async checkPurchaseHealth() {
    return lastValueFrom(
      this.httpService
        .get(`${SPLURGE_PURCHASE_MICROSERVICE_URL}/health-check`, { headers: { token: PURCHASES_MICROSERVICE_TOKEN } })
        .pipe(map((resp) => resp.data)),
    );
  }
}
