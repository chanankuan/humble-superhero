import { Body, Controller, Get, Post } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { Hero } from './entity/hero.entity';
import { CreateHeroDto } from './dto/create-hero.dto';

@Controller('superheroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Get()
  findAll(): Promise<Hero[]> {
    return this.heroesService.findAll();
  }

  @Post()
  create(@Body() createHeroDto: CreateHeroDto): Promise<Hero> {
    return this.heroesService.create(createHeroDto);
  }
}
