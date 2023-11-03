import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MovieModuleBase } from "./base/movie.module.base";
import { MovieService } from "./movie.service";
import { MovieController } from "./movie.controller";

@Module({
  imports: [MovieModuleBase, forwardRef(() => AuthModule)],
  controllers: [MovieController],
  providers: [MovieService],
  exports: [MovieService],
})
export class MovieModule {}
