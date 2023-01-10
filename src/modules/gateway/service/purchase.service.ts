import {
  PURCHASES_MICROSERVICE_TOKEN,
  SPLURGE_PURCHASE_MICROSERVICE_URL,
  SPLURGE_SWAN_MICROSERVICE_URL,
  SWANS_MICROSERVICE_TOKEN,
} from '@modules/common/environment';
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { CreatePurchaseInput } from '../dto/input/create-purchase.input';
import { CreateSwanInput } from '../dto/input/create-swan.input';
import { UpdateSwanInput } from '../dto/input/update-swan.input';

@Injectable()
export class PurchaseService {
  constructor(private readonly httpService: HttpService) {}
  private logger: Logger = new Logger(this.constructor.name);

  async createPurchase(input: CreatePurchaseInput) {
    return lastValueFrom(
      this.httpService
        .post(`${SPLURGE_PURCHASE_MICROSERVICE_URL}/create`, input, {
          headers: { token: PURCHASES_MICROSERVICE_TOKEN },
        })
        .pipe(map((resp) => resp.data)),
    );
  }

  async getPurchases() {
    return lastValueFrom(
      this.httpService
        .get(`${SPLURGE_PURCHASE_MICROSERVICE_URL}/all`, { headers: { token: PURCHASES_MICROSERVICE_TOKEN } })
        .pipe(map((resp) => resp.data)),
    );
  }

  async getPurchase(id: string) {
    return lastValueFrom(
      this.httpService
        .get(`${SPLURGE_SWAN_MICROSERVICE_URL}/${id['id']}`, { headers: { token: SWANS_MICROSERVICE_TOKEN } })
        .pipe(map((resp) => resp.data)),
    );
  }
}
