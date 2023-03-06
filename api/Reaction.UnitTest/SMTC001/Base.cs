using Microsoft.Extensions.Logging;
using Reaction.Controllers;
using Moq;

namespace SMTC001;

public abstract class Base{

    protected const int FAKE_PRODUCT_ID = 300;
    protected readonly ReactionController _sut;

    public Base(){
        var mlo = new Mock<ILogger<ReactionController>>();
        _sut = new ReactionController(mlo.Object);
    }

}