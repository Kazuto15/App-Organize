import db from "./SQLiteDataBase";

/**
 * INICIALIZAÇÃO DA TABELA
 * - Executa sempre, mas só cria a tabela caso não exista (primeira execução)
 */
db.transaction((tx) => {
  //<<<<<<<<<<<<<<<<<<<<<<<< USE ISSO APENAS DURANTE OS TESTES!!! >>>>>>>>>>>>>>>>>>>>>>>
  //tx.executeSql("DROP TABLE User;");
  //<<<<<<<<<<<<<<<<<<<<<<<< USE ISSO APENAS DURANTE OS TESTES!!! >>>>>>>>>>>>>>>>>>>>>>>
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS User (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, cpf TEXT, dataNasc TEXT, senha TEXT);"
  );
});

const create = (obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "INSERT INTO User (nome, cpf, dataNasc, senha) values (?, ?, ?, ?);",
        [obj.nome, obj.cpf, obj.dataNasc, obj.senha],
       
        //-----------------------função de callback
        (_, { rowsAffected, insertId }) => {
          if (rowsAffected > 0) resolve(insertId);
          else reject("Error inserting obj: " + JSON.stringify(obj)); // insert falhou
        },
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

const all = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "SELECT * FROM User;",
        [],
        //-----------------------
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

const update = (obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "UPDATE User SET nome = ?, cpf = ?, dataNasc = ?, senha = ? WHERE id = ?;",
        [obj.nome, obj.cpf, obj.dataNasc, obj.senha, obj.id],
       
        //-----------------------função de callback
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) resolve(true);
          else reject("Error updating obj: " + JSON.stringify(obj)); // update falhou
        },
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

const selectById = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "SELECT * FROM User WHERE id = ?;",
        [id],
        //-----------------------
        (_, { rows }) => {
          if (rows.length > 0) resolve(rows._array[0]);
          else reject("No record found with id: " + id); // nenhum registro encontrado
        },
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

export default {
  create,
  all,
  update,
  selectById,
};