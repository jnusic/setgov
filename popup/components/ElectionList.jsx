import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router/lib';
import { Button } from 'semantic-ui-react';

import Base from './Base';
import ElectionListTile from './ElectionListTile';

export default class ElectionList extends Base {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='ElectionList'>
                <ElectionListTile />
            </div>
        );
    }
}