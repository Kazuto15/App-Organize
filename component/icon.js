import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Icon = ({ name, size, color }) => {
  // Faça a importação dinâmica do ícone com base no nome fornecido
  const icon = require('@fortawesome/free-solid-svg-icons')[name];
  return <FontAwesomeIcon icon={icon} size={size} color={color} />;
};

export default Icon;

