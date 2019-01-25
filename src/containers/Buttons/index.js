import React from 'react';

import MyButtons from './components/My';
import SemanticUIButtons from './components/SemanticUI';
import MaterialUIButtons from './components/MaterialUI';
import './styles.scss';

export default class Buttons extends React.Component {
    render() {
        return (
            <div>
                <MyButtons />
                <SemanticUIButtons />
                <MaterialUIButtons />
            </div>
        )
    }
}