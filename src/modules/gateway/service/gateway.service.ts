import { SPLURGE_SWANLING_MICROSERVICE_URL } from '@modules/common/environment';
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class GatewayService {
  constructor(private readonly httpService: HttpService) {}
  private logger: Logger = new Logger(this.constructor.name);

  async checkSwanlingHealth() {
    return lastValueFrom(
      this.httpService.get(`${SPLURGE_SWANLING_MICROSERVICE_URL}/health-check`).pipe(map((resp) => resp.data)),
    );
  }
}
