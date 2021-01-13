// CLIENTS TABLE CREATED
module.exports = (sequelize, DataTypes) => {
  const Clients = sequelize.define("Clients", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    insurance: DataTypes.STRING,
    provider: DataTypes.STRING,
    emergencyContact: DataTypes.STRING,
  });
  return Clients;
};
