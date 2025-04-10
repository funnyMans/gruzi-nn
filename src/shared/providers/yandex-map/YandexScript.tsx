'use client';
import Script from 'next/script';
import React from 'react';

const YandexScript = () => {
  const apiKey = process.env.NEXT_PUBLIC_YMAPS_API_KEY;
  return (
    <Script
      src={`https://api-maps.yandex.ru/v3/?apikey=${apiKey}&lang=ru_RU`}
      strategy='beforeInteractive'
    />
  );
};

export default YandexScript;
