import React from 'react';
import ContextChildren from './contextChildren';

const { Provider, Consumer } = React.createContext();
export { Consumer };

class R076_ContextApi extends React.Component {
    render() {
        return (
            <Provider value="React200">
                <ContextChildren />
            </Provider>
        );
    }
}

export default R076_ContextApi;
