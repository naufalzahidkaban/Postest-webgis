var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KecamatanGenteng_1 = new ol.format.GeoJSON();
var features_KecamatanGenteng_1 = format_KecamatanGenteng_1.readFeatures(json_KecamatanGenteng_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanGenteng_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanGenteng_1.addFeatures(features_KecamatanGenteng_1);
var lyr_KecamatanGenteng_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KecamatanGenteng_1, 
                style: style_KecamatanGenteng_1,
                popuplayertitle: "Kecamatan Genteng",
                interactive: true,
                title: '<img src="styles/legend/KecamatanGenteng_1.png" /> Kecamatan Genteng'
            });
var format_d_JaringanJalan_Fixed_2 = new ol.format.GeoJSON();
var features_d_JaringanJalan_Fixed_2 = format_d_JaringanJalan_Fixed_2.readFeatures(json_d_JaringanJalan_Fixed_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_d_JaringanJalan_Fixed_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_d_JaringanJalan_Fixed_2.addFeatures(features_d_JaringanJalan_Fixed_2);
var lyr_d_JaringanJalan_Fixed_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_d_JaringanJalan_Fixed_2, 
                style: style_d_JaringanJalan_Fixed_2,
                popuplayertitle: "d_JaringanJalan_Fixed",
                interactive: true,
                title: '<img src="styles/legend/d_JaringanJalan_Fixed_2.png" /> d_JaringanJalan_Fixed'
            });
var format_d_Halte_Surabaya_3 = new ol.format.GeoJSON();
var features_d_Halte_Surabaya_3 = format_d_Halte_Surabaya_3.readFeatures(json_d_Halte_Surabaya_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_d_Halte_Surabaya_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_d_Halte_Surabaya_3.addFeatures(features_d_Halte_Surabaya_3);
var lyr_d_Halte_Surabaya_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_d_Halte_Surabaya_3, 
                style: style_d_Halte_Surabaya_3,
                popuplayertitle: "d_Halte_Surabaya",
                interactive: true,
                title: '<img src="styles/legend/d_Halte_Surabaya_3.png" /> d_Halte_Surabaya'
            });
var format_OutputPolygon_4 = new ol.format.GeoJSON();
var features_OutputPolygon_4 = format_OutputPolygon_4.readFeatures(json_OutputPolygon_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OutputPolygon_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OutputPolygon_4.addFeatures(features_OutputPolygon_4);
var lyr_OutputPolygon_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OutputPolygon_4, 
                style: style_OutputPolygon_4,
                popuplayertitle: "Output Polygon",
                interactive: true,
    title: 'Output Polygon<br />\
    <img src="styles/legend/OutputPolygon_4_0.png" /> 500,0000000<br />\
    <img src="styles/legend/OutputPolygon_4_1.png" /> 1000,0000000<br />\
    <img src="styles/legend/OutputPolygon_4_2.png" /> 1500,0000000<br />\
    <img src="styles/legend/OutputPolygon_4_3.png" /> 2000,0000000<br />\
    <img src="styles/legend/OutputPolygon_4_4.png" /> 2500,0000000<br />\
    <img src="styles/legend/OutputPolygon_4_5.png" /> 3000,0000000<br />'
        });
var format_Servicearealines_5 = new ol.format.GeoJSON();
var features_Servicearealines_5 = format_Servicearealines_5.readFeatures(json_Servicearealines_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicearealines_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearealines_5.addFeatures(features_Servicearealines_5);
var lyr_Servicearealines_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servicearealines_5, 
                style: style_Servicearealines_5,
                popuplayertitle: "Service area (lines)",
                interactive: true,
                title: '<img src="styles/legend/Servicearealines_5.png" /> Service area (lines)'
            });
var format_Cleaned_6 = new ol.format.GeoJSON();
var features_Cleaned_6 = format_Cleaned_6.readFeatures(json_Cleaned_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cleaned_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cleaned_6.addFeatures(features_Cleaned_6);
var lyr_Cleaned_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cleaned_6, 
                style: style_Cleaned_6,
                popuplayertitle: "Cleaned",
                interactive: true,
                title: '<img src="styles/legend/Cleaned_6.png" /> Cleaned'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_KecamatanGenteng_1.setVisible(true);lyr_d_JaringanJalan_Fixed_2.setVisible(true);lyr_d_Halte_Surabaya_3.setVisible(true);lyr_OutputPolygon_4.setVisible(true);lyr_Servicearealines_5.setVisible(true);lyr_Cleaned_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KecamatanGenteng_1,lyr_d_JaringanJalan_Fixed_2,lyr_d_Halte_Surabaya_3,lyr_OutputPolygon_4,lyr_Servicearealines_5,lyr_Cleaned_6];
lyr_KecamatanGenteng_1.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', });
lyr_d_JaringanJalan_Fixed_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'bridge': 'bridge', 'tunnel': 'tunnel', 'width': 'width', 'highway': 'highway', 'surface': 'surface', 'railway': 'railway', 'layer': 'layer', 'oneway': 'oneway', 'name': 'name', 'smoothness': 'smoothness', });
lyr_d_Halte_Surabaya_3.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'Jangkauan': 'Jangkauan', });
lyr_OutputPolygon_4.set('fieldAliases', {'id': 'id', 'cost_level': 'cost_level', });
lyr_Servicearealines_5.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'Jangkauan': 'Jangkauan', 'type': 'type', 'start': 'start', });
lyr_Cleaned_6.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'Jangkauan': 'Jangkauan', });
lyr_KecamatanGenteng_1.set('fieldImages', {'full_id': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', });
lyr_d_JaringanJalan_Fixed_2.set('fieldImages', {'fid': '', 'osm_id': '', 'bridge': '', 'tunnel': '', 'width': '', 'highway': '', 'surface': '', 'railway': '', 'layer': '', 'oneway': '', 'name': '', 'smoothness': '', });
lyr_d_Halte_Surabaya_3.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'Jangkauan': 'TextEdit', });
lyr_OutputPolygon_4.set('fieldImages', {'id': 'Range', 'cost_level': 'TextEdit', });
lyr_Servicearealines_5.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'Jangkauan': '', 'type': '', 'start': '', });
lyr_Cleaned_6.set('fieldImages', {'fid': '', 'cat': '', 'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'Jangkauan': '', });
lyr_KecamatanGenteng_1.set('fieldLabels', {'full_id': 'no label', 'Kecamatan': 'no label', 'Kelurahan': 'no label', });
lyr_d_JaringanJalan_Fixed_2.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'width': 'no label', 'highway': 'no label', 'surface': 'no label', 'railway': 'no label', 'layer': 'no label', 'oneway': 'no label', 'name': 'no label', 'smoothness': 'no label', });
lyr_d_Halte_Surabaya_3.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'Jangkauan': 'no label', });
lyr_OutputPolygon_4.set('fieldLabels', {'id': 'no label', 'cost_level': 'no label', });
lyr_Servicearealines_5.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'Jangkauan': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_Cleaned_6.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', 'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'Jangkauan': 'no label', });
lyr_Cleaned_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});