using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

using SISLottery.Draw;
using Microsoft.Extensions.Logging;

namespace WebApp
{
    public class Startup
    {
        IConfigurationRoot _config = null;


        ///Used to configure the HTTP Pipeline
        public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
        {
            app.UseMiddleware<ErrorLoggingMiddleware>();
           app.UseMvc();
           //For some reason, this only works if specified before UseStaticFiles.
           app.UseDefaultFiles();
           app.UseStaticFiles();

           loggerFactory.AddConsole();

        }

        public Startup(IHostingEnvironment env)
        {
           var builder = new ConfigurationBuilder()
            .SetBasePath(env.ContentRootPath)
            .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);
            _config = builder.Build();
        }

        ///Used to add services to the app.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();

            //Add the main services
            services.AddScoped<IDrawService, DrawService>();
            //For the purposes of this exercise, the repo is a singleton so that we can keep the draws in memory between requests.
            services.AddSingleton<IDrawRepository, DrawRepository>();



        }
    }
}