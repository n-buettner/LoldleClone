using LoldleClone.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace LoldleClone.Controllers;

[Route("api/[controller]")]
public class ChampionController : ControllerBase
{
    private readonly IChampionService _championService;

    public ChampionController(IChampionService championService)
    {
        _championService = championService;
    }

    [HttpPost]
    public async Task<IActionResult> GuessChampion([FromBody] string championName)
    {
        var champion = await _championService.GuessChampion(championName);
        return Ok(JsonConvert.SerializeObject(champion));
    }
}
