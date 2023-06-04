using Microsoft.EntityFrameworkCore;
using Teste.Models;

public class DataContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        // optionsBuilder.UseMySQL("server=sql10.freesqldatabase.com;database=sql10623437;user=sql10623437;password=IVRD7jRiN9");
        optionsBuilder.UseMySQL("Server=sql10.freesqldatabase.com; port=3306; User ID=sql10623437;Password=IVRD7jRiN9;Database=sql10623437");
    }

    public DbSet<Usuario> Usuarios { get; set; }



    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {

    }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {

    }
}