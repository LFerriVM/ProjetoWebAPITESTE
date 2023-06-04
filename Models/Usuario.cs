using System.ComponentModel.DataAnnotations;
namespace Teste.Models;


public class Usuario{
    [Key]
    public int idUsuario { get; set; }
    public string nome { get; set; }
    public string email { get; set; }
    public string cpf { get; set; }
    public DateTime dataNascimento { get; set; }
}