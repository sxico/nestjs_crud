import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosController } from './produto.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://teste:zgT0GZ7841FY2QGk@cluster0.qju9v.mongodb.net/test',
    ), 
    UsersModule],
  controllers: [AppController, ProdutosController],
  providers: [AppService],
})
export class AppModule {}
