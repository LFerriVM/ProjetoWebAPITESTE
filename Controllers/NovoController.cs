using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MySql.Data.MySqlClient;
using Teste.Models;
namespace Teste.Controllers;


[ApiController]
[Route("[controller]/[action]")]
public class NovoController : ControllerBase
{

    private DataContext _db;
    public NovoController(DataContext db)
    {
        _db = db;
    }
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    [HttpGet]
    public IEnumerable<WeatherForecast> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }

    [HttpGet]
    public IEnumerable<WeatherForecast> Teste()
    {
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            TemperatureC = Random.Shared.Next(0, 0),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }

    [HttpPost]
    public ActionResult Teste(Usuario usuario){
        _db.Usuarios.Add(usuario);
        _db.SaveChanges();
        return Ok();
    }

    [HttpGet]
    public IEnumerable<Usuario> banco(){
        var usuarios = _db.Usuarios.AsNoTracking().ToArray();
        return(usuarios);
    }

    [HttpPost]
    public void banco(Usuario usuario){
        _db.Usuarios.Add(usuario);
        _db.SaveChanges();
    }
}

