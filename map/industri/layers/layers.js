var wms_layers = [];


var lyr_openmapfree_0 = new ol.layer.Group({
    title: 'openmapfree',
    type: '',
    combine: true,
});
olms.apply(lyr_openmapfree_0, 'https://tiles.openfreemap.org/styles/liberty');

var format_LapakGIScom_BATAS_KABKOTA_AR_EDISI_JULI_2026__1 = new ol.format.GeoJSON();
var features_LapakGIScom_BATAS_KABKOTA_AR_EDISI_JULI_2026__1 = format_LapakGIScom_BATAS_KABKOTA_AR_EDISI_JULI_2026__1.readFeatures(json_LapakGIScom_BATAS_KABKOTA_AR_EDISI_JULI_2026__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIScom_BATAS_KABKOTA_AR_EDISI_JULI_2026__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LapakGIScom_BATAS_KABKOTA_AR_EDISI_JULI_2026__1.addFeatures(features_LapakGIScom_BATAS_KABKOTA_AR_EDISI_JULI_2026__1);
var lyr_LapakGIScom_BATAS_KABKOTA_AR_EDISI_JULI_2026__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LapakGIScom_BATAS_KABKOTA_AR_EDISI_JULI_2026__1, 
                style: style_LapakGIScom_BATAS_KABKOTA_AR_EDISI_JULI_2026__1,
                popuplayertitle: '[LapakGIS.com]_BATAS_KABKOTA_AR_EDISI_JULI_2026_',
                interactive: true,
    title: '[LapakGIS.com]_BATAS_KABKOTA_AR_EDISI_JULI_2026_<br />\
    <img src="styles/legend/LapakGIScom_BATAS_KABKOTA_AR_EDISI_JULI_2026__1_0.png" /> 1083 - 3348<br />\
    <img src="styles/legend/LapakGIScom_BATAS_KABKOTA_AR_EDISI_JULI_2026__1_1.png" /> 3348 - 7398<br />\
    <img src="styles/legend/LapakGIScom_BATAS_KABKOTA_AR_EDISI_JULI_2026__1_2.png" /> 7398 - 38691<br />' });

lyr_openmapfree_0.setVisible(true);lyr_LapakGIScom_BATAS_KABKOTA_AR_EDISI_JULI_2026__1.setVisible(true);
var layersList = [lyr_openmapfree_0,lyr_LapakGIScom_BATAS_KABKOTA_AR_EDISI_JULI_2026__1];
lyr_LapakGIScom_BATAS_KABKOTA_AR_EDISI_JULI_2026__1.set('fieldAliases', {'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'industri': 'industri', });
lyr_LapakGIScom_BATAS_KABKOTA_AR_EDISI_JULI_2026__1.set('fieldImages', {'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'industri': 'TextEdit', });
lyr_LapakGIScom_BATAS_KABKOTA_AR_EDISI_JULI_2026__1.set('fieldLabels', {'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'industri': 'inline label - always visible', });
lyr_LapakGIScom_BATAS_KABKOTA_AR_EDISI_JULI_2026__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});