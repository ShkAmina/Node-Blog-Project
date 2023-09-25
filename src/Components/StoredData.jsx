import React, { createContext, useState } from 'react';
import RoutesComp from './RoutesComp';

export const Store = createContext();

function StoredData() {
    const [data] = useState()
    return (
        <Store.Provider value={[data]}>
            <RoutesComp />
        </Store.Provider>
    )
}

export default StoredData