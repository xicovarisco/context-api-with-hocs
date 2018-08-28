import React, { Component } from 'react';
import { AppProvider } from 'src/components/common';

class App extends Component {
    render() {
        return (
            <AppProvider>
                {/* Your component here */}
            </AppProvider>
        );
    }
}

export default App;
