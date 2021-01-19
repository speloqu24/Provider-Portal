// CLIENTS TABLE CREATED
module.exports = (sequelize, DataTypes) => {
  const Clients = sequelize.define("Clients", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    insurance: DataTypes.STRING,
  });

  //create document table to house all documents, .associate docs with client id

  Clients.associate = (models) => {
    Clients.belongsTo(models.Providers, {
      foreignKey: {
        allowNull: true,
      },
    });
  };
  return Clients;
};
