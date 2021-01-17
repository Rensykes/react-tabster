import React, {useState} from 'react';
import BrowseContainer from '../containers/browse';
import HeaderContainer from '../containers/header';


export default function Browse() {
    const [page, setPage] = useState('browse');
    return (
        <>
            <HeaderContainer page={page} setPage={setPage} />
            <BrowseContainer />
        </>
    )
}
