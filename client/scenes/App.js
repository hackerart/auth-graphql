import React from 'react';

import Header from './common/Header';

const App = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default App;
