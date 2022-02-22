# API Data Wilayah Indonesia

 API data wilayah Indonesia.

## Demo
Link demo: [https://data-wilayah-indonesia.herokuapp.com](https://data-wilayah-indonesia.herokuapp.com)

# Dokumentasi API

## Data Provinsi
- Method `GET`
- Return `json`

Request
```
https://data-wilayah-indonesia.herokuapp.com/api/provinces
```

Response
```
[
    {
        "provinceId": "11",
        "provinceName": "ACEH"
    },
    {
        "provinceId": "12",
        "provinceName": "SUMATERA UTARA"
    },
    ...
]
```

## Data Kabupaten/Kota
- Method `GET`
- Parameters `provinceId`
- Return `json`

```
https://data-wilayah-indonesia.herokuapp.com/api/cities/{provinceId}
```

Request
```
https://data-wilayah-indonesia.herokuapp.com/api/cities/11
```

Response
```
[
    {
        "provinceId": "11",
        "cityId": "1101",
        "cityName": "KAB. ACEH SELATAN"
    },
    {
        "provinceId": "11",
        "cityId": "1102",
        "cityName": "KAB. ACEH TENGGARA"
    },
    {
        "provinceId": "11",
        "cityId": "1103",
        "cityName": "KAB. ACEH TIMUR"
    },
    {
        "provinceId": "11",
        "cityId": "1104",
        "cityName": "KAB. ACEH TENGAH"
    },
    ...
]
```

## Data Kecamatan
- Method `GET`
- Parameters `cityId`
- Return `json`

```
https://data-wilayah-indonesia.herokuapp.com/api/districts/{cityId}
```

Request
```
https://data-wilayah-indonesia.herokuapp.com/api/districts/1101
```

Response
```
[
    {
        "cityId": "1101",
        "districtId": "110101",
        "districtName": "Bakongan"
    },
    {
        "cityId": "1101",
        "districtId": "110102",
        "districtName": "Kluet Utara"
    },
    {
        "cityId": "1101",
        "districtId": "110103",
        "districtName": "Kluet Selatan"
    },
    {
        "cityId": "1101",
        "districtId": "110104",
        "districtName": "Labuhan Haji"
    },
    {
        "cityId": "1101",
        "districtId": "110105",
        "districtName": "Meukek"
    },
    ...
]
```

## Data Kelurahan/Desa
- Method `GET`
- Parameters `districtId`
- Return `json`

```
https://data-wilayah-indonesia.herokuapp.com/api/villages/{districtId}
```

Request
```
https://data-wilayah-indonesia.herokuapp.com/api/villages/110101
```

Response
```
[
    {
        "districtId": "110101",
        "villageId": "1101012001",
        "villageName": "Keude Bakongan"
    },
    {
        "districtId": "110101",
        "villageId": "1101012002",
        "villageName": "Ujong Mangki"
    },
    {
        "districtId": "110101",
        "villageId": "1101012003",
        "villageName": "Ujong Padang"
    },
    {
        "districtId": "110101",
        "villageId": "1101012004",
        "villageName": "Gampong Drien"
    },
    {
        "districtId": "110101",
        "villageId": "1101012015",
        "villageName": "Darul Ikhsan"
    },
    {
        "districtId": "110101",
        "villageId": "1101012016",
        "villageName": "Padang Beurahan"
    },
    {
        "districtId": "110101",
        "villageId": "1101012017",
        "villageName": "Gampong Baro"
    }
]
```

# Refrensi
- Data wilayah Indonesia (wilayah_2020.sql) [https://github.com/cahyadsn/wilayah](https://github.com/cahyadsn/wilayah)
