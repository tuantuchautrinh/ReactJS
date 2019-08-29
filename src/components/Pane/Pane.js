import React, { Component } from 'react';
import LeftPane from './LeftPane/LeftPane';
import ContentPane from './ContentPane/ContentPane';
import RightPane from './RightPane/RightPane';

class Pane extends Component {
    render() {
        return (
            <div id="pane">
                <LeftPane />
                <ContentPane />
                <RightPane />
            </div>
        );
    }
}

export default Pane;