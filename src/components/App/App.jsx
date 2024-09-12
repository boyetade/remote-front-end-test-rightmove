import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from '../Header';
import SortAndFilter from '../SortAndFilter';
import PropertyListing from '../PropertyListing';
import { bedOptions, priceOptions } from '../../constants';

const App = () => {
    const [propertyData, setPropertyData] = useState([]);
    const [selectedMinPrice, setSelectedMinPrice] = useState(Math.min(...priceOptions));
    const [selectedMaxPrice, setSelectedMaxPrice] = useState(Math.max(...priceOptions));
    const [selectedMinBedroom, setSelectedMinBedroom] = useState(Math.min(...bedOptions));
    const [selectedMaxBedroom, setSelectedMaxBedroom] = useState(Math.max(...bedOptions));
    const [selectedSortOption, setSelectedSortOption] = useState('');
    const [selectedOrderOption, setSelectedOrderOption] = useState('');

    const handleMinPriceChange = (minPrice) => {
        setSelectedMinPrice(minPrice);
    };

    const handleMaxPriceChange = (maxPrice) => {
        setSelectedMaxPrice(maxPrice);
    };
    
    const handleMinBedroomChange = (minBedroom) => {
        setSelectedMinBedroom(minBedroom);
    };

    const handleMaxBedroomChange = (maxBedroom) => {
        setSelectedMaxBedroom(maxBedroom);
    };

    const handleSortOption = (sortOption) => {
        setSelectedSortOption(sortOption);
    } 
    const handleOrderOption = (orderOption) => {
        setSelectedOrderOption(orderOption);
    } 
  
  
    useEffect(() => {
        const fetchPropertyData = async () => {
            try {
               
                const params = new URLSearchParams({
                    minPrice: selectedMinPrice,
                    maxPrice: selectedMaxPrice,
                    minBeds: selectedMinBedroom,
                    maxBeds: selectedMaxBedroom,
                    sortBy:selectedSortOption,
                    orderBy:selectedOrderOption,
                });

                let url = `http://localhost:3000/api/properties`;
                if (params.toString()) {
                    url += `?${params.toString()}`;
                }

                
                const resp = await fetch(url);
                const data = await resp.json();
                setPropertyData(data);  

                
                const newUrl = `${window.location.pathname}?${params.toString()}`;
                window.history.pushState(null, '', newUrl)
            } catch (error) {
                console.error('Error has been found: ', error);  
            }
        };

        fetchPropertyData();
    }, [selectedMinPrice, selectedMaxPrice, selectedMaxBedroom, selectedMinBedroom,selectedSortOption]);  

    return (
        <div className="App">
            <Header />
            <main>
                <SortAndFilter
                    onMinPriceChange={handleMinPriceChange}
                    onMaxPriceChange={handleMaxPriceChange}
                    onMinBedroom={handleMinBedroomChange}
                    onMaxBedroom={handleMaxBedroomChange}
                    onSortOption={handleSortOption}
                    onOrderOption={handleOrderOption}
                />
                <PropertyListing propertyData={propertyData} />
            </main>
        </div>
    );
};

export default App;
