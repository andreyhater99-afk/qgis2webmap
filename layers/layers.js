var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRISatellite_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_ext_2 = new ol.format.GeoJSON();
var features_ext_2 = format_ext_2.readFeatures(json_ext_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ext_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ext_2.addFeatures(features_ext_2);
var lyr_ext_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ext_2, 
                style: style_ext_2,
                popuplayertitle: 'ext',
                interactive: true,
                title: '<img src="styles/legend/ext_2.png" /> ext'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'Дорожная сеть',
                interactive: true,
    title: 'Дорожная сеть<br />\
    <img src="styles/legend/_3_0.png" /> residential<br />\
    <img src="styles/legend/_3_1.png" /> service<br />\
    <img src="styles/legend/_3_2.png" /> track<br />\
    <img src="styles/legend/_3_3.png" /> trunk<br />\
    <img src="styles/legend/_3_4.png" /> unclassified<br />\
    <img src="styles/legend/_3_5.png" /> <br />' });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'Здания',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> Здания'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ESRISatellite_1.setVisible(true);lyr_ext_2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ESRISatellite_1,lyr_ext_2,lyr__3,lyr__4];
lyr_ext_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr__3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'wikipedia': 'wikipedia', 'ref': 'ref', 'oneway': 'oneway', 'old_ref': 'old_ref', 'name:uz-Latn': 'name:uz-Latn', 'name:uz-Cyrl': 'name:uz-Cyrl', 'name:uz-Arab': 'name:uz-Arab', 'name:uz': 'name:uz', 'name:ug': 'name:ug', 'name:tg': 'name:tg', 'name:ru': 'name:ru', 'name:ky-Cyrl': 'name:ky-Cyrl', 'name:ky-Arab': 'name:ky-Arab', 'name:ky': 'name:ky', 'name:kk-Latn': 'name:kk-Latn', 'name:kk-Cyrl': 'name:kk-Cyrl', 'name:kk-Arab': 'name:kk-Arab', 'name:kk': 'name:kk', 'name:fa': 'name:fa', 'layer': 'layer', 'lanes': 'lanes', 'bridge': 'bridge', 'maxspeed': 'maxspeed', 'surface': 'surface', 'service': 'service', 'name': 'name', });
lyr__4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building:levels': 'building:levels', 'religion': 'religion', 'amenity': 'amenity', 'addr:region': 'addr:region', 'addr:district': 'addr:district', 'addr:country': 'addr:country', 'address': 'address', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', });
lyr_ext_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr__3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'wikipedia': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'old_ref': 'TextEdit', 'name:uz-Latn': 'TextEdit', 'name:uz-Cyrl': 'TextEdit', 'name:uz-Arab': 'TextEdit', 'name:uz': 'TextEdit', 'name:ug': 'TextEdit', 'name:tg': 'TextEdit', 'name:ru': 'TextEdit', 'name:ky-Cyrl': 'TextEdit', 'name:ky-Arab': 'TextEdit', 'name:ky': 'TextEdit', 'name:kk-Latn': 'TextEdit', 'name:kk-Cyrl': 'TextEdit', 'name:kk-Arab': 'TextEdit', 'name:kk': 'TextEdit', 'name:fa': 'TextEdit', 'layer': 'TextEdit', 'lanes': 'TextEdit', 'bridge': 'TextEdit', 'maxspeed': 'TextEdit', 'surface': 'TextEdit', 'service': 'TextEdit', 'name': 'TextEdit', });
lyr__4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building:levels': 'TextEdit', 'religion': 'TextEdit', 'amenity': 'TextEdit', 'addr:region': 'TextEdit', 'addr:district': 'TextEdit', 'addr:country': 'TextEdit', 'address': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', });
lyr_ext_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr__3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'wikipedia': 'no label', 'ref': 'no label', 'oneway': 'no label', 'old_ref': 'no label', 'name:uz-Latn': 'no label', 'name:uz-Cyrl': 'no label', 'name:uz-Arab': 'no label', 'name:uz': 'no label', 'name:ug': 'no label', 'name:tg': 'no label', 'name:ru': 'no label', 'name:ky-Cyrl': 'no label', 'name:ky-Arab': 'no label', 'name:ky': 'no label', 'name:kk-Latn': 'no label', 'name:kk-Cyrl': 'no label', 'name:kk-Arab': 'no label', 'name:kk': 'no label', 'name:fa': 'no label', 'layer': 'no label', 'lanes': 'no label', 'bridge': 'no label', 'maxspeed': 'no label', 'surface': 'no label', 'service': 'no label', 'name': 'no label', });
lyr__4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'building:levels': 'no label', 'religion': 'no label', 'amenity': 'no label', 'addr:region': 'no label', 'addr:district': 'no label', 'addr:country': 'no label', 'address': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', });
lyr__4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});