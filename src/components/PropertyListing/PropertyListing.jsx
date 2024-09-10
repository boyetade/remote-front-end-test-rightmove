import React, { useEffect, useState } from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';

// const DUMMY_PROPERTY = {
//     id: 73864112,
//     bedrooms: 3,
//     summary: 'Property 1 Situated moments from the River Thames in Old Chelsea...',
//     displayAddress: '1 CHEYNE WALK, CHELSEA, SW3',
//     propertyType: 'Flat',
//     price: 1950000,
//     branchName: 'M2 Property, London',
//     propertyUrl: '/property-for-sale/property-73864112.html',
//     contactUrl: '/property-for-sale/contactBranch.html?propertyId=73864112',
//     propertyTitle: '3 bedroom flat for sale',
//     mainImage:
//         'https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg',
// };



const PropertyListing = () => {

    const [propertyData, setPropertyData] = useState([]);

    useEffect(() => {
        const  fetchPropertyData = async () => {
            try {
              const resp = await fetch('http://localhost:3000/api/properties'); 
              const data = await resp.json(); 
              setPropertyData(data);
            

            } catch (error) {
                console.error('Error has been found: ', error);
            }
            
        };
        fetchPropertyData();
    },[])

    return (
        <ul className="PropertyListing">
            {propertyData
                .map((property) => (
                    <li key={property.id}>
                        <PropertyCard {...property} />
                    </li>
                ))}
        </ul>
    );
};

export default PropertyListing;
