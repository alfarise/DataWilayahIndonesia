const province = document.getElementById('province');
const city = document.getElementById('city');
const district = document.getElementById('district');
const village = document.getElementById('village');

fetch('/api/provinces')
  .then((response) => response.json())
  .then((response) => {
    response.forEach((data) => {
      const option = document.createElement('option');
      option.innerText = data.provinceName;
      option.value = data.provinceId;
      province.append(option);
    });
  });

province.onchange = () => {
  const id = province.value;
  city.disabled = false;
  city.innerHTML = '';
  district.disabled = true;
  district.innerHTML = '';
  village.disabled = true;
  village.innerHTML = '';
  fetch(`/api/cities/${id}`)
    .then((response) => response.json())
    .then((response) => {
      city.innerHTML = '<option selected disabled>-- Pilih Kabupaten/Kota --</option>';
      response.forEach((data) => {
        const option = document.createElement('option');
        option.innerText = data.cityName;
        option.value = data.cityId;
        city.append(option);
      });
    });
};

city.onchange = () => {
  const id = city.value;
  district.disabled = false;
  district.innerHTML = '';
  village.disabled = true;
  village.innerHTML = '';
  fetch(`/api/districts/${id}`)
    .then((response) => response.json())
    .then((response) => {
      district.innerHTML = '<option selected disabled>-- Pilih Kecamatan --</option>';
      response.forEach((data) => {
        const option = document.createElement('option');
        option.innerText = data.districtName;
        option.value = data.districtId;
        district.append(option);
      });
    });
};

district.onchange = () => {
  const id = district.value;
  village.disabled = false;
  village.innerHTML = '';
  fetch(`/api/villages/${id}`)
    .then((response) => response.json())
    .then((response) => {
      village.innerHTML = '<option selected disabled>-- Pilih Kelurahan/Desa --</option>';
      response.forEach((data) => {
        const option = document.createElement('option');
        option.innerText = data.villageName;
        option.value = data.villageId;
        village.append(option);
      });
    });
};
