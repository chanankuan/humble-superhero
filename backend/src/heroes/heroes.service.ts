import { Injectable } from '@nestjs/common';

@Injectable()
export class HeroesService {
  findAll() {
    return 'This will return all superheroes';
  }

  create() {
    return 'This will create and return a superhero';
  }
}
