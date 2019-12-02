//@flow
import React, { Fragment } from 'react';
import './style.scss';
import { withi18n } from '/connectors';
import { Icon } from 'semantic-ui-react';
type ValidIndicatorType = {
    t?: function, // i18n
    state: string,
};
/**
 *
 * @param state {string} indicates the current validating state
 * @param message {string} message to be display
 *
 */
const ValidIndicator = ({ t, state }: ValidIndicatorType) => {
    if (!state) return <div> {state}</div>;
    else
        return (
            <div className={`validIndicator-${state}`}>
                {state === 'valid' && (
                    <Fragment>
                        <Icon color="green" name="check" /> <span>{t('Form.valid')}</span>
                    </Fragment>
                )}

                {state === 'error' && (
                    <Fragment>
                        <Icon color="red" name="warning sign" /> <span>{t('Errors.addressLength')}</span>
                    </Fragment>
                )}

                {state === 'loading' && (
                    <Fragment>
                        <Icon color="orange" loading name="spinner" /> <span>{t('Form.loading')}</span>
                    </Fragment>
                )}
            </div>
        );
};

ValidIndicator.defaultProps = {
    state: '',
};

export default withi18n(ValidIndicator);
