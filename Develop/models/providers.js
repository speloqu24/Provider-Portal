module.exports = (sequelize, DataTypes) => {
  const Providers = sequelize.define("Providers", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    company: DataTypes.STRING,
    practice_industry: DataTypes.STRING,
  });
  return Providers;
};
