using Dominio.Cadastro;
using Dominio.Usuarios;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CadUsuarioController : ControllerBase
    {
        // GET: api/<CadUsuarioController>
        [HttpGet]
        [Authorize]
        public async Task<ActionResult<IEnumerable<Usuario>>> Get()
        {
           
          return await Task.Run(() => new UsuarioCadastro().ListarUsuarios());
        }

        // GET api/<CadUsuarioController>/5
        [HttpGet("{id}")]
        [Authorize]
        public async Task<ActionResult<IEnumerable<Usuario>>> Get(int? id)
        {
                  
            return await Task.Run(() => new UsuarioCadastro().ListarUsuariosID(id));

        }

        // POST api/<CadUsuarioController>
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Post([FromBody] Usuario model)
        {
            UsuarioCadastro obj = new UsuarioCadastro();

            try
            {
                await Task.Run(() => obj.NovoUsuario(model));

                return Ok("Usuario cadastrado com sucesso");
            }
            catch (Exception ex)
            {

                return BadRequest($"Erro: {ex}");
            }
            
           
        }

        // PUT api/<CadUsuarioController>/5
        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> Put(int id, [FromBody] Usuario model)
        {
            UsuarioCadastro obj = new UsuarioCadastro();

            try
            {
                await Task.Run(() => obj.AlterarUsuario(model));

                return Ok("Usuario alterado com sucesso");
            }
            catch (Exception ex)
            {

                return BadRequest($"Erro: {ex}");
            }
        }

        // DELETE api/<CadUsuarioController>/5
        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> Delete(Usuario model)
        {
            UsuarioCadastro obj = new UsuarioCadastro();

            try
            {
                await Task.Run(() => obj.DeletarUsuario(model));

                return Ok("Usuario deletado com sucesso!");
            }
            catch (Exception ex)
            {

                return BadRequest($"Erro: {ex}");
            }
        }
    }
}
