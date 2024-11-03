import mysql, { Connection, ResultSetHeader } from "mysql2";

export default class {
  #con: Connection | null;

  constructor() {
    this.#con = mysql.createConnection({
      host: process.env.HOST_NAME,
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      database: process.env.DBNAME,
    });

    this.#con.connect((err) => {
      if (err) {
        this.#con = null;
        return;
      }
    });
  }

  select(querry: string, statementList = []) {
    if (!this.#con) return null;
    return new Promise((resolve) => {
      this.#con?.query(querry, statementList, (err, result) => {
        if (err) resolve(err);
        resolve(result);
      });
    });
  }

  insert(querry: string, list: [string | number]) {
    return new Promise((resolve) => {
      this.#con?.query(querry, list, (err, result: ResultSetHeader) => {
        if (err) resolve(err);
        if (result.affectedRows == 0)
          resolve({ messsage: "lỗi insert không thành công", status: 500 });
        resolve({ messsage: "insert thành công", status: 200 });
      });
    });
  }

  delete(querry: string, list: [string | number]) {
    return new Promise((resolve) => {
      this.#con?.query(querry, list, (err, result: ResultSetHeader) => {
        if (err) resolve(err);
        if (result.affectedRows == 0)
          resolve({ messsage: "lỗi delete không thành công", status: 500 });
        resolve({ messsage: "delete thành công", status: 200 });
      });
    });
  }

  update(querry: string, list: [string | number]) {
    return new Promise((resolve) => {
      this.#con?.query(querry, list, (err, result: ResultSetHeader) => {
        if (err) resolve(err);
        if (result.affectedRows == 0)
          resolve({ messsage: "lỗi update không thành công", status: 500 });
        resolve({ messsage: "update thành công", status: 200 });
      });
    });
  }

  closeConnect() {
    this.#con?.end((err) => {
      if (err) {
        console.error("Error closing MySQL connection:", err);
        return;
      }
      // console.log('MySQL connection closed');
    });
  }
}
