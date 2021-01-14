module.exports = (sequelize, DataTypes) => {
  const Providers = sequelize.define("Providers", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    company: DataTypes.STRING,
    practice: DataTypes.STRING,
  });
  Providers.associate = (models) => {
    Providers.hasMany(models.Clients);
  };
  return Providers;
};
