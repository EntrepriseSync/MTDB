/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Movie } from "@prisma/client";

export class MovieServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MovieCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.MovieCountArgs>
  ): Promise<number> {
    return this.prisma.movie.count(args);
  }

  async findMany<T extends Prisma.MovieFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MovieFindManyArgs>
  ): Promise<Movie[]> {
    return this.prisma.movie.findMany(args);
  }
  async findOne<T extends Prisma.MovieFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MovieFindUniqueArgs>
  ): Promise<Movie | null> {
    return this.prisma.movie.findUnique(args);
  }
  async create<T extends Prisma.MovieCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MovieCreateArgs>
  ): Promise<Movie> {
    return this.prisma.movie.create<T>(args);
  }
  async update<T extends Prisma.MovieUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MovieUpdateArgs>
  ): Promise<Movie> {
    return this.prisma.movie.update<T>(args);
  }
  async delete<T extends Prisma.MovieDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MovieDeleteArgs>
  ): Promise<Movie> {
    return this.prisma.movie.delete(args);
  }
}
