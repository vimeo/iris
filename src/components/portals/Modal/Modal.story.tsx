import React, { Component, useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Modal, Button } from '../../index';
import { ParagraphMd } from '../../../legacy';
import { Story } from '../../../storybook';

const componentName = 'Modal';

storiesOf(`components|Portals/`, module).add('Modal', () => (
  <Story title={componentName} subTitle="basic">
    <ModalDocs />
  </Story>
));

const ModalDocs = () => {
  const [active, setActive] = useState(false);
  const toggleState = () => setActive(active => !active);

  return (
    <>
      <Modal
        firstFocusSelector="#ModalPrimaryAction"
        modalLabelId="exampleModalLabel"
        modalDescriptionId="exampleModalDesc"
        modalCloseLabel="Close this dialog."
        modalTitle="Modal With Title Bar (Long for Truncation)"
        onDismiss={toggleState}
        primaryButtonProps={{
          children: 'Submit',
          id: 'ModalPrimaryAction',
          onClick: toggleState,
        }}
        secondaryButtonProps={{
          children: 'Cancel',
          onClick: toggleState,
        }}
        fluidButtons
        isShowing={active}
        size="md"
      >
        <ParagraphMd id="exampleModalDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consectetur ipsam tenetur illum eius expedita cum ipsa
          distinctio harum ut alias, praesentium suscipit vel soluta
          natus repudiandae omnis reiciendis! Eos, beatae.
        </ParagraphMd>
      </Modal>

      <Button format="primaryOutline" onClick={toggleState}>
        Show Modal
      </Button>
    </>
  );
};
