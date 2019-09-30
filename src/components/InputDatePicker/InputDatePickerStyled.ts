import styled from 'styled-components';
import { rem } from 'polished';
import { typeCSSByProps } from '../../legacy';
import { InputStyleSettings } from '../InputText/InputHelpers';
import * as COLORS from '../../color';

export const DatePickerWrapperStyled = styled.div`
    padding: .5rem;

    // these globals are namespaced by the styled component transformation on this element

    // Copied from https://github.com/YouCanBookMe/react-datetime/blob/master/css/react-datetime.css
        // with some improvements to flex with the bounding element

    .rdt {
        position: relative;
    }

    .rdtPicker {
        ${typeCSSByProps({
          format: 'dark',
          size: 'md',
        })}

        position: relative;

        min-width: ${rem(240)};
        margin-bottom: 0;
        padding: 0;
    }

    .rdtOpen .rdtPicker {
        display: flex;

        justify-content: center;
    }

    .rdtDays {
        display: flex;

        flex-grow: 1;
    }

    .rdtStatic .rdtPicker {
        position: static;

        box-shadow: none;
    }

    .rdtPicker .rdtTimeToggle {
        text-align: center;
    }

    .rdtPicker table {
        width: 100%;
        margin: 0;
    }

    .rdtPicker td,
    .rdtPicker th {
        height: ${rem(28)};

        text-align: center;
    }

    .rdtPicker td {
        padding: ${rem(5) + ' ' + rem(6)};

        cursor: pointer;

        &.rdtDay {
            border-radius: ${rem(3)};
        }
    }

    .rdtHour:hover,
    .rdtMinute:hover,
    .rdtSecond:hover,
    .rdtTimeToggle:hover {
        color: ${COLORS.VimeoBlue};

        cursor: pointer;
    }

    .rdtOld,
    .rdtNew {
        color: ${COLORS.Plaster};
    }

    .rdtDay:hover {
        color: ${COLORS.VimeoBlue};
        background: ${COLORS.Foam};
    }

    .rdtActive.rdtDay {
        position: relative;

        color: ${COLORS.White};
        background-color: ${COLORS.VimeoBlue};
    }

    .rdtDay.rdtActive:hover {
        color: ${COLORS.White};
        background-color: ${COLORS.VimeoBlue}-Darkened;
    }

    .rdtDisabled,
    .rdtDisabled:hover {
        color: ${COLORS.Plaster};
        background: none;

        cursor: not-allowed;
    }

    .rdtOld {
        color: ${COLORS.Porcelain};
    }

    .rdtOld.rdtDisabled,
    .rdtOld.rdtDisabled:hover {
        color: ${COLORS.Plaster};
        background: none;

        cursor: not-allowed;
    }

    .dow {
        width: 14.2857%;

        font-weight: normal; // overrides browser th styling.

        border-bottom: none;
    }

    .rdtSwitch {
        ${typeCSSByProps({
          format: 'dark',
          size: 'h5',
        })}

        width: ${rem(100)};
    }

    .rdtNext,
    .rdtPrev {
        vertical-align: middle;
        text-indent: -9999px;
    }

    .rdtPrev span,
    .rdtNext span {
        display: block;

        position: absolute;
        top: ${rem(8)};

        user-select: none;
    }

    .rdtPrev span {
        left: ${rem(16)};

        &:before {
            position: absolute;
            top: 0;
            left: 0;

            border-top: ${rem(8)} solid transparent;
            border-right: ${rem(8)} solid currentColor;
            border-bottom: ${rem(8)} solid transparent;

            content: '';
        }

        &:after {
            position: absolute;
            top: ${rem(2)};
            left: ${rem(2)};

            border-top: ${rem(6)} solid transparent;
            border-right: ${rem(6)} solid ${COLORS.White};
            border-bottom: ${rem(6)} solid transparent;

            content: '';
        }
    }

    .rdtNext span {
        right: ${rem(26)};

        &:before {
            position: absolute;
            top: 0;
            left: 0;

            border-top: ${rem(8)} solid transparent;
            border-bottom: ${rem(8)} solid transparent;
            border-left: ${rem(8)} solid currentColor;

            content: '';
        }

        &:after {
            position: absolute;
            top: ${rem(2)};
            left: 0;

            border-top: ${rem(6)} solid transparent;
            border-bottom: ${rem(6)} solid transparent;
            border-left: ${rem(6)} solid ${COLORS.White};

            content: '';
        }
    }

    th.rdtDisabled,
    th.rdtDisabled:hover {
        color: ${COLORS.Plaster};
        background: none;

        cursor: not-allowed;
    }

    .rdtPicker thead tr:first-child th {
        cursor: pointer;
    }
    .rdtPicker thead tr:first-child th:hover {
        color: ${COLORS.VimeoBlue};
    }

    .rdtPicker button {
        border: none;
        background: none;

        cursor: pointer;
    }
    .rdtPicker button:hover {
        background-color: ${COLORS.Porcelain};
    }

    .rdtPicker thead button {
        width: 100%;
        height: 100%;
    }

    .rdtMonth,
    .rdtYear {
        width: 25%;
        height: ${rem(50)};

        cursor: pointer;
    }

    .rdtMonth:hover,
    .rdtYear:hover {
        color: ${COLORS.VimeoBlue};
    }

    .rdtCounters {
        display: inline-block;
    }

    .rdtCounters > div {
        float: left;
    }

    .rdtCounter {
        height: ${rem(100)};
    }

    .rdtCounter {
        width: ${rem(40)};
    }

    .rdtCounterSeparator {
        line-height: ${rem(100)};
    }

    .rdtCounter .rdtBtn {
        display: block;

        height: 40%;

        line-height: ${rem(40)};

        cursor: pointer;

        user-select: none;
    }
    .rdtCounter .rdtBtn:hover {
        background: ${COLORS.Porcelain};
    }
    .rdtCounter .rdtCount {
        height: 20%;
    }

    .rdtMilli {
        width: ${rem(48)};
        padding-left: ${rem(8)};

        vertical-align: middle;
    }

    .rdtMilli input {
        width: 100%;
    }
`;

export const DateTriggerWrapperStyled = styled.div`
  // this is a positions the hidden element that needs a little size for the tethering to work.
  position: absolute;
  top: 0;
`;

export const DateTriggerStyled = styled.span`
  // this IS the hidden element that needs a little size for the tethering to work.
  display: inline-block;

  width: 1px;
  height: ${rem(InputStyleSettings.size.md.height)};

  outline: none;
`;
