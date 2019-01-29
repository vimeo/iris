import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../Button/Button';
import { Modal } from './Modal';
import { ParagraphMd } from '../Type';

storiesOf('components/Modal', module).add(
  'basic modal',
  () => <ModalDocs />,
  {
    info: {
      inline: true,
      propTables: [Modal],
    },
  },
);

const initialState = { showModal: false };
type State = Readonly<typeof initialState>;
const closeModal = () => ({ showModal: false });
const openModal = () => ({ showModal: true });

class ModalDocs extends Component {
  readonly state: State = initialState;
  closeModal = () => this.setState(closeModal);
  openModal = () => this.setState(openModal);

  render() {
    return (
      <div>
        <Modal
          firstFocusSelector="#ModalPrimaryAction"
          modalLabelId="exampleModalLabel"
          modalDescriptionId="exampleModalDesc"
          modalCloseLabel="Close this dialog."
          modalTitle="Modal With Title Bar (Long for Truncation)"
          onDismiss={this.closeModal}
          primaryButtonProps={{
            children: 'Submit',
            id: 'ModalPrimaryAction',
            onClick: this.closeModal,
          }}
          secondaryButtonProps={{
            children: 'Cancel',
            onClick: this.closeModal,
          }}
          fluidButtons
          isShowing={this.state.showModal}
          size="md"
        >
          <ParagraphMd id="exampleModalDesc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur ipsam tenetur illum eius expedita cum ipsa
            distinctio harum ut alias, praesentium suscipit vel soluta
            natus repudiandae omnis reiciendis! Eos, beatae.
          </ParagraphMd>
        </Modal>

        <Button format="primaryOutline" onClick={this.openModal}>
          Show Modal
        </Button>
      </div>
    );
  }
}
