import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UsersModule, 
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite', // Nome do arquivo que será criado na raiz
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Cria as tabelas automaticamente baseado nas suas entities
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
