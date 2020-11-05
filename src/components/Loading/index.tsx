import React from 'react';

const Loading = ({isLoading}: {isLoading: boolean}) => {
 return <>
    {isLoading && <p>Loading...</p>}
 </>
}

export default Loading;