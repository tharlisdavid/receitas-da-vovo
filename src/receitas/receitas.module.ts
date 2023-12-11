import { Module } from '@nestjs/common';
import { ReceitasController } from './receitas.controller';

@Module({
  controllers: [ReceitasController],
})
export class ReceitasModule {}
