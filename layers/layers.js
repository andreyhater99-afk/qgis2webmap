var wms_layers = [];


        var lyr_YandexSatellite_0 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://sat04.maps.yandex.net/tiles?l=sat&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_2gisMap_2 = new ol.layer.Tile({
            'title': '2gis Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1.1'
            })
        });
var format_building_3 = new ol.format.GeoJSON();
var features_building_3 = format_building_3.readFeatures(json_building_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_3.addFeatures(features_building_3);
var lyr_building_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_3, 
                style: style_building_3,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_3.png" /> building'
            });
var format_highway_4 = new ol.format.GeoJSON();
var features_highway_4 = format_highway_4.readFeatures(json_highway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_4.addFeatures(features_highway_4);
var lyr_highway_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_4, 
                style: style_highway_4,
                popuplayertitle: 'highway',
                interactive: true,
    title: 'highway<br />\
    <img src="styles/legend/highway_4_0.png" /> residential<br />\
    <img src="styles/legend/highway_4_1.png" /> service<br />\
    <img src="styles/legend/highway_4_2.png" /> track<br />\
    <img src="styles/legend/highway_4_3.png" /> trunk<br />\
    <img src="styles/legend/highway_4_4.png" /> unclassified<br />\
    <img src="styles/legend/highway_4_5.png" /> <br />' });

lyr_YandexSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_2gisMap_2.setVisible(true);lyr_building_3.setVisible(true);lyr_highway_4.setVisible(true);
var layersList = [lyr_YandexSatellite_0,lyr_OSMStandard_1,lyr_2gisMap_2,lyr_building_3,lyr_highway_4];
lyr_building_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building:levels': 'building:levels', 'religion': 'religion', 'amenity': 'amenity', 'addr:region': 'addr:region', 'addr:district': 'addr:district', 'addr:country': 'addr:country', 'address': 'address', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', });
lyr_highway_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'wikipedia': 'wikipedia', 'ref': 'ref', 'oneway': 'oneway', 'old_ref': 'old_ref', 'name:uz-Latn': 'name:uz-Latn', 'name:uz-Cyrl': 'name:uz-Cyrl', 'name:uz-Arab': 'name:uz-Arab', 'name:uz': 'name:uz', 'name:ug': 'name:ug', 'name:tg': 'name:tg', 'name:ru': 'name:ru', 'name:ky-Cyrl': 'name:ky-Cyrl', 'name:ky-Arab': 'name:ky-Arab', 'name:ky': 'name:ky', 'name:kk-Latn': 'name:kk-Latn', 'name:kk-Cyrl': 'name:kk-Cyrl', 'name:kk-Arab': 'name:kk-Arab', 'name:kk': 'name:kk', 'name:fa': 'name:fa', 'layer': 'layer', 'lanes': 'lanes', 'bridge': 'bridge', 'maxspeed': 'maxspeed', 'surface': 'surface', 'service': 'service', 'name': 'name', });
lyr_building_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'building:levels': '', 'religion': '', 'amenity': '', 'addr:region': '', 'addr:district': '', 'addr:country': '', 'address': '', 'addr:street': '', 'addr:housenumber': '', });
lyr_highway_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'wikipedia': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'old_ref': 'TextEdit', 'name:uz-Latn': 'TextEdit', 'name:uz-Cyrl': 'TextEdit', 'name:uz-Arab': 'TextEdit', 'name:uz': 'TextEdit', 'name:ug': 'TextEdit', 'name:tg': 'TextEdit', 'name:ru': 'TextEdit', 'name:ky-Cyrl': 'TextEdit', 'name:ky-Arab': 'TextEdit', 'name:ky': 'TextEdit', 'name:kk-Latn': 'TextEdit', 'name:kk-Cyrl': 'TextEdit', 'name:kk-Arab': 'TextEdit', 'name:kk': 'TextEdit', 'name:fa': 'TextEdit', 'layer': 'TextEdit', 'lanes': 'TextEdit', 'bridge': 'TextEdit', 'maxspeed': 'TextEdit', 'surface': 'TextEdit', 'service': 'TextEdit', 'name': 'TextEdit', });
lyr_building_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'building:levels': 'no label', 'religion': 'no label', 'amenity': 'no label', 'addr:region': 'no label', 'addr:district': 'no label', 'addr:country': 'no label', 'address': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', });
lyr_highway_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'wikipedia': 'no label', 'ref': 'no label', 'oneway': 'no label', 'old_ref': 'no label', 'name:uz-Latn': 'no label', 'name:uz-Cyrl': 'no label', 'name:uz-Arab': 'no label', 'name:uz': 'no label', 'name:ug': 'no label', 'name:tg': 'no label', 'name:ru': 'no label', 'name:ky-Cyrl': 'no label', 'name:ky-Arab': 'no label', 'name:ky': 'no label', 'name:kk-Latn': 'no label', 'name:kk-Cyrl': 'no label', 'name:kk-Arab': 'no label', 'name:kk': 'no label', 'name:fa': 'no label', 'layer': 'no label', 'lanes': 'no label', 'bridge': 'no label', 'maxspeed': 'no label', 'surface': 'no label', 'service': 'no label', 'name': 'no label', });
lyr_highway_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});