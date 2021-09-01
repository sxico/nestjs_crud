import { Body, Controller, Get, Param, Post } from "@nestjs/common";

@Controller('produtos')
export class ProdutosController {

    @Get()
    obterTodos(): string {
        return "Todos os Itens"
    }

    @Get(':id')
    obterUm(@Param() params): string {
        return `O ID enviado foi ${params.id}`
    }

    @Post()
    criar(@Body() novoObjeto): string {
        console.log(novoObjeto)
        return `Objeto criado com sucesso!`
    }
}