import React, { useRef } from 'react';

import { ButtonStyled, ButtonChildren } from './Button.style';
import { Props, DOMElement } from './Button.types';
import { borderRadii } from './Button.config';
import { FeaturedIcon } from './FeaturedIcon';

// Iris submodule organization needs to be reconsidered.
// This creates a circular dependency.
// import { LoaderCircular } from '../../../motion';
import { LoaderCircular } from '../LoaderCircular/LoaderCircular';

import {
  withIris,
  // useIrisError,
  centered,
  Focus,
  useDeprecate,
  mergeRefs,
} from '../../utils';

export const Button = withIris<DOMElement, Props>(
  ButtonComponent,
  true,
  'components/Button/Button'
);

const deprecatedProps = {
  circular:
    '@vimeo/iris: Button `circular` prop has been deprecated. Please use `pill`. `circular` will be removed in Iris 9.\n',
};

function ButtonComponent({
  element = 'button',
  children,
  color,
  fluid,
  format = 'primary',
  forwardRef,
  icon,
  iconPosition = 'left',
  loading,
  pill = false,
  size = 'md',
  status,
  textShift = false,
  theme,
  type,
  variant = 'solid',
  onClick,
  ...props
}: Props) {
  // const irisError = useIrisError({ format, ...props }, Button);
  useDeprecate(props, deprecatedProps);
  const buttonRef = useRef(null);

  const iconOnly = typeof children === 'undefined' && icon;
  const iconLeft = iconPosition === 'left' && icon;
  const iconRight = iconPosition === 'right' && icon;
  const iconFeatured = iconPosition === 'featured' && icon;
  const iconAction = iconPosition === 'action' && icon;

  const radius = pill ? 50 : borderRadii[size] + 2;

  let formatInstrinsic: Props['format'] | Props['status'] = format;
  if (status && status !== 'neutral') formatInstrinsic = status;

  return (
    <ButtonStyled
      as={element}
      color={color}
      fluid={fluid}
      format={formatInstrinsic}
      icon={!!icon}
      iconOnly={iconOnly}
      iconPosition={iconPosition}
      $loading={loading}
      pill={pill}
      ref={mergeRefs([buttonRef, forwardRef])}
      size={size}
      textShift={textShift}
      theme={theme}
      type={type}
      variant={variant}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        //Safari Button Focus Fix
        buttonRef?.current?.focus();

        if (onClick) {
          onClick(event);
        }
      }}
      {...props}
      // {...irisError}
    >
      {iconFeatured && (
        <FeaturedIcon size={size}>{icon}</FeaturedIcon>
      )}
      {iconLeft}
      {children && (
        <ButtonChildren size={size}>{children}</ButtonChildren>
      )}
      {iconRight}
      {iconAction}

      {loading && (
        <LoaderCircular
          size={size}
          format="adaptive"
          style={centered}
        />
      )}

      <Focus parent={ButtonStyled} radius={radius} isKeyboardOnly />
    </ButtonStyled>
  );
}
