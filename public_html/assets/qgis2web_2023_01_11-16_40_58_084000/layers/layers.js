var wms_layers = [];

        var lyr_googlemap_0 = new ol.layer.Tile({
            'title': 'googlemap_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });var format_LapakGIScomBatas_Kecamatan_BIG_PPBW_1 = new ol.format.GeoJSON();
var features_LapakGIScomBatas_Kecamatan_BIG_PPBW_1 = format_LapakGIScomBatas_Kecamatan_BIG_PPBW_1.readFeatures(json_LapakGIScomBatas_Kecamatan_BIG_PPBW_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_1.addFeatures(features_LapakGIScomBatas_Kecamatan_BIG_PPBW_1);var lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_1, 
                style: style_LapakGIScomBatas_Kecamatan_BIG_PPBW_1,
    title: '[LapakGIS.com] Batas_Kecamatan_BIG_PPBW<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_1_0.png" /> Batangan<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_1_1.png" /> Cluwak<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_1_2.png" /> Dukuhseti<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_1_3.png" /> Gabus<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_1_4.png" /> Gembong<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_1_5.png" /> Gunungwungkal<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_1_6.png" /> Jaken<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_1_7.png" /> Jakenan<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_1_8.png" /> Juwana<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_1_9.png" /> Kayen<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_1_10.png" /> Margorejo<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_1_11.png" /> Margoyoso<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_1_12.png" /> Pati<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_1_13.png" /> Pucakwangi<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_1_14.png" /> Sukolilo<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_1_15.png" /> Tambakromo<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_1_16.png" /> Tayu<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_1_17.png" /> Tlogowungu<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_1_18.png" /> Trangkil<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_1_19.png" /> Wedarijaksa<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_1_20.png" /> Winong<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_1_21.png" /> <br />'
        });

lyr_googlemap_0.setVisible(true);lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_1.setVisible(true);
var layersList = [lyr_googlemap_0,lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_1];
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_1.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Kabupaten': 'Kabupaten', 'SapiPotong': 'SapiPotong', 'Kambing': 'Kambing', 'AyamRas': 'AyamRas', 'Domba': 'Domba', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_1.set('fieldImages', {'Kecamatan': 'TextEdit', 'Kabupaten': 'TextEdit', 'SapiPotong': 'TextEdit', 'Kambing': 'TextEdit', 'AyamRas': 'TextEdit', 'Domba': 'TextEdit', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_1.set('fieldLabels', {'Kecamatan': 'inline label', 'Kabupaten': 'inline label', 'SapiPotong': 'inline label', 'Kambing': 'inline label', 'AyamRas': 'inline label', 'Domba': 'inline label', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});