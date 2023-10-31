using LoldleClone.Models;

namespace LoldleClone.Services;

public class ChampionService : IChampionService
{
    public ChampionService()
    {
    }

    public virtual async Task<Champion> GuessChampion(string championName)
    {
        return new Champion()
        {
            Name = "Nick",
            Gender = "Male",
            Positions = new List<string>() { "Top", "Jungle" },
            Species = new List<string>() { "Human" },
            Resource = "Mana",
            RangeTypes = new List<string>() { "Melee" },
            Regions = new List<string>() { "Ionia" },
            ReleaseDate = new DateOnly(2014, 1, 1),
        };
    }
}
