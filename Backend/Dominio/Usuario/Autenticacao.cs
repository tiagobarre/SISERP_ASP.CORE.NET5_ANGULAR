using Servico.DAL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Usuarios
{
    public class Autenticacao
    {
        /*********************************************************************************/
        /************************** Método que converte a senha em MD5 ******************/
        /********************************************************************************/
        public async Task<string> CalculateMD5Hash(string input)
        {
            // Calcular o Hash
            MD5 md5 = await Task.Run(() => System.Security.Cryptography.MD5.Create());
            byte[] inputBytes = await Task.Run(() => System.Text.Encoding.ASCII.GetBytes(input));
            byte[] hash = await Task.Run(() => md5.ComputeHash(inputBytes));

            // Converter byte array para string hexadecimal
            StringBuilder sb = await Task.Run(() => new StringBuilder());
            for (int i = 0; i < hash.Length; i++)
            {
                await Task.Run(() => sb.Append(hash[i].ToString("X2")));
            }
            return await Task.Run(() => sb.ToString());
        }

        public async Task<Usuario> Get(string username, string password)
        {
            DAL objDAL = await Task.Run(() => new DAL());

            string Senha = await Task.Run(() => CalculateMD5Hash(password)); // Encapsulando a string Senha com o método de criptografia MD5  para enviar para a Query
            string sql = await Task.Run(() => $"select id,nome,senha,login from siserp.usuarios where login = '{username.ToUpper()}' and senha = '{Senha}' and status = '1'");
           
            DataTable dt = await Task.Run(() => objDAL.RetDataTable(sql));
            var users = new List<Usuario>();

            if (dt.Rows.Count > 0)
            {
               
                users.Add(new Usuario { 
                    Id = dt.Rows[0]["id"].ToString(), 
                    Username = dt.Rows[0]["login"].ToString(), 
                    Password = dt.Rows[0]["senha"].ToString(), 
                    Role = "manager" });
                return users.Where(x => x.Username.ToLower() == username.ToLower() && x.Password == x.Password).FirstOrDefault();
            }
            else
            {
               
                return null;
            }           
           
           
        }

    }
}
