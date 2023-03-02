import styled from 'styled-components';
import { rgba } from 'polished';

export const InputWrapper = styled.div`
  position: relative;
`;

export const Dot = styled.div`
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  margin: 0 1rem;
  display: inline-flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -0.375rem;
  z-index: 10;
  border: 0.5px solid ${({ theme }) => rgba(theme.content.color, 0.1)};
`;

export const Wrapper = styled.div<{
  width?: number;
  height: number;
  showHueSlider: boolean;
}>`
  padding: 0;
  position: relative;
  width: ${(p) => p.width}px;
  border-radius: 0.25rem;
  overflow: hidden;

  .react-colorful {
    width: auto;
    height: auto;
  }

  .react-colorful__saturation,
  .react-colorful__hue {
    border-radius: 5px;
  }

  .react-colorful__saturation {
    height: ${({ height }) => height}px;
  }

  .react-colorful__hue {
    display: ${({ showHueSlider }) =>
      showHueSlider ? 'block' : 'none'};
    margin: 1.5rem 1.5rem 0 4rem;
  }

  .react-colorful__saturation-pointer {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const SelectedColor = styled.div.attrs(
  ({ color }: { color: string }) => ({
    style: {
      background: color,
    },
  })
)<{ color: string }>`
  position: absolute;
  left: 1.5rem;
  bottom: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export const ColorSelectPickerWrapper = styled.div`
  position: relative;
`;
