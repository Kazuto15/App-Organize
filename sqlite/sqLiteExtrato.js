import db from "./SQLiteDataBase";

/**
 * INICIALIZAÇÃO DA TABELA
 * - Executa sempre, mas só cria a tabela caso não exista (primeira execução)
 */
db.transaction((tx) => {
  //<<<<<<<<<<<<<<<<<<<<<<<< USE ISSO APENAS DURANTE OS TESTES!!! >>>>>>>>>>>>>>>>>>>>>>>
  //tx.executeSql("DROP TABLE Extrato;");
  //<<<<<<<<<<<<<<<<<<<<<<<< USE ISSO APENAS DURANTE OS TESTES!!! >>>>>>>>>>>>>>>>>>>>>>>
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS Extrato (id INT PRIMARY KEY, valor REAL, titulo TEXT, desc TEXT, tipo TEXT, idUser TEXT);"
  );
});

const create = (obj) => {
  console.log(obj)
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "INSERT INTO Extrato (valor, titulo, desc, tipo, idUser) VALUES (?, ?, ?, ?, ?);",
        [obj.valor, obj.titulo, obj.desc, obj.tipo, obj.idUser],
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
        "SELECT * FROM Extrato;",
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
        "UPDATE Extrato SET valor = ?, titulo = ?, desc = ?, tipo = ? WHERE idUser = ?;",
        [obj.valor, obj.titulo, obj.desc, obj.tipo, obj.idUser],
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

// const selectByUserId = (idUser) => {
//   return new Promise((resolve, reject) => {
//     db.transaction((tx) => {
//       tx.executeSql(
//         "SELECT * FROM Extrato WHERE idUser = ?;",
//         [idUser],
//         (_, { rows }) => {
//           if (rows.length > 0) resolve(rows._array[0]);
//           else reject("No record found with User ID: " + idUser);
//         },
//         (_, error) => reject(error)
//       );
//     });
//   });
// };
const selectByUserId = (idUser) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "SELECT * FROM Extrato WHERE idUser = ?;",
        [idUser],
        //-----------------------
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

export default {
  create,
  all,
  update,
  selectByUserId,
};
