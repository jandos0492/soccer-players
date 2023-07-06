const { sequelize } = require("./db/models");

console.log("Starting psql-setup-script.js...");

sequelize.showAllSchemas({ logging: false }).then(async (data) => {
  console.log("showAllSchemas result:", data);

  if (!data.includes(process.env.SCHEMA)) {
    console.log("Creating new schema:", process.env.SCHEMA);
    await sequelize.createSchema(process.env.SCHEMA);
    console.log("New schema created!");
  }

  console.log("psql-setup-script.js completed!");
});