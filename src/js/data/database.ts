import * as idb from 'idb'
import { Answer } from './questions'

type Resiko = 'Rendah' | 'Sedang' | 'Tinggi'

type SurveyResult = {
  answers: Answer[]
  name: string
  result: Resiko
}

interface DBSurveySchema extends idb.DBSchema {
  userResult: {
    key: string
    value: SurveyResult
  }
}

// class Database<Schema> {
//   name: string
//   version: number
//   _dbinstance: idb.IDBPDatabase<Schema>
//   upgrade: (
//     database: idb.IDBPDatabase<Schema>,
//     oldVersion: number,
//     newVersion: number,
//     transaction: idb.IDBPTransaction<Schema, idb.StoreNames<Schema>[]>
//   ) => void
//   constructor(name: string, version: number) {
//     this.name = name
//     this.version = version
//   }

//   async open() {
//     if (!this.upgrade) {
//       throw new Error('Upgrade mana wei')
//       return
//     }
//     const db = await idb.openDB<Schema>(this.name, this.version, {
//       upgrade: this.upgrade,
//     })
//     this._dbinstance = db
//   }

//   async put(storeName: idb.StoreNames<Schema>, value: idb.StoreValue<Schema, StoreNames<Schema>>) {
//     this._dbinstance.put(storeName, value)
//   }
// }

function getDBInstance() {
  return idb.openDB<DBSurveySchema>('Survey', 1, {
    upgrade(database, oldVersion, newVersion, transaction) {
      switch (oldVersion) {
        case 0:
          database.createObjectStore('userResult', {
            keyPath: 'id',
            autoIncrement: true,
          })
      }
    },
  })
}

export { SurveyResult, DBSurveySchema, getDBInstance, Resiko }
