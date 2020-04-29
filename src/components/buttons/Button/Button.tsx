import React from 'react';

import { ButtonStyled, ButtonChildren } from './Button.style';
import { FeaturedIcon } from './FeaturedIcon';
import { Props, DOMElement } from './Button.types';

import { LoaderCircular } from '../../../motion';
import {
  withIris,
  // useIrisError,
  centered,
  Focus,
  useDeprecate,
} from '../../../utils';

export const Button = withIris<DOMElement, Props>(
  ButtonComponent,
  true,
  'components/buttons/Button/Button',
);

const deprecatedProps = {
  circular:
    '@vimeo/iris: Button `circular` prop has been deprecated. Please use `pill`. `circular` will be removed in Iris 9.\n',
};

function ButtonComponent({
  element = 'button',
  children,
  fluid,
  format = 'primary',
  forwardRef,
  icon,
  iconPosition = 'left',
  loading,
  pill = false,
  size = 'md',
  status,
  theme,
  variant = 'solid',
  ...props
}: Props) {
  // const irisError = useIrisError({ format, ...props }, Button);
  useDeprecate(props, deprecatedProps);

  const iconOnly = typeof children === 'undefined' && icon;
  const iconLeft = iconPosition === 'left' && icon;
  const iconRight = iconPosition === 'right' && icon;
  const iconFeatured = iconPosition === 'featured' && icon;

  return (
    <ButtonStyled
      as={element}
      fluid={fluid}
      format={status ? status : format}
      icon={!!icon}
      iconOnly={iconOnly}
      iconPosition={iconPosition}
      $loading={loading}
      pill={pill}
      ref={forwardRef}
      size={size}
      theme={theme}
      variant={variant}
      {...props}
      // {...irisError}
    >
      {iconFeatured && <FeaturedIcon>{icon}</FeaturedIcon>}
      {iconLeft}
      {children && <ButtonChildren>{children}</ButtonChildren>}
      {iconRight}

      {loading && (
        <LoaderCircular
          size={size}
          format="adaptive"
          style={centered}
        />
      )}

      <Focus parent={ButtonStyled} radius={pill ? 50 : 6} />
    </ButtonStyled>
  );
}
