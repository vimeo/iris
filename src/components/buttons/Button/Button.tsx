import React from 'react';

import {
  ButtonStyled,
  ButtonChildren,
  borderRadiusSizes,
} from './Button.style';
import { Props, DOMElement } from './Button.types';
import { FeaturedIcon } from './FeaturedIcon';

// Iris submodule organization needs to be reconsidered.
// This creates a circular dependency.
// import { LoaderCircular } from '../../../motion';
import { LoaderCircular } from '../../../motion/LoaderCircular/LoaderCircular';

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
  'components/buttons/Button/Button'
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
  const iconAction = iconPosition === 'action' && icon;

  const radius = pill ? 50 : borderRadiusSizes[size] + 2;

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
      {iconAction}

      {loading && (
        <LoaderCircular
          size={size}
          format="adaptive"
          style={centered}
        />
      )}

      <Focus parent={ButtonStyled} radius={radius} />
    </ButtonStyled>
  );
}
