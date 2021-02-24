const mockForecast = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
      {
          "dt": 1614200400,
          "main": {
              "temp": 285.2,
              "feels_like": 280.7,
              "temp_min": 284.47,
              "temp_max": 285.2,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 1009,
              "humidity": 79,
              "temp_kf": 0.73
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 95
          },
          "wind": {
              "speed": 5.94,
              "deg": 222
          },
          "visibility": 10000,
          "pop": 0.91,
          "rain": {
              "3h": 0.98
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2021-02-24 21:00:00"
      },
      {
          "dt": 1614211200,
          "main": {
              "temp": 283.51,
              "feels_like": 280.68,
              "temp_min": 282.86,
              "temp_max": 283.51,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1011,
              "humidity": 80,
              "temp_kf": 0.65
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 98
          },
          "wind": {
              "speed": 3.06,
              "deg": 240
          },
          "visibility": 10000,
          "pop": 0.78,
          "rain": {
              "3h": 0.37
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2021-02-25 00:00:00"
      },
      {
          "dt": 1614222000,
          "main": {
              "temp": 282.38,
              "feels_like": 278.84,
              "temp_min": 282.14,
              "temp_max": 282.38,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1012,
              "humidity": 80,
              "temp_kf": 0.24
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 99
          },
          "wind": {
              "speed": 3.73,
              "deg": 257
          },
          "visibility": 10000,
          "pop": 0.2,
          "rain": {
              "3h": 0.12
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2021-02-25 03:00:00"
      },
      {
          "dt": 1614232800,
          "main": {
              "temp": 281.19,
              "feels_like": 277.07,
              "temp_min": 281.15,
              "temp_max": 281.19,
              "pressure": 1021,
              "sea_level": 1021,
              "grnd_level": 1015,
              "humidity": 69,
              "temp_kf": 0.04
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 96
          },
          "wind": {
              "speed": 3.66,
              "deg": 269
          },
          "visibility": 10000,
          "pop": 0.2,
          "rain": {
              "3h": 0.2
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2021-02-25 06:00:00"
      },
      {
          "dt": 1614243600,
          "main": {
              "temp": 280.74,
              "feels_like": 275.89,
              "temp_min": 280.74,
              "temp_max": 280.74,
              "pressure": 1023,
              "sea_level": 1023,
              "grnd_level": 1017,
              "humidity": 65,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02d"
              }
          ],
          "clouds": {
              "all": 18
          },
          "wind": {
              "speed": 4.41,
              "deg": 266
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2021-02-25 09:00:00"
      },
      {
          "dt": 1614254400,
          "main": {
              "temp": 282.56,
              "feels_like": 277.28,
              "temp_min": 282.56,
              "temp_max": 282.56,
              "pressure": 1026,
              "sea_level": 1026,
              "grnd_level": 1019,
              "humidity": 56,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02d"
              }
          ],
          "clouds": {
              "all": 16
          },
          "wind": {
              "speed": 4.94,
              "deg": 269
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2021-02-25 12:00:00"
      },
      {
          "dt": 1614265200,
          "main": {
              "temp": 282.41,
              "feels_like": 276.96,
              "temp_min": 282.41,
              "temp_max": 282.41,
              "pressure": 1027,
              "sea_level": 1027,
              "grnd_level": 1021,
              "humidity": 55,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 2
          },
          "wind": {
              "speed": 5.09,
              "deg": 282
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2021-02-25 15:00:00"
      },
      {
          "dt": 1614276000,
          "main": {
              "temp": 279.86,
              "feels_like": 275.59,
              "temp_min": 279.86,
              "temp_max": 279.86,
              "pressure": 1029,
              "sea_level": 1029,
              "grnd_level": 1023,
              "humidity": 64,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 1
          },
          "wind": {
              "speed": 3.35,
              "deg": 286
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2021-02-25 18:00:00"
      },
      {
          "dt": 1614286800,
          "main": {
              "temp": 278.94,
              "feels_like": 275.81,
              "temp_min": 278.94,
              "temp_max": 278.94,
              "pressure": 1032,
              "sea_level": 1032,
              "grnd_level": 1025,
              "humidity": 70,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 1.8,
              "deg": 276
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2021-02-25 21:00:00"
      },
      {
          "dt": 1614297600,
          "main": {
              "temp": 278.03,
              "feels_like": 275.29,
              "temp_min": 278.03,
              "temp_max": 278.03,
              "pressure": 1034,
              "sea_level": 1034,
              "grnd_level": 1027,
              "humidity": 75,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 1.25,
              "deg": 232
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2021-02-26 00:00:00"
      },
      {
          "dt": 1614308400,
          "main": {
              "temp": 277.26,
              "feels_like": 274.5,
              "temp_min": 277.26,
              "temp_max": 277.26,
              "pressure": 1034,
              "sea_level": 1034,
              "grnd_level": 1028,
              "humidity": 80,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 1.32,
              "deg": 201
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2021-02-26 03:00:00"
      },
      {
          "dt": 1614319200,
          "main": {
              "temp": 276.53,
              "feels_like": 273.82,
              "temp_min": 276.53,
              "temp_max": 276.53,
              "pressure": 1035,
              "sea_level": 1035,
              "grnd_level": 1028,
              "humidity": 85,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 1.27,
              "deg": 195
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2021-02-26 06:00:00"
      },
      {
          "dt": 1614330000,
          "main": {
              "temp": 277.83,
              "feels_like": 274.88,
              "temp_min": 277.83,
              "temp_max": 277.83,
              "pressure": 1036,
              "sea_level": 1036,
              "grnd_level": 1029,
              "humidity": 76,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 1
          },
          "wind": {
              "speed": 1.55,
              "deg": 192
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2021-02-26 09:00:00"
      },
      {
          "dt": 1614340800,
          "main": {
              "temp": 281.57,
              "feels_like": 277.97,
              "temp_min": 281.57,
              "temp_max": 281.57,
              "pressure": 1037,
              "sea_level": 1037,
              "grnd_level": 1030,
              "humidity": 55,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 1
          },
          "wind": {
              "speed": 2.29,
              "deg": 245
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2021-02-26 12:00:00"
      },
      {
          "dt": 1614351600,
          "main": {
              "temp": 283.03,
              "feels_like": 279.4,
              "temp_min": 283.03,
              "temp_max": 283.03,
              "pressure": 1036,
              "sea_level": 1036,
              "grnd_level": 1029,
              "humidity": 48,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 2.23,
              "deg": 272
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2021-02-26 15:00:00"
      },
      {
          "dt": 1614362400,
          "main": {
              "temp": 280.56,
              "feels_like": 278.39,
              "temp_min": 280.56,
              "temp_max": 280.56,
              "pressure": 1036,
              "sea_level": 1036,
              "grnd_level": 1030,
              "humidity": 61,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 0.35,
              "deg": 283
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2021-02-26 18:00:00"
      },
      {
          "dt": 1614373200,
          "main": {
              "temp": 279.25,
              "feels_like": 276.3,
              "temp_min": 279.25,
              "temp_max": 279.25,
              "pressure": 1038,
              "sea_level": 1038,
              "grnd_level": 1031,
              "humidity": 70,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 1.61,
              "deg": 205
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2021-02-26 21:00:00"
      },
      {
          "dt": 1614384000,
          "main": {
              "temp": 278.11,
              "feels_like": 274.7,
              "temp_min": 278.11,
              "temp_max": 278.11,
              "pressure": 1038,
              "sea_level": 1038,
              "grnd_level": 1032,
              "humidity": 72,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 2.11,
              "deg": 196
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2021-02-27 00:00:00"
      },
      {
          "dt": 1614394800,
          "main": {
              "temp": 277.13,
              "feels_like": 273.94,
              "temp_min": 277.13,
              "temp_max": 277.13,
              "pressure": 1038,
              "sea_level": 1038,
              "grnd_level": 1031,
              "humidity": 80,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 1.9,
              "deg": 187
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2021-02-27 03:00:00"
      },
      {
          "dt": 1614405600,
          "main": {
              "temp": 276.3,
              "feels_like": 273.41,
              "temp_min": 276.3,
              "temp_max": 276.3,
              "pressure": 1038,
              "sea_level": 1038,
              "grnd_level": 1031,
              "humidity": 82,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 1.37,
              "deg": 181
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2021-02-27 06:00:00"
      },
      {
          "dt": 1614416400,
          "main": {
              "temp": 277.75,
              "feels_like": 274.84,
              "temp_min": 277.75,
              "temp_max": 277.75,
              "pressure": 1039,
              "sea_level": 1039,
              "grnd_level": 1032,
              "humidity": 74,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 52
          },
          "wind": {
              "speed": 1.4,
              "deg": 171
          },
          "visibility": 10000,
          "pop": 0.04,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2021-02-27 09:00:00"
      },
      {
          "dt": 1614427200,
          "main": {
              "temp": 279.27,
              "feels_like": 276.47,
              "temp_min": 279.27,
              "temp_max": 279.27,
              "pressure": 1040,
              "sea_level": 1040,
              "grnd_level": 1033,
              "humidity": 73,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 76
          },
          "wind": {
              "speed": 1.52,
              "deg": 216
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2021-02-27 12:00:00"
      },
      {
          "dt": 1614438000,
          "main": {
              "temp": 281.61,
              "feels_like": 279.16,
              "temp_min": 281.61,
              "temp_max": 281.61,
              "pressure": 1039,
              "sea_level": 1039,
              "grnd_level": 1032,
              "humidity": 71,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 94
          },
          "wind": {
              "speed": 1.49,
              "deg": 281
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2021-02-27 15:00:00"
      },
      {
          "dt": 1614448800,
          "main": {
              "temp": 279.93,
              "feels_like": 277.88,
              "temp_min": 279.93,
              "temp_max": 279.93,
              "pressure": 1039,
              "sea_level": 1039,
              "grnd_level": 1032,
              "humidity": 84,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 91
          },
          "wind": {
              "speed": 1.11,
              "deg": 314
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2021-02-27 18:00:00"
      },
      {
          "dt": 1614459600,
          "main": {
              "temp": 278.62,
              "feels_like": 276.38,
              "temp_min": 278.62,
              "temp_max": 278.62,
              "pressure": 1040,
              "sea_level": 1040,
              "grnd_level": 1033,
              "humidity": 89,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 25
          },
          "wind": {
              "speed": 1.26,
              "deg": 11
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2021-02-27 21:00:00"
      },
      {
          "dt": 1614470400,
          "main": {
              "temp": 278.06,
              "feels_like": 275.69,
              "temp_min": 278.06,
              "temp_max": 278.06,
              "pressure": 1040,
              "sea_level": 1040,
              "grnd_level": 1033,
              "humidity": 88,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02n"
              }
          ],
          "clouds": {
              "all": 14
          },
          "wind": {
              "speed": 1.27,
              "deg": 28
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2021-02-28 00:00:00"
      },
      {
          "dt": 1614481200,
          "main": {
              "temp": 277.74,
              "feels_like": 275.59,
              "temp_min": 277.74,
              "temp_max": 277.74,
              "pressure": 1039,
              "sea_level": 1039,
              "grnd_level": 1032,
              "humidity": 90,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 32
          },
          "wind": {
              "speed": 0.95,
              "deg": 48
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2021-02-28 03:00:00"
      },
      {
          "dt": 1614492000,
          "main": {
              "temp": 277.46,
              "feels_like": 274.99,
              "temp_min": 277.46,
              "temp_max": 277.46,
              "pressure": 1038,
              "sea_level": 1038,
              "grnd_level": 1032,
              "humidity": 91,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 29
          },
          "wind": {
              "speed": 1.37,
              "deg": 52
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2021-02-28 06:00:00"
      },
      {
          "dt": 1614502800,
          "main": {
              "temp": 279.35,
              "feels_like": 277.06,
              "temp_min": 279.35,
              "temp_max": 279.35,
              "pressure": 1038,
              "sea_level": 1038,
              "grnd_level": 1032,
              "humidity": 81,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 8
          },
          "wind": {
              "speed": 1.18,
              "deg": 56
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2021-02-28 09:00:00"
      },
      {
          "dt": 1614513600,
          "main": {
              "temp": 283.79,
              "feels_like": 281.32,
              "temp_min": 283.79,
              "temp_max": 283.79,
              "pressure": 1038,
              "sea_level": 1038,
              "grnd_level": 1031,
              "humidity": 61,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 4
          },
          "wind": {
              "speed": 1.49,
              "deg": 85
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2021-02-28 12:00:00"
      },
      {
          "dt": 1614524400,
          "main": {
              "temp": 284.68,
              "feels_like": 281.37,
              "temp_min": 284.68,
              "temp_max": 284.68,
              "pressure": 1036,
              "sea_level": 1036,
              "grnd_level": 1029,
              "humidity": 57,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 1
          },
          "wind": {
              "speed": 2.66,
              "deg": 88
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2021-02-28 15:00:00"
      },
      {
          "dt": 1614535200,
          "main": {
              "temp": 282,
              "feels_like": 279.14,
              "temp_min": 282,
              "temp_max": 282,
              "pressure": 1035,
              "sea_level": 1035,
              "grnd_level": 1028,
              "humidity": 73,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 3
          },
          "wind": {
              "speed": 2.27,
              "deg": 95
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2021-02-28 18:00:00"
      },
      {
          "dt": 1614546000,
          "main": {
              "temp": 280.61,
              "feels_like": 277.71,
              "temp_min": 280.61,
              "temp_max": 280.61,
              "pressure": 1036,
              "sea_level": 1036,
              "grnd_level": 1029,
              "humidity": 79,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 26
          },
          "wind": {
              "speed": 2.27,
              "deg": 80
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2021-02-28 21:00:00"
      },
      {
          "dt": 1614556800,
          "main": {
              "temp": 278.95,
              "feels_like": 275.73,
              "temp_min": 278.95,
              "temp_max": 278.95,
              "pressure": 1036,
              "sea_level": 1036,
              "grnd_level": 1029,
              "humidity": 82,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02n"
              }
          ],
          "clouds": {
              "all": 13
          },
          "wind": {
              "speed": 2.45,
              "deg": 78
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2021-03-01 00:00:00"
      },
      {
          "dt": 1614567600,
          "main": {
              "temp": 277.94,
              "feels_like": 274.27,
              "temp_min": 277.94,
              "temp_max": 277.94,
              "pressure": 1034,
              "sea_level": 1034,
              "grnd_level": 1027,
              "humidity": 79,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 2.73,
              "deg": 73
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2021-03-01 03:00:00"
      },
      {
          "dt": 1614578400,
          "main": {
              "temp": 277.2,
              "feels_like": 273.01,
              "temp_min": 277.2,
              "temp_max": 277.2,
              "pressure": 1033,
              "sea_level": 1033,
              "grnd_level": 1026,
              "humidity": 78,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 3.27,
              "deg": 68
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2021-03-01 06:00:00"
      },
      {
          "dt": 1614589200,
          "main": {
              "temp": 278.92,
              "feels_like": 274.21,
              "temp_min": 278.92,
              "temp_max": 278.92,
              "pressure": 1032,
              "sea_level": 1032,
              "grnd_level": 1025,
              "humidity": 72,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 1
          },
          "wind": {
              "speed": 4.14,
              "deg": 82
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2021-03-01 09:00:00"
      },
      {
          "dt": 1614600000,
          "main": {
              "temp": 282.8,
              "feels_like": 277.5,
              "temp_min": 282.8,
              "temp_max": 282.8,
              "pressure": 1031,
              "sea_level": 1031,
              "grnd_level": 1024,
              "humidity": 60,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 5.25,
              "deg": 104
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2021-03-01 12:00:00"
      },
      {
          "dt": 1614610800,
          "main": {
              "temp": 284.11,
              "feels_like": 279.14,
              "temp_min": 284.11,
              "temp_max": 284.11,
              "pressure": 1028,
              "sea_level": 1028,
              "grnd_level": 1022,
              "humidity": 57,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02d"
              }
          ],
          "clouds": {
              "all": 13
          },
          "wind": {
              "speed": 4.9,
              "deg": 116
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2021-03-01 15:00:00"
      },
      {
          "dt": 1614621600,
          "main": {
              "temp": 281.71,
              "feels_like": 278.01,
              "temp_min": 281.71,
              "temp_max": 281.71,
              "pressure": 1028,
              "sea_level": 1028,
              "grnd_level": 1021,
              "humidity": 69,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 29
          },
          "wind": {
              "speed": 3.19,
              "deg": 122
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2021-03-01 18:00:00"
      }
  ],
  "city": {
      "id": 2643123,
      "name": "Manchester",
      "coord": {
          "lat": 53.4809,
          "lon": -2.2374
      },
      "country": "GB",
      "population": 395515,
      "timezone": 0,
      "sunrise": 1614150487,
      "sunset": 1614188192
  }
};

export default mockForecast;

