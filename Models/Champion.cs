namespace LoldleClone.Models;

public class Champion
{
    public virtual string? Name { get; set; }
    public virtual string? ImageUrl { get; set; }
    public virtual string? Gender { get; set; }
    public virtual List<string>? Positions { get; set; }
    public virtual List<string>? Species { get; set; }
    public virtual string? Resource { get; set; }
    public virtual List<string>? RangeTypes { get; set; }
    public virtual List<string>? Regions { get; set; }
    public virtual DateOnly? ReleaseDate { get; set; }
    public virtual List<string>? Styles { get; set; }
}
