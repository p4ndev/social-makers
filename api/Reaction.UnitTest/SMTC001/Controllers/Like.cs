using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SMTC001.Controllers;

public sealed class Like : Base{

    [Theory]
    [InlineData(0)]
    [InlineData(null)]
    [InlineData(-300)]
    public void ModelValidation(int? projectId)
        => Assert.NotNull(
            _sut.Like(projectId) as BadRequestResult
        );

    [Fact]
    public void FakeProduct(){

        IActionResult res = _sut.Like(FAKE_PRODUCT_ID);
        Assert.NotNull(res);

        var scr = res as StatusCodeResult;
        Assert.NotNull(scr);

        Assert.Equal(
            scr!.StatusCode,
            StatusCodes.Status406NotAcceptable
        );

    }

}
