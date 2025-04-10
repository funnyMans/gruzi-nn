'use client';

import dynamic from 'next/dynamic';
const DynamicYandexScript = dynamic(() => import('./YandexScript'), {
  ssr: false,
});

function YandexMapProvider() {
  return <DynamicYandexScript />;
}

export default YandexMapProvider;
