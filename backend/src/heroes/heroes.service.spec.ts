import { Test, TestingModule } from '@nestjs/testing';
import { HeroesService } from './heroes.service';
import { Hero } from './entity/hero.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('HeroesService', () => {
  let service: HeroesService;

  const mockHeroesRepository = {
    find: jest.fn(),
    create: jest.fn().mockImplementation((dto) => {
      return { id: 1, createdAt: new Date(), ...dto }; // Ensure the returned object includes id and createdAt
    }),
    save: jest.fn().mockImplementation((hero) => {
      return Promise.resolve({ id: 1, createdAt: new Date(), ...hero }); // Ensure the returned object includes id and createdAt
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HeroesService,
        {
          provide: getRepositoryToken(Hero),
          useValue: mockHeroesRepository,
        },
      ],
    }).compile();

    service = module.get<HeroesService>(HeroesService);
    // heroesRepository = module.get<Repository<Hero>>(getRepositoryToken(Hero));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of heroes', async () => {
    const result = [new Hero(), new Hero()];
    mockHeroesRepository.find.mockResolvedValue(result); // Directly mock the find method

    expect(await service.findAll()).toBe(result);
  });

  it('should create and return a hero', async () => {
    expect(
      await service.create({
        name: 'The Code Alchemist',
        superpower: 'Transforms legacy code into efficient solutions',
        humility: 5,
      }),
    ).toMatchObject({
      id: expect.any(Number),
      name: 'The Code Alchemist',
      superpower: 'Transforms legacy code into efficient solutions',
      humility: 5,
      createdAt: expect.any(Date),
    });
  });
});
