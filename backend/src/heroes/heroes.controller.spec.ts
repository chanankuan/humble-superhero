import { Hero } from './entity/hero.entity';
import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('CatsController', () => {
  let controller: HeroesController;

  const mockHeroesService = {
    findAll: jest.fn().mockResolvedValue([new Hero()]),
    create: jest.fn((dto) => ({ id: 1, createdAt: new Date(), ...dto })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HeroesController],
      providers: [HeroesService],
    })
      .overrideProvider(HeroesService)
      .useValue(mockHeroesService)
      .compile();

    controller = module.get<HeroesController>(HeroesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should fetch a return a list of superheroes', async () => {
    await expect(controller.findAll()).resolves.toEqual([new Hero()]);
  });

  it('should create and return a superhero', async () => {
    const newHeroDto = {
      name: 'The Code Alchemist',
      superpower: 'Transforms legacy code into efficient solutions',
      humility: 10,
    };

    await expect(controller.create(newHeroDto)).resolves.toMatchObject({
      id: expect.any(Number),
      createdAt: expect.any(Date), // Check if `createdAt` is a Date
      ...newHeroDto,
    });
  });
});
