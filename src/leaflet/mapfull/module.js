define([
	"src/oskari/oskari",
	"jquery",
	"src/framework/oskariui/module",
	"./instance",
	"bundles/framework/bundle/mapfull/enhancement/start-map-with-link-enhancement",
	"bundles/framework/bundle/mapfull/request/MapResizeEnabledRequest",
	"bundles/framework/bundle/mapfull/request/MapResizeEnabledRequestHandler",
	"bundles/framework/bundle/mapfull/request/MapWindowFullScreenRequest",
	"bundles/framework/bundle/mapfull/request/MapWindowFullScreenRequestHandler",
	"src/leaflet/mapmodule-plugin/module",
	"css!resources/framework/bundle/mapfull/css/style.css"
], function(Oskari, jQuery) {

	Oskari.bundleCls('oskariui');
	
	return Oskari.bundleCls("mapfull").category({
		create: function() {
			return Oskari.clazz.create("Oskari.leaflet.bundle.mapfull.MapFullBundleInstance");
		},
		update: function(manager, bundle, bi, info) {

		}
	})
});