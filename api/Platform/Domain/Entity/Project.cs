using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Domain.Shared;
using Domain.Entity;

namespace Platform.Domain.Entity;

public class Project : IBase, ITrackable, IOwnership {

    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    public DateTime CreatedAt { get; set; }
    public string? UserId { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
    public long Inventory { get; set; }

    [ForeignKey("StatusId")]
    public int StatusId { get; set; }

    [Column(TypeName = "decimal(10,2)")]
    public decimal Price { get; set; }

    [JsonIgnore]
    public DateTime? ModifiedAt { get; set; }

    [JsonIgnore]
    public Status? Status { get; set; }

}
