import React from 'react';

const BannerCard = ({item}) => {
    return (
        <div>
            {item?.contestName}
        </div>
    );
};

export default BannerCard;