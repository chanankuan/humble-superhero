import { Module } from '@nestjs/common';
import { HeroesModule } from './heroes/heroes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hero } from './heroes/entity/hero.entity';

@Module({
  imports: [
    HeroesModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database/humble_superhero_db.sqlite',
      entities: [Hero],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
