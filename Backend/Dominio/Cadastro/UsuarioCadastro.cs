using Dominio.Usuarios;
using Servico.DAL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Cadastro
{
    public class UsuarioCadastro
    {
        Autenticacao _Autentica = new Autenticacao();
       

        /*Cadastrar novo usuario*/
        public async Task<List<UsuarioCadastro>> NovoUsuario(Usuario model)
        {
            List<UsuarioCadastro> lista = await Task.Run(() => new List<UsuarioCadastro>());
            DAL objDAL = new DAL();

            if(model.Username != null && model.Password != null)
            {
                var Senha = _Autentica.CalculateMD5Hash(model.Password).Result;

                string sql = $"insert into siserp.usuarios(login, senha, nome, status) values('{model.Username}', '{Senha}', '{model.Nome}', '1')";

                await Task.Run(() => objDAL.ExecutarComandoSQL(sql));

            }

            return await Task.Run(() => lista );
        }

        /*Alterar usuario*/
        public async Task<List<UsuarioCadastro>> AlterarUsuario(Usuario model)
        {
            List<UsuarioCadastro> lista = await Task.Run(() => new List<UsuarioCadastro>());
            DAL objDAL = new DAL();

            if (model.Username != null && model.Password != null && model.Id != null)
            {
                var Senha = _Autentica.CalculateMD5Hash(model.Password).Result;

                string sql = $"update siserp.usuarios set login = '{model.Username}', senha = '{Senha}', nome = '{model.Nome}', status = '1'";

                await Task.Run(() => objDAL.ExecutarComandoSQL(sql));

            }

            return await Task.Run(() => lista);
        }

        /*Deletar usuario*/
       
        public async Task<List<UsuarioCadastro>> DeletarUsuario(Usuario model)
        {
            List<UsuarioCadastro> lista = await Task.Run(() => new List<UsuarioCadastro>());
            DAL objDAL = new DAL();

            if (model.Id != null)
            {
               string sql = $"delete from siserp.usuarios where id = '{model.Id}'";

                await Task.Run(() => objDAL.ExecutarComandoSQL(sql));

            }

            return await Task.Run(() => lista);
        }

        /*Listar todos os usuario*/
        public async Task<List<Usuario>> ListarUsuarios()
        {
            List<Usuario> lista = await Task.Run(() => new List<Usuario>());
            DAL objDAL = new DAL();

            string sql = $"select * from siserp.usuarios";
            DataTable dt = await Task.Run(() => objDAL.RetDataTable(sql));

            if(dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    Usuario item = new Usuario();

                    item.Username = dt.Rows[i]["login"].ToString();
                    item.Nome = dt.Rows[i]["nome"].ToString();
                    item.Id = dt.Rows[i]["id"].ToString();

                    lista.Add(item);
                }
            }

            return await Task.Run(() => lista);
        }

        /*Listar todos os usuario ID*/
        public async Task<List<Usuario>> ListarUsuariosID(int? id)
        {
            List<Usuario> lista = await Task.Run(() => new List<Usuario>());
            DAL objDAL = new DAL();

            string sql = $"select * from siserp.usuarios where id = '{id}'";
            DataTable dt = await Task.Run(() => objDAL.RetDataTable(sql));

            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    Usuario item = new Usuario();

                    item.Username = dt.Rows[i]["login"].ToString();
                    item.Nome = dt.Rows[i]["nome"].ToString();
                    item.Id = dt.Rows[i]["id"].ToString();

                    lista.Add(item);
                }
            }

            return await Task.Run(() => lista);
        }

    }
}
