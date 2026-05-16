import React from 'react';
import './CarRentalCards.css';

interface CardProps {
  title: string;
  description: string;
  callToAction: string;
}

function Card({ title, description, callToAction }: CardProps) {
  return (
    <div className="card bg-white shadow-md p-4">
      <h2 className="text-lg font-bold mb-2'>{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
        {callToAction}
      </button>
    </div>
  );
}

function CarRentalCards() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Card
        title="Economy"
        description="Our economy cars are perfect for getting around town without breaking the bank."
        callToAction="Rent Now"
      />
      <Card
        title="Compact"
        description="Our compact cars are great for road trips and offer plenty of space for luggage."
        callToAction="Rent Now"
      />
      <Card
        title="Luxury"
        description="Our luxury cars are perfect for special occasions or business trips."
        callToAction="Rent Now"
      />
    </div>
  );
}

export default CarRentalCards;