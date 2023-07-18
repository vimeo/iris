import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Button,
  Badge,
  Notice,
  Modal,
  Slider,
  Checkbox,
  Dropzone,
  FileUpload,
  Input,
  Radio,
  Search,
  Select,
  TextArea,
  Toggle,
  Menu,
  Notification,
} from '../../components';
import { Props as BadgeType } from '../../components/Badge/Badge.types';
import { Paragraph, Header, Link, Text } from '../../typography';
import {
  GlobalStyle,
  A11yCSSProperties,
} from './GlobalStyleCSSProperties';
import { themes } from '../../../.storybook/themes';

export default { title: 'Labs/A11y/Components' };

const BadgeFormats = [
  'alum',
  'beta',
  'business',
  'curation',
  'default',
  'explicit',
  'featured',
  'hd',
  'info',
  'live',
  'live-archive',
  'mature',
  'new',
  'not-yet-rated',
  'partner',
  'plus',
  'producer',
  'pro',
  'restricted',
  'spatial',
  'sponsor',
  'staff',
  'support',
  'unrated',
  'upgrade',
  'vod',
];
const BadgeSizes = ['sm', 'lg', 'xl'];
const BadgeStickers = BadgeFormats.flatMap((format) =>
  BadgeSizes.map((size) => ({
    format,
    size,
  }))
);

export function A11y() {
  return (
    <>
      <GlobalStyle />
      {/* <A11yCSSProperties /> */}
      <div
        style={{
          display: 'grid',
          gap: '1rem',
          padding: '1rem',
          gridTemplateColumns: 'repeat(9, 1fr)',
          width: '300px',
        }}
      >
        {BadgeStickers.map((props, index) => (
          <Badge
            key={index}
            {...(props as BadgeType)}
            style={{ height: 'max-content' }}
          >
            {props.format}
          </Badge>
        ))}
      </div>
      <div
        style={{
          display: 'grid',
          gap: '1rem',
        }}
      >
        <Notice format="positive">Postive</Notice>
        <Notice format="primary">Primary</Notice>
        <Notice format="negative">Negative</Notice>
        <Slider initialValues={[25, 75]} range />
        {/* <Checkbox label="Checkbox" /> */}
        {/* <Checkbox label="Checkbox disabled" disabled /> */}
        {/* <Checkbox label="Checkbox defaultChecked" defaultChecked /> */}
        {/* <Checkbox
          label="Checkbox disabled defaultChecked"
          defaultChecked
          disabled
        /> */}
        {/* <Radio label="Radio" /> */}
        {/* <Radio label="Radio defaultChecked" defaultChecked /> */}
        {/* <Radio label="Radio disabled" disabled /> */}
        {/* <Radio
          label="Radio disabled defaultChecked"
          disabled
          defaultChecked
        /> */}
        {/* <Dropzone style={{ maxWidth: '40rem' }}>
          <Header size="3">Drag files here</Header>
        </Dropzone> */}
        {/* <FileUpload>
          <Button>File Upload</Button>
        </FileUpload> */}
        {/* <Input /> */}
        {/* <Search /> */}
        {/* <Select>
          <Select.Option value="" disabled hidden>
            Select something...
          </Select.Option>
          <Select.Option value="1">Value 1</Select.Option>
          <Select.Option value="2">Value 2</Select.Option>
          <Select.Option value="3">Value 3</Select.Option>
        </Select> */}
        {/* <TextArea placeholder="Placeholder text" /> */}
        {/* <Toggle label="Toggle" /> */}
        {/* <Link>
          Sit excepteur laboris ullamco nisi quis voluptate culpa
          exercitation id sint dolore ea eu aliquip.
        </Link> */}
        {/* <Text>
          Quis deserunt eiusmod dolor voluptate veniam consectetur qui
          voluptate amet aliquip laborum occaecat.
        </Text> */}
        {/* <Menu>
          <Menu.Section title="Menu Component">
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Item>Item 2</Menu.Item>
          </Menu.Section>
        </Menu> */}
        {/* <Notification content="Notification!">
          <Button>Show Notification</Button>
        </Notification> */}
        {/* <Modal active content={ModalContent}>
        <Button>OpenModal</Button>
      </Modal> */}
      </div>
    </>
  );
}
A11y.storyName = 'Components';

const ModalContent = (
  <>
    <Modal.Header>hey, listen!</Modal.Header>
    <Paragraph size="2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Consectetur ipsam tenetur illum eius expedita cum ipsa
      distinctio harum ut alias, praesentium suscipit vel soluta natus
      repudiandae omnis reiciendis! Eos, beatae.
    </Paragraph>
    <Modal.Footer>
      <Modal.SecondaryAction>Cancel</Modal.SecondaryAction>
      <Modal.PrimaryAction>Submit</Modal.PrimaryAction>
    </Modal.Footer>
  </>
);
