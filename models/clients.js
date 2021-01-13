// CLIENTS TABLE CREATED
module.exports = (sequelize, DataTypes) => {
  const Clients = sequelize.define("Clients", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    insurance: DataTypes.STRING,
    provider_ID: DataTypes.INTEGER,
  });

  Clients.associate = (models) => {
    Clients.belongsTo(models.Providers, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Clients;
};
