import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReceitasController } from './receitas/receitas.controller';
import { ReceitasService } from 'src/receitas/receitas.entity';
import { Receita } from './receitas/receitas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Receita])],
  controllers: [ReceitasController],
  providers: [ReceitasService],
})
export class AppModule {}

