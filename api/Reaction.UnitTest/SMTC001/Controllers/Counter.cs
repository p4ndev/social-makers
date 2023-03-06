using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SMTC001.Controllers;

public sealed class Counter : Base{

    [Theory]
    [InlineData(0)]
    [InlineData(null)]
    [InlineData(-300)]
    public void ModelValidation(int? projectId)
        => Assert.NotNull(
            _sut.Counter(projectId).Result as BadRequestResult
        );

    [Fact]
    public void FakeProduct(){

        ActionResult? res = _sut.Counter(FAKE_PRODUCT_ID).Result;
        Assert.NotNull(res);

        var scr = res as StatusCodeResult;
        Assert.NotNull(scr);

        Assert.Equal(
            scr!.StatusCode,
            StatusCodes.Status406NotAcceptable
        );

    }

}
