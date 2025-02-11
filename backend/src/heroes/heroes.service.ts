import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hero } from './entity/hero.entity';
import { CreateHeroDto } from './dto/create-hero.dto';

@Injectable()
export class HeroesService {
  constructor(
    @InjectRepository(Hero)
    private readonly heroesRepository: Repository<Hero>,
  ) {}

  async findAll(): Promise<Hero[]> {
    const heroes = await this.heroesRepository.find({
      // Sort by humility score DESC and name ASC
      order: { humility: 'DESC', name: 'ASC' },
    });
    return heroes;
  }

  async create(createHeroDto: CreateHeroDto) {
    // Create a new instance
    const hero = new Hero();

    // Assign incoming data
    hero.name = createHeroDto.name;
    hero.superpower = createHeroDto.superpower;
    hero.humility = createHeroDto.humility;

    // Save object
    return await this.heroesRepository.save(hero);
  }
}
