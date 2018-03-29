import React from 'react';
import ModalWrapper from './ModalWrapper';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import Button from '../Button';
class ModalWrapperDocs extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
        };
    }
    closeModal = () => {
        this.setState({
            isOpen: false,
        });
    };
    modalToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };
    render() {
        return (
            <div className="Pattern__docs">
                <div data-code>
                    <Button onClick={this.modalToggle}>
                        {this.state.isOpen ? 'Close' : 'Open'} Modal
                    </Button>
                    <ModalWrapper
                        isOpen={this.state.isOpen}
                        onDismissClick={this.closeModal}
                    >
                        <Button
                            format="lightTextOnly"
                            onClick={this.closeModal}
                        >
                            Close Modal
                        </Button>
                    </ModalWrapper>
                </div>

                <ExampleSource>
                    {`
                        <ModalWrapper />
                        `}
                </ExampleSource>
            </div>
        );
    }
}

export default ModalWrapperDocs;
