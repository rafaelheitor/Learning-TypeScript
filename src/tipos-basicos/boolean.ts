let estaAtivo: boolean

function verificaStatusUsuario(status: boolean) :string{
    if(status){
        return `O usuário está ativo`
    }else {
        return `O usuário não está ativo`
    }
}