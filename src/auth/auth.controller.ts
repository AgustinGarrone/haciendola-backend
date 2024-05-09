import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO, LoginUserDTO } from './dto/create-auth.dto';
import { User } from 'src/models/user.model';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() userObject: CreateUserDTO): Promise<User> {
    return this.authService.register(userObject);
  }

  @Post('login')
  loginUser(@Body() userData: LoginUserDTO): Promise<{
    user: User;
    token: string;
  }> {
    return this.authService.login(userData);
  }
}
