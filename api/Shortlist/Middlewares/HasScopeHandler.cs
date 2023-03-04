using Microsoft.AspNetCore.Authorization;
using Services;

namespace Middlewares;

public class HasScopeHandler : AuthorizationHandler<HasScopeRequirement>{

    protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, HasScopeRequirement requirement){
        
        if (context.User.HasClaim(c => c.Type == "scope" && c.Issuer == requirement.Issuer))
            return Task.CompletedTask;

        var scopes = context.User.FindFirst(c => c.Type == "scope" && c.Issuer == requirement.Issuer)?.Value.Split(' ');

        if (scopes is not null && scopes.Any(s => s == requirement.Scope))
            context.Succeed(requirement);

        return Task.CompletedTask;

    }

}
