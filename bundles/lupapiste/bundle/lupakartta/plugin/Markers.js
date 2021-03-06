/**
 *
 */
Oskari.clazz.define('Oskari.lupapiste.bundle.lupakartta.plugin.MarkersPlugin', function() {
	this.mapModule = null;
	this.pluginName = null;
	this._sandbox = null;
	this._map = null;
}, {
	__name : 'lupakartta.MarkersPlugin',

	_markers : new Array(),

	getName : function() {
		return this.pluginName;
	},

	getMapModule : function() {
		return this.mapModule;
	},
	setMapModule : function(mapModule) {
		this.mapModule = mapModule;
		this.pluginName = mapModule.getName() + this.__name;
	},

	init : function(sandbox) {
		var me = this;
		this.requestHandlers = {
			clearMapHandler : Oskari.clazz.create('Oskari.lupapiste.bundle.lupakartta.request.ClearMapRequestHandler', sandbox, me),
			addMarkerHandler : Oskari.clazz.create('Oskari.lupapiste.bundle.lupakartta.request.AddMarkerRequestHandler', sandbox, me)
		};
	},

	register : function() {

	},
	unregister : function() {

	},

	startPlugin : function(sandbox) {
		this._sandbox = sandbox;
		this._map = this.getMapModule().getMap();

		this.createMapMarkersLayer();

		sandbox.register(this);
		for (p in this.eventHandlers ) {
			sandbox.registerForEventByName(this, p);
		}
		sandbox.addRequestHandler('lupakartta.ClearMapRequest', this.requestHandlers.clearMapHandler);
		sandbox.addRequestHandler('lupakartta.AddMarkerRequest', this.requestHandlers.addMarkerHandler);
	},
	stopPlugin : function(sandbox) {

		for (p in this.eventHandlers ) {
			sandbox.unregisterFromEventByName(this, p);
		}
		sandbox.removeRequestHandler('lupakartta.ClearMapRequest', this.requestHandlers.clearMapHandler);
		sandbox.removeRequestHandler('lupakartta.AddMarkerRequest', this.requestHandlers.addMarkerHandler);
		sandbox.unregister(this);
		this._map = null;
		this._sandbox = null;
	},

	/* @method start
	 * called from sandbox
	 */
	start : function(sandbox) {
	},
	/**
	 * @method stop
	 * called from sandbox
	 *
	 */
	stop : function(sandbox) {
	},

	eventHandlers : {
		'AfterHideMapMarkerEvent' : function(event) {
			this.afterHideMapMarkerEvent(event);
		}
	},

	onEvent : function(event) {
		return this.eventHandlers[event.getName()].apply(this, [event]);
	},

	/**
	 *
	 */
	createMapMarkersLayer : function() {
		var sandbox = this._sandbox;
		var layerMarkers = new OpenLayers.Layer.Markers("LupapisteMarkers");
		this._map.addLayer(layerMarkers);
		this._map.setLayerIndex(layerMarkers, 1000);
	},

	/***********************************************************
	 * Handle HideMapMarkerEvent
	 *
	 * @param {Object}
	 *            event
	 */
	afterHideMapMarkerEvent : function(event) {
		var markerLayer = this._map.getLayersByName("LupapisteMarkers");
		if (markerLayer != null && markerLayer[0] != null) {
			markerLayer[0].setVisibility(false);
		}
	},

	clearMapMarkers : function() {
		var markerLayer = this._map.getLayersByName("LupapisteMarkers");
		if (markerLayer != null && markerLayer[0] != null) {
			markerLayer[0].clearMarkers();
		}
		this._markers.length = 0;
	},

	getMapMarkerBounds : function() {
		var markerLayer = this._map.getLayersByName("LupapisteMarkers");
		if (markerLayer != null && markerLayer[0] != null) {
			return markerLayer[0].getDataExtent();
		}
	},

	addMapMarker : function(x, y, id, events, iconUrl) {
		if (!id) {
			id = this._markers.length + 1;
			id = "id" + id;
		}
		if (!iconUrl) {
			iconUrl = 'http://www.openlayers.org/dev/img/marker.png'
		}
		var markerLayer = this._map.getLayersByName("LupapisteMarkers");
		var size = new OpenLayers.Size(21, 25);
		var offset = new OpenLayers.Pixel(-(size.w / 2), -size.h);
		var icon = new OpenLayers.Icon(iconUrl, size, offset);
		var marker = new OpenLayers.Marker(new OpenLayers.LonLat(x, y), icon);
		this._markers[id] = marker;
		if (events) {
			for (i in events) {
				marker.events.register(i, marker, events[i]);
			}
		}
		markerLayer[0].addMarker(marker);
	}
}, {
	'protocol' : ["Oskari.mapframework.module.Module", "Oskari.mapframework.ui.module.common.mapmodule.Plugin"]
});
