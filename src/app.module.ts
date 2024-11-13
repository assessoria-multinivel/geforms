import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FormulariosModule } from './formularios/formularios.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    FormulariosModule,
  ],
})
export class AppModule {}
