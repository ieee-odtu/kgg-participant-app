

export const KEY_USER = 'user';


/*eslint-disable */
const tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
/*eslitn-enable */
export function validateEmail(email) {
    if (!email) {
        return false;
    }

    if (email.length > 254) {
        return false;
    }

    const valid = tester.test(email);
    if (!valid) {
        return false;
    }

    // Further checking of some things regex can't handle
    const parts = email.split('@');
    if (parts[0].length > 64) {
        return false;
    }

    const domainParts = parts[1].split('.');
    if (domainParts.some(part => part.length > 63)) {
        return false;
    }

    return true;
}

/**
 *
 *
 * @export
 * @param {Component} screen
 * @param {string} target
 * @param {Object} params
 */
export function resetTo(screen, target, params) {

    screen.props.navigation.dispatch({
        type: 'Navigation/RESET',
        index: 0,
        actions: [{ type: 'Navigation/NAVIGATE', routeName: target, params }],
    });
}