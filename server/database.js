import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const db = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASETEST,
  })
  .promise();

export async function getRecipes() {
  //destructuring
  const [rows] = await db.query('SELECT * FROM recipe');
  return rows;
}

export async function getRecipeByID(id) {
  const [row] = await db.query(
    `
  SELECT * 
  FROM recipe
  WHERE id=?
  `,
    [id]
  );
  return row[0];
}

export async function createRecipe(name, ingredients, instructions) {
  const [result] = await db.query(
    `
  INSERT INTO recipe (recipe_name, ingredients, instructions)
  VALUES (?, ?, ?)`,
    [name, ingredients, instructions]
  );
  const id = result.insertId;
  return getRecipeByID(id);
}
