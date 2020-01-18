import React , { Component } from 'react';
import './tabs.scss';
import Proptypes from 'prop-types';
import Tab from './tab/tab';
 
class Tabs extends Component {
    static propTypes = {
        children: Proptypes.instanceOf(Array).isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.props.activeTab,
        }
    }

    onClickTabItem = (tab) => {
        this.setState({activeTab: tab});
    }

    render() {
        const {
            onClickTabItem,
            props: {
              children,
            },
            state: {
              activeTab,
            }
        } = this;

        return (
            <div className="tabs">
                <ol className="tab-list">
                {children.map((child) => {
                    const { label } = child.props;
                    return (
                    <Tab
                        activeTab={activeTab}
                        key={label}
                        label={label}
                        onClick={onClickTabItem}
                    />
                    );
                })}
                </ol>
                <div className="tab-content">
                {children.map((child) => {
                    if (child.props.label !== activeTab) return undefined;
                    return child.props.children;
                })}
                </div>
            </div>
        )
    }
}

export { Tabs };