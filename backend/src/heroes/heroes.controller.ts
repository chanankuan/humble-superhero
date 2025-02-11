import { Controller, Get, Post } from '@nestjs/common';
import { HeroesService } from './heroes.service';

@Controller('superheroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Get()
  findAll() {
    return this.heroesService.findAll();
  }

  @Post()
  create() {
    return this.heroesService.create();
  }
}
