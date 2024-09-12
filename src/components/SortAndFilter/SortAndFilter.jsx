import React from 'react';
import './SortAndFilter.scss';
import MultiSelect from './MultiSelect/MultiSelect';
import { bedOptions, orderOptions, priceOptions, propertyTypes, sortOptions,  } from '../../constants';
import Dropdown from './Dropdown/Dropdown';

const SortAndFilter = ({ onMinPriceChange, onMaxPriceChange, onMinBedroom, onMaxBedroom, onSortOption, onOrderOption }) => {
    return (
        <div className="SortAndFilter">

            <Dropdown options={sortOptions} onChange={(e) => onSortOption(e)} label='Sort By'/>
            <Dropdown options={orderOptions} onChange={(e) => onOrderOption(e)} label='Order By'/>
            <Dropdown
                options={priceOptions}
                onChange={(e) => onMinPriceChange(e)} 
                label='Min price'
            />
            <Dropdown
                options={priceOptions}
                onChange={(e) => onMaxPriceChange(e)}  
                label='Max price'
            />

            <Dropdown
                options={bedOptions}
                onChange={(e) => onMinBedroom(e)}  
                label='Min Bedroom'
            />
            <Dropdown
                options={bedOptions}
                onChange={(e) => onMaxBedroom(e)}  
                label='Max Bedroom'
            />

        </div>
    );
};

export default SortAndFilter;
