import {
  Check,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('heroes')
@Check(`humility BETWEEN 1 AND 10`) // From 1 to 10
export class Hero {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 64 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  superpower: string;

  @Column({ type: 'smallint', name: 'humility' })
  humility: number;

  @CreateDateColumn({ type: 'datetime', name: 'created_at' })
  createdAt: Date;
}
