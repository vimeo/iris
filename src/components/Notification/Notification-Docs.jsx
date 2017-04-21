import React from 'react';
import Notification from './Notification';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

const NotificationDocs = (props) => {
    return (
        <div>
            <p>This is the base Notification component that is used to create formatted notifications with pre-configured options. It does not look like much by itself.</p>
            <div data-code>
                <Notification
                >
                    This is a Success notification. Just lettin' you know.
                </Notification>
            </div>

            <ExampleSource>
                {`
<Notification>
    This is a Success notification. Just lettin' you know.
</Notification>
                `}
                </ExampleSource>
            </div>
    );
};

export default NotificationDocs;
