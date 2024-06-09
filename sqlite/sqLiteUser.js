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
    "CREATE TABLE IF NOT EXISTS User (nome TEXT, cpf TEXT PRIMARY KEY, email TEXT, numero TEXT, senha TEXT, saldo REAL);"
  );
});

const create = (obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "INSERT INTO User (nome, cpf, email, numero, senha, saldo) values (?, ?, ?, ?, ?, ?);",
        [obj.nome, obj.cpf, obj.email, obj.numero, obj.senha, obj.saldo],
       
        //-----------------------função de callback
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) resolve(true);
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
        "UPDATE User SET nome = ?, email = ?, numero = ?, senha = ? WHERE cpf = ?;",
        [obj.nome, obj.email, obj.numero, obj.senha, obj.cpf],
       
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

const selectByCpf = (cpf) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "SELECT * FROM User WHERE cpf = ?;",
        [cpf],
        //-----------------------
        (_, { rows }) => {
          if (rows.length > 0) resolve(rows._array[0]);
          else reject("No record found with cpf: " + cpf); // nenhum registro encontrado
        },
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

const verifyCredentials = (cpf, senha) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM User WHERE cpf = ? AND senha = ?;",
        [cpf, senha],
        (_, { rows }) => {
          if (rows.length > 0) resolve(true);
          else reject("Invalid credentials"); // credenciais inválidas
        },
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

const updateSaldo = (obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "UPDATE User SET saldo = ? WHERE cpf = ?;",
        [obj.saldo, obj.cpf],
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
export default {
  create,
  all,
  update,
  selectByCpf,
  verifyCredentials,
  updateSaldo,
};
