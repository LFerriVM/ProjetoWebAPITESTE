using System.ComponentModel.DataAnnotations;
namespace Teste.Models;


public class teste{
    [Key]
    public int idteste { get; set; }
    public string Nome { get; set; }
}