// Access the database connection from database.js
import { query } from "../database"
export function getBodyPart() {
    return query("SELECT * FROM body")
}

export function createBodyPart(body) {
    return query("INSERT INTO body (body) "
        + `VALUES (?)`, [body])
}

export function deleteBodyPart(body) {
    return query("DELETE FROM body WHERE body = ?", [body])
}

export function updateBodyPart(body) {
    return query("UPDATE boyd WHERE body = ?", [body])
}


// // Access the database connection from database.js
// const db = require("../database")
// module.exports.getAllContent = () => {
//     return db.query("SELECT * FROM content")
// }

// module.exports.createContent= (injury) => {
//     return db.query("SELECT * FROM content WHERE sport = ?", [injury])
// }

// module.exports.createContent = (file_name) => {
//     return db.query("INSERT INTO content (file_name) "
//         + `VALUES (?)`, [file_name])
// }

// module.exports.updateContent = (file_name) => {
//     return db.query("file_name = ?", [file_name])
// }

// module.exports.deleteContent = (file_name) => {
//     return db.query("DELETE FROM content WHERE file_name = ?", [file_name])
// }