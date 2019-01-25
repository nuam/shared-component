import React from 'react';

import Button from '../../../../components/Button';
import './styles.scss';

export default class MyButtons extends React.Component {
    render() {
        return (
            <div>
                <p className="section__title">My</p>
                <div className="items__wrapper">
                    <Button />
                    <Button
                        styles={{ backgroundColor: '#25282F', color: 'greenyellow' }}
                    />
                    <Button
                        styles={{ backgroundColor: '#000', color: 'red' }}
                        clickHandler={() => {alert('It was click! :)')}}
                    />
                    <Button
                        classes="button-test-class"
                        clickHandler={() => {alert('It was new click! :)')}}
                    />
                </div>
            </div>
        )
    }
}
