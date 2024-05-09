import { HttpException, Inject, Injectable } from '@nestjs/common';
import {
  CreateUserDTO,
  LoginResponse,
  LoginUserDTO,
} from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { User } from 'src/models/user.model';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: typeof User,
    private jwtAuthService: JwtService,
  ) {}

  async register(userObject: CreateUserDTO): Promise<LoginResponse> {
    try {
      const { password } = userObject;
      const saltRounds = 10;
      const plainToHash = await bcrypt.hash(password, saltRounds);
      userObject = { ...userObject, password: plainToHash };
      const user = await this.userRepository.create(userObject);

      const payload = { id: user.id, name: user.name };
      const token = this.jwtAuthService.sign(payload);

      return {
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        token,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async login(userData: LoginUserDTO): Promise<LoginResponse> {
    const { email, password } = userData;
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
    });
    if (!user) throw new HttpException('USER_NOT_FOUND', 404);

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) throw new HttpException('PASSWORD_INCORRECT', 403);

    const payload = { id: user.id, name: user.name };
    const token = this.jwtAuthService.sign(payload);

    const data: LoginResponse = {
      email: user.email,
      name: user.name,
      lastname: user.lastname,
      token,
    };

    return data;
  }
}
