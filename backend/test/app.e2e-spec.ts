import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { Hero } from 'src/heroes/entity/hero.entity';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/superheroes (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/superheroes')
      .expect(200)
      .expect([new Hero()]);
  });

  it('/api/superheroes (POST)', () => {
    return request(app.getHttpServer())
      .post('/api/superheroes')
      .expect(201)
      .expect(new Hero());
  });

  afterAll(async () => {
    await app.close();
  });
});
