using Dominio.Services;
using Dominio.Usuarios;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

/*
    AllowAnonymous – Permite acesso anônimo, sem autenticação alguma a página.
    Authorize – Requer que o usuário esteja autenticado, mas não se importa com seu perfil.
    Authorize(Roles=”Role1,Role2”) – Exige que o usuário além de autenticado, faça parte de um dos perfis listados. Note que se quiser restringir por mais de um perfil, basta utilizar “,” para separá-los.
 */


namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        [HttpPost]
        [Route("login")]
        public async Task<ActionResult<dynamic>> Authenticate([FromBody] Usuario model)
        {
            Autenticacao obj = new Autenticacao();
            // Recupera o usuário
            var user = await Task.Run(() => obj.Get(model.Username, model.Password));

            // Verifica se o usuário existe
            if (user == null)
                return NotFound(new { message = "Usuário ou senha inválidos" });

            // Gera o Token
            var token = TokenService.GenerateToken(user);

            // Oculta a senha
            user.Password = "";

            // Retorna os dados
            return await Task.Run(() => new
            {
                user = user,
                token = token
            });
        }
    }

  
}
