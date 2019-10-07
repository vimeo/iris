import { rem } from 'polished';
import { ButtonColors } from './ButtonColors';

export const ButtonStyleSettings = {
  Formats: {
    alternative: {
      active: {
        backgroundColor: ButtonColors.AlternativeBackgroundActive,
      },
      default: {
        color: ButtonColors.LightText,
        borderColor: ButtonColors.AlternativeBackground,
        backgroundColor: ButtonColors.AlternativeBackground,
      },
      hover: {
        color: ButtonColors.LightText,
        borderColor: ButtonColors.AlternativeBackgroundHover,
        backgroundColor: ButtonColors.AlternativeBackgroundHover,
      },
    },

    alternativeOutline: {
      active: {
        backgroundColor: ButtonColors.AlternativeBackgroundActive,
      },
      default: {
        color: ButtonColors.AlternativeBackground,
        borderColor: ButtonColors.AlternativeBackground,
        backgroundColor: ButtonColors.Transparent,
      },
      hover: {
        color: ButtonColors.AlternativeBackground,
        borderColor: ButtonColors.AlternativeBackground,
        backgroundColor: ButtonColors.AlternativeOutlineHover,
      },
    },

    secondaryDark: {
      active: {
        backgroundColor: ButtonColors.SecondaryDarkBackgroundActive,
      },
      default: {
        color: ButtonColors.LightText,
        borderColor: ButtonColors.SecondaryDarkBackground,
        backgroundColor: ButtonColors.SecondaryDarkBackground,
      },
      hover: {
        color: ButtonColors.LightText,
        borderColor: ButtonColors.SecondaryDarkBackgroundHover,
        backgroundColor: ButtonColors.SecondaryDarkBackgroundHover,
      },
    },

    lightTransparent: {
      active: {
        color: ButtonColors.LightText,
        borderColor: ButtonColors.Transparent,
        backgroundColor:
          ButtonColors.LightTransparentBackgroundActive,
      },

      default: {
        color: ButtonColors.LightText,
        borderColor: ButtonColors.Transparent,
        backgroundColor: ButtonColors.LightTransparentBackground,
      },

      hover: {
        color: ButtonColors.LightText,
        borderColor: ButtonColors.Transparent,
        backgroundColor: ButtonColors.LightTransparentBackgroundHover,
      },
    },

    lightTextOnly: {
      active: {
        color: ButtonColors.LightText,
        borderColor: ButtonColors.Transparent,
        backgroundColor:
          ButtonColors.LightTransparentBackgroundActive,
      },

      default: {
        color: ButtonColors.LightText,
        borderColor: ButtonColors.Transparent,
        backgroundColor: ButtonColors.Transparent,
      },

      hover: {
        color: ButtonColors.LightText,
        borderColor: ButtonColors.Transparent,
        backgroundColor: ButtonColors.LightTransparentBackgroundHover,
      },
    },

    primary: {
      active: {
        backgroundColor: ButtonColors.PrimaryBackgroundActive,
      },
      default: {
        color: ButtonColors.LightText,
        borderColor: ButtonColors.PrimaryBackground,
        backgroundColor: ButtonColors.PrimaryBackground,
      },
      hover: {
        color: ButtonColors.LightText,
        borderColor: ButtonColors.PrimaryBackgroundHover,
        backgroundColor: ButtonColors.PrimaryBackgroundHover,
      },
      disabled: {
        color: ButtonColors.PrimaryDisabledText,
        borderColor: ButtonColors.PrimaryDisabledBackground,
        backgroundColor: ButtonColors.PrimaryDisabledBackground,
      },
    },

    primaryDark: {
      active: {
        backgroundColor: ButtonColors.PrimaryDarkBackgroundActive,
      },
      default: {
        color: ButtonColors.LightText,
        borderColor: ButtonColors.PrimaryDarkBackground,
        backgroundColor: ButtonColors.PrimaryDarkBackground,
      },
      hover: {
        color: ButtonColors.LightText,
        borderColor: ButtonColors.PrimaryDarkBackgroundHover,
        backgroundColor: ButtonColors.PrimaryDarkBackgroundHover,
      },
      disabled: {
        color: ButtonColors.PrimaryDisabledText,
        borderColor: ButtonColors.PrimaryDisabledBackground,
        backgroundColor: ButtonColors.PrimaryDisabledBackground,
      },
    },

    primaryOutline: {
      active: {
        backgroundColor: ButtonColors.PrimaryBackgroundActive,
      },
      default: {
        // #a11y: contrast ratio of 4.5:1
        // color: darken(0.124, ButtonColors.PrimaryBackground),
        color: ButtonColors.PrimaryBackground,
        borderColor: ButtonColors.PrimaryBackground,
        backgroundColor: ButtonColors.Transparent,
      },
      hover: {
        // #a11y: contrast ratio of 4.5:1
        // color: darken(0.124, ButtonColors.PrimaryBackground),
        color: ButtonColors.PrimaryBackground,
        borderColor: ButtonColors.PrimaryBackground,
        backgroundColor: ButtonColors.PrimaryOutlineHover,
      },
    },

    primaryTextOnly: {
      active: {
        backgroundColor: ButtonColors.PrimaryBackgroundActive,
      },
      default: {
        color: ButtonColors.PrimaryBackground,
        borderColor: ButtonColors.Transparent,
        backgroundColor: ButtonColors.Transparent,
      },
      hover: {
        color: ButtonColors.LightText,
        borderColor: ButtonColors.PrimaryBackgroundHover,
        backgroundColor: ButtonColors.PrimaryBackgroundHover,
      },
    },

    secondary: {
      active: {
        backgroundColor: ButtonColors.SecondaryBackgroundActive,
      },
      default: {
        color: ButtonColors.SecondaryText,
        borderColor: ButtonColors.SecondaryBackground,
        backgroundColor: ButtonColors.SecondaryBackground,
      },
      hover: {
        color: ButtonColors.SecondaryText,
        borderColor: ButtonColors.SecondaryBackgroundHover,
        backgroundColor: ButtonColors.SecondaryBackgroundHover,
      },
    },

    secondaryTextOnly: {
      active: {
        backgroundColor: ButtonColors.SecondaryBackgroundActive,
      },
      default: {
        color: ButtonColors.SecondaryText,
        borderColor: ButtonColors.Transparent,
        backgroundColor: ButtonColors.Transparent,
      },
      hover: {
        color: ButtonColors.SecondaryText,
        borderColor: ButtonColors.SecondaryBackground,
        backgroundColor: ButtonColors.SecondaryBackground,
      },
    },

    secondaryOutline: {
      active: {
        backgroundColor: ButtonColors.SecondaryBackgroundActive,
      },
      default: {
        color: ButtonColors.SecondaryOutlineText,
        borderColor: ButtonColors.SecondaryOutlineText,
        backgroundColor: ButtonColors.Transparent,
      },
      hover: {
        color: ButtonColors.AlternativeBackground,
        borderColor: ButtonColors.AlternativeBackground,
        backgroundColor: ButtonColors.AlternativeOutlineHover,
      },
    },

    success: {
      active: {
        backgroundColor: ButtonColors.SuccessBackgroundActive,
      },
      default: {
        color: ButtonColors.LightText,
        borderColor: ButtonColors.SuccessBackground,
        backgroundColor: ButtonColors.SuccessBackground,
      },
      hover: {
        color: ButtonColors.LightText,
        borderColor: ButtonColors.SuccessBackgroundHover,
        backgroundColor: ButtonColors.SuccessBackgroundHover,
      },
    },

    successOutline: {
      active: {
        backgroundColor: ButtonColors.SuccessBackgroundActive,
      },
      default: {
        color: ButtonColors.SuccessBackground,
        borderColor: ButtonColors.SuccessBackground,
        backgroundColor: ButtonColors.Transparent,
      },
      hover: {
        color: ButtonColors.SuccessBackground,
        borderColor: ButtonColors.SuccessBackground,
        backgroundColor: ButtonColors.SuccessOutlineHover,
      },
    },

    warning: {
      active: {
        backgroundColor: ButtonColors.WarningBackgroundActive,
      },
      default: {
        color: ButtonColors.LightText,
        borderColor: ButtonColors.WarningBackground,
        backgroundColor: ButtonColors.WarningBackground,
      },
      hover: {
        color: ButtonColors.LightText,
        borderColor: ButtonColors.WarningBackgroundHover,
        backgroundColor: ButtonColors.WarningBackgroundHover,
      },
    },

    warningOutline: {
      active: {
        backgroundColor: ButtonColors.WarningBackgroundActive,
      },
      default: {
        color: ButtonColors.WarningBackground,
        borderColor: ButtonColors.WarningBackground,
        backgroundColor: ButtonColors.Transparent,
      },
      hover: {
        color: ButtonColors.WarningBackground,
        borderColor: ButtonColors.WarningBackground,
        backgroundColor: ButtonColors.WarningOutlineHover,
      },
    },

    warningTextOnly: {
      active: {
        backgroundColor: ButtonColors.WarningBackgroundActive,
      },
      default: {
        color: ButtonColors.WarningBackground,
        borderColor: ButtonColors.Transparent,
        backgroundColor: ButtonColors.Transparent,
      },
      hover: {
        color: ButtonColors.LightText,
        borderColor: ButtonColors.WarningBackground,
        backgroundColor: ButtonColors.WarningBackground,
      },
    },
  },

  IconSizes: {
    xl: 24,
    lg: 18,
    md: 16,
    sm: 14,
    xs: 10,
  },

  Sizes: {
    xl: {
      fontSize: rem(16),
      lineHeight: 58 / 16,
      minWidth: rem(112),
      minHeight: rem(60),
      padding: `0 ${rem(24)}`,
    },
    lg: {
      fontSize: rem(16),
      lineHeight: 46 / 16,
      minWidth: rem(112),
      minHeight: rem(48),
      padding: `0 ${rem(24)}`,
    },

    md: {
      fontSize: rem(14),
      lineHeight: 38 / 14,
      minWidth: rem(84),
      minHeight: rem(39),
      padding: `0 ${rem(16)}`,
    },

    sm: {
      fontSize: rem(14),
      lineHeight: 30 / 14,
      minWidth: rem(68),
      minHeight: rem(32),
      padding: `0 ${rem(10)}`,
    },

    xs: {
      fontSize: rem(12),
      lineHeight: 23 / 12,
      minWidth: rem(48),
      minHeight: rem(24),
      padding: `0 ${rem(6)}`,
    },
  },
};
