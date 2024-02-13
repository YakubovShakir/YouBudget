// AuthProvider.js

import React, { useState, useContext, useEffect } from 'react';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Логика входа, например, отправка запроса на сервер
    // Установка данных пользователя в состояние
    setUser(userData);
  };

  const logout = () => {
    // Логика выхода, например, отправка запроса на сервер
    // Сброс данных пользователя в состоянии
    setUser(null);
  };

  const getUser = () => {
    // Логика получения данных пользователя, например, из хранилища или запрос на сервер
    return user;
  };

  useEffect(() => {
    // Логика проверки авторизации, например, проверка наличия токена в localStorage
    // Если пользователь авторизован, установите его данные в состояние
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, getUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
