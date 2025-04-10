'use client';
import config from '@/shared/lib/config';
import Script from 'next/script';
import React from 'react';

const YandexScript = () => {
  const apiKey = config.yandexMaps.apiKey;
  return (
    <Script
      src={`https://api-maps.yandex.ru/v3/?apikey=${apiKey}&lang=ru_RU`}
      strategy='beforeInteractive'
    />
  );
};

export default YandexScript;
