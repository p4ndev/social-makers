
namespace SMTC001.Services;

public sealed class Validation : Base{

    [Theory]
    [InlineData(0)]
    [InlineData(null)]
    [InlineData(-300)]
    public void Model(int? projectId)
            => Assert.Throws<ArgumentNullException>(
                () => _sut.ValidateModel(projectId)
            );

    [Fact]
    public void Fake()
        => Assert.Throws<ArgumentException>(
            () => _sut.ValidateModel(FAKE_PRODUCT_ID)
        );

}
