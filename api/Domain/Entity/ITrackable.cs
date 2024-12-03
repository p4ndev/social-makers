namespace Domain.Entity;

public interface ITrackable{
    DateTime    CreatedAt   { get; set; }
    DateTime?   ModifiedAt  { get; set; }
}
