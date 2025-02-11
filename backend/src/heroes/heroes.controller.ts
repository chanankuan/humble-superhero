import { Body, Controller, Get, Post } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { Hero } from './entity/hero.entity';
import { CreateHeroDto } from './dto/create-hero.dto';

@Controller('superheroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Get()
  async findAll(): Promise<Hero[]> {
    const heroes = await this.heroesService.findAll();
    return heroes;
  }

  @Post()
  async create(@Body() createHeroDto: CreateHeroDto): Promise<Hero> {
    return await this.heroesService.create(createHeroDto);
  }
}
