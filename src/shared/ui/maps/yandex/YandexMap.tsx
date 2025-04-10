'use client';
import dynamic from 'next/dynamic';

const DynamicYandexMapLoader = dynamic(() => import('./MapLoader'), {
  ssr: false,
});

const YandexMap = () => {
  return <DynamicYandexMapLoader />;
};

export default YandexMap;
