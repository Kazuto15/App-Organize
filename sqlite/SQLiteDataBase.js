import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase("teste.db")

export default db

//npm install expo-sqlite@13.2.2