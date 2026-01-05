import React from 'react';

interface InfoCardProps {
  title: string;
  value: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, value }) => {
  return (
    <div className="bg-amber-500 dark:bg-amber-600 p-4 rounded-lg shadow-md text-white">
      <h4 className="text-xs font-bold uppercase opacity-80">
        {title}
      </h4>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default InfoCard;