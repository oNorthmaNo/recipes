import React, { Component } from 'react';
import './jumbotron.scss';
import { Dropdown } from '../dropdown/dropdown';
import { SelectList } from '../select-list/select-list';

import PropTypes from 'prop-types';
class Jumbotron extends Component {
    static propTypes = {
        searchAction: PropTypes.func.isRequired,
        searchOptions: PropTypes.array.isRequired,
        handleSearch: PropTypes.func.isRequired,
      };

    constructor(props) {
        super(props)
    }

    componentDidUpdate(props){
        // Desired operations: ex setting state
        console.log('UPDATED', props);
    }

    search = () => {
        this.props.searchAction();
    }

    calculateWidth = () => {
        const total = 100;
        const amountOfElement = this.props.searchOptions.length;
        return Math.floor(total / amountOfElement);
    }

    render() {
        const { searchOptions, handleSearch, searchValue } = this.props;
        return (
        <div className="jumbotron">
            <div className="jumbotron__body">
                <p className="p p--large">- Onze Recepten -</p>
                <h1 className="h1 jumbotron__header">Wat eten we vandaag?</h1>
                <div className="jumbotron__search">
                    <input className="jumbotron__search-field" type="search" value={searchValue} onChange={handleSearch} placeholder="Zoek hier jouw recept!" />
                    <button type="button" onClick={() => this.search()} className="jumbotron__search-sumbit">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
                <div className="jumbotron__search-filters">
                    {searchOptions.map((options, index) => {
                        return <SelectList 
                                    key={index} 
                                    maxwidth={`${this.calculateWidth()}%`}
                                    parentOutput={options.action}
                                    placeholder={options.label}
                                    options={options.collection}
                                    selectedOption={options.value}>
                                </SelectList>
                    })}
                </div>
            </div>
        </div>
    )
    }
}

export { Jumbotron };