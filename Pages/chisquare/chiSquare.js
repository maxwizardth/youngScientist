
var chiTab={
"1":[0.00, 0.00, 0.00, 0.00, 0.02, 2.71, 3.84 ,5.02, 6.63],
"2":[0.01, 0.02, 0.05, 0.10, 0.21, 4.61, 5.99 ,7.38, 9.21],
"3":[0.07, 0.11, 0.22, 0.35, 0.58, 6.25, 7.81 ,9.35, 11.34],
"4":[0.21, 0.30, 0.48, 0.71, 1.06, 7.78, 9.49 ,11.14, 13.28],
"5":[0.41, 0.55, 0.83, 1.15, 1.61, 9.24, 11.07, 12.83, 15.09],
"6":[0.68 ,0.87 ,1.24 ,1.64 ,2.20 ,10.64 ,12.59 ,14.45, 16.81],
"7":[0.99 ,1.24 ,1.69 ,2.17 ,2.83 ,12.02 ,14.07 ,16.01, 18.48],
"8":[1.34 ,1.65 ,2.18 ,2.73 ,3.49 ,13.36 ,15.51 ,17.53, 20.09],
"9":[1.73 ,2.09 ,2.70 ,3.33 ,4.17 ,14.68 ,16.92 ,19.02, 21.67],
"1":[ 2.16, 2.56, 3.25, 3.94, 4.87, 15.99, 18.31, 20.48, 23.21],
"11":[2.60, 3.05, 3.82, 4.57, 5.58, 17.28, 19.68, 21.92, 24.72],
"12":[3.07, 3.57, 4.40, 5.23, 6.30, 18.55, 21.03, 23.34, 26.22],
"13":[3.57, 4.11, 5.01, 5.89, 7.04, 19.81, 22.36, 24.74, 27.69],
"14":[4.07, 4.66, 5.63, 6.57, 7.79, 21.06, 23.68, 26.12, 29.14],
"15":[4.60, 5.23, 6.26, 7.26, 8.55, 22.31, 25.00, 27.49, 30.58],
"16":[5.14, 5.81, 6.91, 7.96 , 9.31, 23.54, 26.30, 28.85, 32.00],
"17":[5.70, 6.41, 7.56, 8.67 , 10.09, 24.77, 27.59, 30.19, 33.41],
"18":[6.26, 7.01, 8.23, 9.39 ,10.86, 25.99, 28.87, 31.53, 34.81],
"19":[6.84, 7.63, 8.91, 10.12, 11.65, 27.20, 30.14, 32.85, 36.19],
"20":[7.43, 8.26, 9.59, 10.85, 12.44, 28.41, 31.41, 34.17, 37.57],
"22":[8.64 ,9.54 ,10.98 ,12.34 ,14.04 ,30.81 ,33.92 ,36.78 ,40.29],
"24":[9.89 ,10.86, 12.40, 13.85, 15.66, 33.20, 36.42, 39.36, 42.98],
"26":[11.16,12.20, 13.84, 15.38, 17.29, 35.56, 38.89, 41.92, 45.64],

"28":[12.46,13.56, 15.31, 16.93, 18.94, 37.92, 41.34, 44.46, 48.28],

"30":[13.79, 14.95, 16.79, 18.49, 20.60, 40.26, 43.77, 46.98, 50.89],
"32":[15.13, 16.36, 18.29, 20.07, 22.27, 42.58, 46.19, 49.48, 53.49],
"34":[16.50, 17.79, 19.81, 21.66, 23.95, 44.90, 48.60, 51.97, 56.06],
"38":[19.29, 20.69, 22.88, 24.88, 27.34, 49.51, 53.38, 56.90, 61.16],
"42":[ 22.14, 23.65, 26.00, 28.14, 30.77, 54.09, 58.12, 61.78, 66.21],
"46":[25.04, 26.66, 29.16, 31.44, 34.22, 58.64, 62.83, 66.62, 71.20],
"50":[27.99, 29.71, 32.36, 34.76, 37.69, 63.17, 67.50, 71.42, 76.15],
"55":[31.73, 33.57, 36.40, 38.96, 42.06, 68.80, 73.31, 77.38,82.29],
"60":[ 35.53, 37.48, 40.48, 43.19, 46.46, 74.40, 79.08, 83.30, 88.38],
"65":[39.38, 41.44, 44.60, 47.45, 50.88, 79.9, 84.82, 89.18, 94.42],
"70":[43.28, 45.44, 48.76, 51.74, 55.33, 85.53,90.53, 95.02, 100.43],
"75":[47.21, 49.48, 52.94, 56.05, 59.79, 91.06 ,96.22, 100.84, 106.39],
"80":[51.17, 53.54, 57.15, 60.39, 64.28, 96.58 ,101.88, 106.63, 112.33],
"85":[55.17, 57.63, 61.39, 64.75, 68.78, 102.08, 107.52, 112.39, 118.24],
"90":[59.20, 61.75, 65.65, 69.13, 73.29, 107.57, 113.15, 118.14, 124.12],
"95":[63.25, 65.90, 69.92, 73.52, 77.82, 113.04, 118.75, 123.86, 129.97],
"100":[67.33, 70.06, 74.22, 77.93, 82.36, 118.50, 124.34, 129.56, 135.81]
}

var sig={0.995:0, 0.99:1,0.975:2,0.95:3,0.9:4,
         0.1:5,0.05:6,0.025:7,0.01:8}
function chiCrit(df,alpha=0.05){
  return chiTab[df][sig[alpha]]
}

