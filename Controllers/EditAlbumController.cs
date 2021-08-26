using FeildenCleggBradley_Studios.Models.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace FeildenCleggBradley_Studios.Controllers
{
    public class EditAlbumController : Controller
    {
        public IActionResult Index()
        {
             
            return View();
        }
        public async Task<IActionResult> EditAlbums()
        {
            var albums = new List<Album>();
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://jsonplaceholder.typicode.com/users/");
                var response = await client.GetAsync("1/albums");        
                var result = await response.Content.ReadAsStringAsync();           
                albums = JsonConvert.DeserializeObject<List<Album>>(result);
            }
            return View(albums);
        } 
        public async Task<bool> EditPost(string value)
        {
            if (value != null)
                return true;

            return false;
        }
    }
}
