
using System.IO;
using Microsoft.AspNetCore.Hosting;


namespace WebApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            
            
            var host = new WebHostBuilder()
                .UseKestrel()
               //Makes sure that files are looked up from the source root, not the runtime root.
                .UseContentRoot(Directory.GetCurrentDirectory())
                //Define the directory where all static content is served from.
                .UseWebRoot(Directory.GetCurrentDirectory()+"/public")
                .UseStartup<Startup>()
                .Build();
            
            host.Run();
        }
    }
}
