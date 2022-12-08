import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { GatewayService } from './gateway.service';
import { Swanling } from '@schemas/moment.schema';

const mockModel = {};

describe('GatewayService', () => {
  let service: GatewayService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GatewayService],
    }).compile();

    service = module.get<GatewayService>(GatewayService);
  });

  afterEach(async () => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createTestProfile', () => {
    // it('should be a callable', () => {
    //   expect(typeof service.createTestProfile).toBe('function');
    // });
    // describe('execution', () => {
    //   it('should return the right number of data corresponding for average users', async () => {});
    // });
  });
});
