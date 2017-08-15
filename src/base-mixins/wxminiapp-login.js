
/*
*   The wxminiapp-login mixin:
*   - defines the `loginWithWxCode` methods, porcelain for
*     calling the `login` ddp methods
*/

import {onLogin} from "../common/login-method";

/*
*   Public methods
*/

export function loginWithWxCode ({code}) {
    const loginParameters = {
        code
    };
    return this.call("login", loginParameters).then(onLogin.bind(this));
}
