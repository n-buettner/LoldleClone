using LoldleClone.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace LoldleClone.Pages.Classic
{
    public class HomeModel : PageModel
    {
        private readonly IChampionService _championService;

        public HomeModel(IChampionService championService)
        {
            _championService = championService;
        }

        public void OnGet()
        {
        }
    }
}
