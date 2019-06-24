Vue.use(VueFusionCharts, FusionCharts);
var app = new Vue({
    el: '#chart1',
    data: {
        width: '100%',
        height: '380',
        type: 'column2d',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "El producto más vendido es el Vidrio",
                "subCaption": "",
                "xAxisName": "Productos",
                "yAxisName": "Cantidad",
                "numberSuffix": "K",
                "theme": "fusion"
            },
            "data": [{
                "label": "Vidrios",
                "value": "2.9"
            }, {
                "label": "Policarbonato",
                "value": "2.6"
            }, {
                "label": "Espejos",
                "value": "1.8"
            }, {
                "label": "Herrajes",
                "value": "1.4"
            },
              {
                "label": "Agarraderas",
                "value": "1.1"
            },{
                "label": "Maquinarias",
                "value": "0.1"
            }, {
                "label": "Pisos",
                "value": "0.7"
            }, {
                "label": "Porcelanatos",
                "value": "1"
            }]
        }
    }

});


var app = new Vue({
    el: '#chart2',
    data: {
        width: '100%',
        height: '380',
        type: 'pyramid',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Costos-Proveedores",
                "theme": "fusion",
                "showvalues": "1",
                "numberprefix": "$",
                "plottooltext":
                    "Se pagó <b>$dataValue</b> a <b>$label</b> por sus productos",
                "is2d": "0"
            },
            "data": [{
                "label": "HaiDeli",
                "value": "1550"
            }, {
                "label": "Polytech",
                "value": "1700"
            }, {
                "label": "SunTech",
                "value": "2300"
            },
            {
                "label": "Xinyi Glass",
                "value": "3500"
            }, {
                "label": "Piceva",
                "value": "4150"
            }]
        }
    }

});

var app = new Vue({
    el: '#chart3',
    data: {
        width: '100%',
        height: '380',
        type: 'angulargauge',
        dataFormat: 'json',
        dataSource: {

            "chart": {
                "caption": "Nordstorm's Customer Satisfaction Score for 2017",
                "lowerLimit": "0",
                "upperLimit": "100",
                "showValue": "1",
                "numberSuffix": "%",
                "theme": "fusion",
                "showToolTip": "0"
            },
            "colorRange": {
                "color": [
                    {
                        "minValue": "0",
                        "maxValue": "50",
                        "code": "#F2726F"
                    },
                    {
                        "minValue": "50",
                        "maxValue": "75",
                        "code": "#FFC533"
                    },
                    {
                        "minValue": "75",
                        "maxValue": "100",
                        "code": "#62B58F"
                    }
                ]
            },
            "dials": {
                "dial": [
                    {
                        "value": "81"
                    }
                ]
            }


        }
    }

});
var app = new Vue({
    el: '#chart4',
    data: {
        width: '100%',
        height: '550',
        type: 'multilevelpie',
        dataFormat: 'json',
        dataSource: {

"chart": {
    "caption": "La categoría con mayor ventas es Vidrios y Espejos ($55.5k)",
    "showplotborder": "1",
    "plotfillalpha": "60",
    "hoverfillcolor": "#CCCCCC",
    "numberprefix": "$",
    "plottooltext": "La venta de <b>$label</b> fue de <b>$$valueK</b>, el cual representa un $percentValue de su categoría",
    "theme": "fusion"
  },
  "category": [
    {
      "label": "Productos",
      "tooltext": "Por favor pase sobre las subcatergorías para ver detalles",
      "color": "#ffffff",
      "value": "150",
      "category": [
        {
          "label": "Vidrios y Espejos",
          "color": "#f8bd19",
          "value": "55.5",
          "category": [
            {
              "label": "Vidrio Lake",
              "color": "#f8bd19",
              "value": "11.1"
            },
            {
              "label": "Vidrio Catedral ",
              "color": "#f8bd19",
              "value": "20.75"
            },
            {
              "label": "Vidrio Grayliti ",
              "color": "#f8bd19",
              "value": "9.99"
            },
            {
              "label": "Espejos Flotados",
              "color": "#f8bd19",
              "value": "13.66"
            }
          ]
        },
        {
          "label": "Maquinarias",
          "color": "#33ccff",
          "value": "42",
          "category": [
            {
              "label": "Perforadoras",
              "color": "#33ccff",
              "value": "10.08"
            },
            {
              "label": "Biseladoras",
              "color": "#33ccff",
              "value": "18.9"
            },
            {
              "label": "Canteadoras",
              "color": "#33ccff",
              "value": "6.3"
            },
            {
              "label": "Muelas",
              "color": "#33ccff",
              "value": "6.72"
            }
          ]
        },
        {
          "label": "Porcelanato",
          "color": "#ffcccc",
          "value": "22.5",
          "category": [
            {
              "label": "Flaviker",
              "color": "#ffcccc",
              "value": "6.45"
            },
            {
              "label": "Mirage Dark",
              "color": "#ffcccc",
              "value": "9.3"
            },
            {
              "label": "New Ker",
              "color": "#ffcccc",
              "value": "6.75"
            }
          ]
        },
        {
          "label": "Herramientas",
          "color": "#ccff66",
          "value": "30",
          "category": [
            {
              "label": "Viceras",
              "color": "#ccff66",
              "value": "8.1"
            },
            {
              "label": "Herrajes",
              "color": "#ccff66",
              "value": "10.5"
            },
            {
              "label": "Puntos Fijos",
              "color": "#ccff66",
              "value": "11.4"
            }
          ]
        }
      ]
    }
  ]
}}});

var app = new Vue({
    el: '#chart5',
    data: {
        width: '100%',
        height: '380',
        type: 'angulargauge',
        dataFormat: 'json',
        dataSource: {
"chart": {
    "caption": "Se recomienda un reabastecimiento del inventario",
    "lowerlimit": "0",
    "upperlimit": "100",
    "showvalue": "1",
    "numbersuffix": "%",
    "theme": "fusion",
    "showtooltip": "0"
  },
  "colorrange": {
    "color": [
      {
        "minvalue": "0",
        "maxvalue": "50",
        "code": "#F2726F"
      },
      {
        "minvalue": "50",
        "maxvalue": "75",
        "code": "#FFC533"
      },
      {
        "minvalue": "75",
        "maxvalue": "100",
        "code": "#62B58F"
      }
    ]
  },
  "dials": {
    "dial": [
      {
        "value": "55"
      }
    ]
  }
}}});