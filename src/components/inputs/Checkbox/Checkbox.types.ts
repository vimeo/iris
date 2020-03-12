import { MarkInputElement } from '../Shared';

import { IrisInputProps } from '../../../utils';

export type Props = IrisInputProps<
  {
    children: MarkInputElement[];
    /**
     * Whether to override the children checkbox values when the parent value changes
     *
     * [default = false]
     */
    coupled?: boolean;
    /**
     * Whether the children checkboxes should show only when the parent is selected
     *
     * [default = false]
     */
    toggled?: boolean;
  },
  HTMLDivElement
>;
