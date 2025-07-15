import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button, ButtonSize, ButtonVariant } from '../../../component-library/button';

const DEFAULT_VARIANT_PRIMARY = ButtonVariant.Primary;
const DEFAULT_VARIANT_SECONDARY = ButtonVariant.Secondary;

class PageContainerFooter extends Component {
  render() {
    const {
      children,
      onCancel,
      cancelText,
      onSubmit,
      submitText,
      disabled,
      submitButtonType: typeSubmitButton = '',
      hideCancel: shouldHideCancel = false,
      cancelButtonType: typeCancelButton = '',
    } = this.props;

    const submitVariant =
      typeSubmitButton === 'confirm' ? DEFAULT_VARIANT_PRIMARY : typeSubmitButton || DEFAULT_VARIANT_PRIMARY;
    const cancelVariant =
      (typeCancelButton === '' || !shouldHideCancel) && (typeCancelButton === 'default' ? DEFAULT_VARIANT_SECONDARY : typeCancelButton);

    return (
        <div className={classnames('page-container__footer', this.props.footerClassName)}>
            <footer>
                {!shouldHideCancel && (
                    <Button
                        size={ButtonSize.Lg}
                        variant={cancelVariant}
                        className={classnames(
                            'page-container__footer-button',
                            `page-container__footer-button__cancel`,
                            this.props.footerButtonClassName
                        )}
                        onClick={(e) => onCancel(e)}
                        data-testid="page-container-footer-cancel"
                    >
                    {cancelText || this.context.t('cancel')}
                    </Button>
                )}

                <Button
                    size={ButtonSize.Lg}
                    variant={submitVariant}
                    className={classnames(
                      `page-container__footer-button`,
                      this.props.footerButtonClassName
                  )}
                  disabled={!onSubmit || disabled}
                  onClick={(e) => onSubmit?.(e)}
                  data-testid="page-container-footer-next"
                  startIconName={
                     typeof(this.props.submitIconName) !== "undefined" 
                       ? `${this.props.submitIconName}`
                       : undefined // Avoids passing undefined as prop value directly.
                   }
               >
                 {submitText ?? 
                   (typeof(this.context.t)==='function'?this.context.t('next'):'Next')
                 }
              </Button>
            </footer>

           {(children && Boolean(children)) &&
             (<div className="page-container__footer-secondary">
               {children}
             </div>)
           }
         </div>  
       );
   }
}

PageContainerFooter.propTypes = {
   children: PropTypes.node.isRequired,

   /**
     * Callback function to be called when the cancel button is clicked.
     */
   onCancel: PropTypes.func.isRequired,

   /**
     * Text content for the Cancel button label. If not provided, falls back to localized translation of "Cancel".
     */
   cancelText: PropTypes.string,

   /**
     * Custom icon name for the Submit/Confirm button's leading icon.
     */
   submitIconName:PropTypes.string,


   
   
};

PageContainerFooter.defaultProps={
    
};
