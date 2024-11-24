import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Post()
  createProduct() {
    return 'crea un prodcuto';
  }

  @Get()
  findAllProducts() {
    return 'esta funcion retorna varios productos';
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
