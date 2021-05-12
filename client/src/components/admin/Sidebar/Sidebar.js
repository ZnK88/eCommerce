import React from 'react';

import LargeSidebar from './LargeSidebar';
import SmallSidebar from './SmallSidebar';

import Hidden from '@material-ui/core/Hidden';

const Sidebar = () => {
    return (
        <div>
            <Hidden only={['sm', 'xs']}>
                <LargeSidebar />
            </Hidden>
            <Hidden only={['xl', 'lg', 'md']}>
                <SmallSidebar />
            </Hidden>
        </div>
    );
}

export default Sidebar;