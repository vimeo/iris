import React from 'react';
import ModalFeatureUpdate from './ModalFeatureUpdate';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import Button from '../Button';
import LinkText from '../LinkText';
import ModalFeatureUpdateTemplate from './ModalFeatureUpdateTemplate';
import TemplateAPI from '../../data/tsdocsHTML/interfaces/_modalfeatureupdate_modalfeatureupdatetemplate_.modalfeatureupdatetemplateprops.html';
import { ParagraphMd, Header3 } from '../Type';

const getApiHtml = htmlData => {
    return {
        __html: htmlData,
    };
};
class ModalFeatureUpdateDocs extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
        };
    }
    closeModal = e => {
        e.preventDefault();
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
                    <ParagraphMd>
                        This component provides a pop-up modal for notifying
                        users of feature updates and other news. It is fully
                        controlled and must be provided with a function that
                        will set the state that controls it to{' '}
                        <code>false</code>. See API docs below.
                    </ParagraphMd>
                    <Button onClick={this.modalToggle}>
                        {this.state.isOpen ? 'Close' : 'Open'} Modal
                    </Button>
                    <ModalFeatureUpdate
                        dismissButtonProps={{
                            'data-foo': 'bar',
                        }}
                        dismissButtonLabel="Close"
                        dismissButtonFormat="lightTransparent"
                        isOpen={this.state.isOpen}
                        onCloseEvent={this.closeModal}
                    >
                        <ModalFeatureUpdateTemplate
                            primaryActionArea={
                                <Button onClick={this.closeModal}>
                                    Close Modal
                                </Button>
                            }
                            secondaryActionArea={
                                <LinkText
                                    href="#"
                                    onClick={this.closeModal}
                                    target="_blank"
                                    decoration="silent"
                                >
                                    Also, close modal
                                </LinkText>
                            }
                            headline="Feature Headline"
                            heroImageArea={
                                <img
                                    src="http://placekitten.com/380/250"
                                    width="380"
                                    height="250"
                                    alt="Meow!"
                                />
                            }
                        >
                            Therefore, since{' '}
                            <LinkText
                                href="https://en.wikipedia.org/wiki/William_Shakespeare"
                                target="_blank"
                            >
                                {' '}
                                brevity is the soul of wit
                            </LinkText>, And tediousness the limbs and outward
                            flourishes, I will be brief. Your noble son is mad.
                        </ModalFeatureUpdateTemplate>
                    </ModalFeatureUpdate>
                </div>

                <ExampleSource>
                    {`
<ModalFeatureUpdate
    dismissButtonLabel="Close"
    dismissButtonFormat="lightTransparent"
    dismissButtonProps={{
        'data-foo': 'bar',
    }}
    isOpen={this.state.isOpen}
    onCloseEvent={this.closeModal}
>
    <ModalFeatureUpdateTemplate
        primaryActionArea={
            <Button onClick={this.closeModal}>
                Close Modal
            </Button>
        }
        secondaryActionArea={
            <LinkText
                href="#"
                onClick={this.closeModal}
                target="_blank"
                decoration="silent"
            >
                Also, close modal
            </LinkText>
        }
        headline="Feature Headline"
        heroImageArea={
            <img
                src="http://placekitten.com/380/250"
                width="380"
                height="250"
                alt="Meow!"
            />
        }
    >
        Therefore, since{' '}
        <LinkText
            href="https://en.wikipedia.org/wiki/William_Shakespeare"
            target="_blank"
        >
            {' '}
            brevity is the soul of wit
        </LinkText>, And tediousness the limbs and outward
        flourishes, I will be brief. Your noble son is mad.
    </ModalFeatureUpdateTemplate>
</ModalFeatureUpdate>
                        `}
                </ExampleSource>
                <Header3>
                    Using the ModalFeatureUpdateTemplate Component
                </Header3>
                <ParagraphMd>
                    The most common layout for the ModalFeatureUpdate is the
                    ModalFeatureUpdateTemplate.
                </ParagraphMd>
                <div dangerouslySetInnerHTML={getApiHtml(TemplateAPI)} />
            </div>
        );
    }
}

export default ModalFeatureUpdateDocs;
