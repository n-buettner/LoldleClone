using LoldleClone.Models;

namespace LoldleClone.Services;

public interface IChampionService
{
    Task<Champion> GuessChampion(string championName);
}
