### документация  

используем библиотеку - https://www.npmjs.com/package/sqlite3  

для автоматического перезапуска сервера:  npm i nodemon  

---  
по одному пути могут быть разные виды запросов - GET, POST, PUT, DELETE  

в этом приложении такая маршрутизация:  

для пути '/' - только GET  
для пути '/feed' - и GET и POST  

---  

```json
{
  "dependencies": {
    "ejs": "^3.1.9",
    "express": "^4.18.2",
    "nodemon": "^2.0.22",
    "sqlite3": "^5.1.6"
  },
  "scripts": {
    "start": "node app",
    "server": "nodemon app"
  }
}
```
