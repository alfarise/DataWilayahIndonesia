const fs = require('fs');

const province = () => JSON.parse(fs.readFileSync('data/province.json', 'utf-8'));

const city = (id) => JSON.parse(fs.readFileSync('data/city.json', 'utf-8')).filter((file) => file.provinceId === id);

const district = (id) => JSON.parse(fs.readFileSync('data/district.json', 'utf-8')).filter((file) => file.cityId === id);

const village = (id) => JSON.parse(fs.readFileSync('data/village.json', 'utf-8')).filter((file) => file.districtId === id);

module.exports = {
  province,
  city,
  district,
  village,
};
