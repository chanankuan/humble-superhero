import { Module } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { HeroesController } from './heroes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hero } from './entity/hero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hero])],
  controllers: [HeroesController],
  providers: [HeroesService],
})
export class HeroesModule {}
