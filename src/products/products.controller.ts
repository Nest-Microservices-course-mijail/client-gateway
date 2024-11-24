import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { PRODUCT_SERVICE } from '../config';
import { ClientProxy } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(PRODUCT_SERVICE) private readonly productsClient: ClientProxy,
  ) {}

  @Post()
  createProduct() {
    return 'crea un prodcuto';
  }

  @Get()
  findAllProducts() {
    return this.productsClient.send({ cmd: 'find_all' }, {});
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return 'esta funcion retorna el producto con id ' + id;
  }

  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return 'esta funcion elimina el producto con id ' + id;
  }

  @Patch(':id')
  updateProduct(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return 'esta funcion actualiza el producto con id ' + id;
  }
}
