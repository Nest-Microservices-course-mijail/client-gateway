import { Controller, Post, Inject, Get, Body } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { NATS_SERVICE } from '../config/services';
import { firstValueFrom } from 'rxjs';
import { LoginUserDto, RegisterUserDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post('register')
  async registerUser(@Body() registerUserDto: RegisterUserDto) {
    try {
      const order = await firstValueFrom(
        this.client.send('auth.register.user', registerUserDto),
      );
      return order;
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Post('login')
  async loginUser(@Body() loginUserDto: LoginUserDto) {
    try {
      const order = await firstValueFrom(
        this.client.send('auth.login.user', loginUserDto),
      );
      return order;
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Get('verify')
  async verifyUser() {
    try {
      const order = await firstValueFrom(
        this.client.send('auth.verify.user', ''),
      );
      return order;
    } catch (error) {
      throw new RpcException(error);
    }
  }
}
