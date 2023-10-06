import mysql from 'mysql2/promise';

// connection to db
// enter your mysql account authentication settings
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'test',
};
export const db = mysql.createPool(dbConfig);
