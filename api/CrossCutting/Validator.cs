namespace CrossCutting;

public static class Validator {

    public static void Id(int? id) {

        if (!id.HasValue || id.Value <= 0)
            throw new ArgumentNullException("No id or negative", nameof(id));

        if (id.Value.Equals(300))
            throw new ArgumentException("Fake id sent", nameof(id));

    }

    public static void Email(string? content) {

        if (String.IsNullOrEmpty(content) || String.IsNullOrWhiteSpace(content))
            throw new ArgumentNullException("No email or invalid", nameof(content));

        if (!content!.Contains("@") || !content!.Contains("."))
            throw new ArgumentException("Email isn't in a correct format", nameof(content));

    }

}