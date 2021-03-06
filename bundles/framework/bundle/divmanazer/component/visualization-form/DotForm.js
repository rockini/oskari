/**
 * @class Oskari.userinterface.component.visualization-form.PointForm
 *
 * Shows a form for point rendering options
 */
Oskari.clazz.define("Oskari.userinterface.component.visualization-form.DotForm",

    /**
     * @method create called automatically on construction
     * @static
     */

    function (creator, loc, defaultValues) {
        this.creator = creator;
        this.loc = loc;
        this.defaultValues = defaultValues;

        this.values = {
            size: this.defaultValues.size,
            color: this.defaultValues.color,
            shape: this.defaultValues.shape
        };

        // Minimum dot size
        if (this.defaultValues.dotMinSize !== null && this.defaultValues.dotMinSize !== undefined) {
            this.minSize = this.defaultValues.dotMinSize;
        } else {
            this.minSize = 1;
        }

        // Maximum dot size
        if (this.defaultValues.dotMaxSize) {
            this.maxSize = this.defaultValues.dotMaxSize;
        } else {
            this.maxSize = 5;
        }

        this.basicColors = ["#ffffff", "#666666", "#ffde00", "#f8931f", "#ff3334", "#bf2652",
            "#000000", "#cccccc", "#652d90", "#3233ff", "#26bf4b", "#00ff01"
            ];
        this.paper = null;
        this.activeColorCell = 6;

        this.symbolButtons = {
            'square': {
                iconCls: 'marker-square',
                iconId: 1,
                offset: [5,36],
                scale: 2
                //            tooltip : loc.tooltip, //todo
            },
            'dot': {
                iconCls: 'marker-dot',
                iconId: 5,
                offset: [5,30],
                scale: 0
                //            tooltip : loc.tooltip, //todo
            },
            'arrow': {
                iconCls: 'marker-arrow',
                iconId: 6,
                offset: [5,35],
                scale: 2
                //            tooltip : loc.tooltip, //todo
            },
            'pin': {
                iconCls: 'marker-pin',
                iconId: 3,
                offset: [2,35],
                scale: 2
                //            tooltip : loc.tooltip, //todo
            },
            'pin2': {
                iconCls: 'marker-pin2',
                iconId: 2,
                offset: [5,35],
                scale: 2
                //            tooltip : loc.tooltip, //todo
            },
            'stud': {
                iconCls: 'marker-stud',
                iconId: 0,
                offset: [2,35],
                scale: 2
                //            tooltip : loc.tooltip, //todo
            },
            'flag': {
                iconCls: 'marker-flag',
                iconId: 4,
                offset: [9,35],
                scale: 2
                //            tooltip : loc.tooltip, //todo
            }
        };

        this.templateSymbolDialogContent = jQuery('<div class="pointform">' +
            '<div class="container">' +
            '<div class="column1">' +
            '<label>' + this.loc.symbol.label + '</label>' +
            '<div class="symbols icon-buttons"></div>' +
            '<label>' + this.loc.size.label + '</label><br>' +
            '<div class="sizer-values"></div>' +
            '<div class="sizer"></div>' +
            '</div>' +
            '<div class="column2">' +
            '<div class="column21">' +
            '<label>' + this.loc.color.label + '</label>' +
            '<div class="color-grid">' +
            '<div class="color-rectangle"></div>' +
            '</div>' +
            '<div class="color-label">' +
            '<label>' + this.loc.color.labelOr + '</label>' +
            '</div>' +
            '<div class="color-source-selector">' +
            '<label>' + this.loc.color.labelCustom + '</label>' +
            '</div>' +
            '<div class="custom-colors"></div>' +
            '</div>' +
            '<div class="column22">' +
            '<label>' + this.loc.preview.label + '</label>' +
            '<div class="preview"></div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>');
        this.templateSymbolButton = jQuery('<div class="icon-button"></div>');
        this.templateColorCell = jQuery('<div class="color-cell"></div>');
        this.templateCustomColor = jQuery('<div class="custom-color-editor">' +
            '<div class="colorcontainer">' +
            '<div class="colorcolumn1"></div>' +
            '<div class="colorcolumn2">' +
            '<div class="colorcolumn21"></div>' +
            '<div class="colorcolumn22"></div>' +
            '</div>' +
            '</div>');
        this.templateColorSource = jQuery('<input type="checkbox" name="colorInput" value = "custom" class="color-source">');
        this.templateColorValue = jQuery('<label class="color-label"></label><br><input type="text" name="color-input" value="0" disabled="disabled" class="custom-color">');
        this.templateSizerValue = jQuery('<div class="sizer-value"></div>');
        this.previewSize = 50;
    }, {
        /**
         * Returns the values.
         *
         * @method getValues
         * @return {Object}
         */
        getValues: function () {
            return {
                size: this.values.size,
                color: this.values.color,
                shape: this.values.shape
            };
        },
        /**
         * @method setValues
         * @param {Object} values
         */
        setValues: function (values) {
            if (values !== null && values !== undefined) {
                jQuery.extend(true, this.values, values);
            }
        },
        /**
         * @method showForm
         * @param {Oskari.mapframework.bundle.myplaces2.model.MyPlacesCategory[]} categories array containing available categories
         * @return {jQuery} jquery reference for the form
         */
        showForm: function (renderButton, state) {
            var me = this;
            if (state !== null && state !== undefined) {
                jQuery.extend(true, me.values, state.dot);
            }

            var renderDialog = Oskari.clazz.create('Oskari.userinterface.component.Popup');

            renderDialog.addClass('renderdialog');
            renderDialog.addClass('pointvisualization');
            var title = me.loc.title;

            // Shape selection
            var dialogContent = me.templateSymbolDialogContent.clone(),
                content = dialogContent.find('div.symbols'),
                buttonName,
                btnContainer,
                button;
            for (buttonName in this.symbolButtons) {
                if (this.symbolButtons.hasOwnProperty(buttonName)) {
                    btnContainer = this.templateSymbolButton.clone();
                    button = this.symbolButtons[buttonName];
                    btnContainer.addClass(button.iconCls);
                    btnContainer.attr('id', button.iconId + "marker");
                    if (button.iconId === parseInt(me.values.shape, 10)) {
                        btnContainer.css("border", "2px solid");
                    }
                    // FIXME create function outside loop
                    btnContainer.click(function () {
                        me.values.shape = parseInt(jQuery(this).attr('id').charAt(0),10);
                        me._selectButton(me.values.shape);
                        me._updatePreview(dialogContent);
                    });
                    content.append(btnContainer);
                }
            }

            // Size slider
            var nSizeValues = 10,
                sizerWidth = 110,
                numIntervals = me.maxSize - me.minSize,
                intervalWidth = sizerWidth / numIntervals,
                numVisValues = 0,
                i,
                newSizerValue,
                position;

            content = dialogContent.find('.sizer-values');
            for (i = 1; i <= nSizeValues; i++) {
                newSizerValue = me.templateSizerValue.clone();
                newSizerValue.html(i);
                newSizerValue.addClass('value' + i);
                if ((i < me.minSize) || ((i > me.maxSize))) {
                    newSizerValue.hide();
                } else {
                    position = numVisValues * intervalWidth.toString() + "px";
                    newSizerValue.css('left', position);
                    newSizerValue.show();
                    numVisValues = numVisValues + 1;
                }
                content.append(newSizerValue);
            }

            content = dialogContent.find('.sizer');
            content.slider({
                range: "min",
                min: me.minSize,
                max: me.maxSize,
                value: this.values.size,
                slide: function (event, ui) {
                    me.values.size = ui.value;
                    me._updatePreview(dialogContent);
                }
            });

            var statedChosenColor = false,
                colorCell,
                idExt,
                id,
                cellIndex,
                activeCell;
            // Color chooser
            content = dialogContent.find('.color-rectangle');
            for (i = 0; i < me.basicColors.length; i++) {
                colorCell = me.templateColorCell.clone();
                colorCell.css('background-color', me.basicColors[i]);
                idExt = "ColorCell";
                id = i + idExt;
                if (id.length === idExt.length + 1) {
                    id = "0" + id;
                }
                colorCell.attr("id", id);
                colorCell.click(function () {
                    if (jQuery('.color-source').prop('checked')) {
                        return;
                    }
                    cellIndex = parseInt(this.id.substring(0, 2), 10);
                    if (cellIndex === me.activeColorCell) {
                        return;
                    }
                    if (me.activeColorCell > -1) {
                        activeCell = me.activeColorCell.toString();
                        if (me.activeColorCell < 10) {
                            activeCell = "0" + activeCell;
                        }
                        jQuery('#' + activeCell + 'ColorCell').css('border', '1px solid #000000');
                    }
                    me.values.color = me.creator.rgbToHex(this.style.backgroundColor);
                    me.activeColorCell = cellIndex;
                    if (cellIndex < 10) {
                        cellIndex = "0" + cellIndex.toString();
                    }
                    jQuery('#' + cellIndex + 'ColorCell').css('border', '3px solid #ffffff');
                    me._updatePreview(dialogContent);
                });
                //instead of selecting always black,
                // we should use the color that comes from the state
                if ('#' + me.values.color === me.basicColors[i]) {
                    colorCell.css('border', '3px solid #ffffff');
                    me.activeColorCell = i;
                    statedChosenColor = true;
                }
                content.append(colorCell);
            }

            // Custom color
            content = dialogContent.find('.color-source-selector');
            var colorCheckbox = me.templateColorSource.clone();

            colorCheckbox.change(function () {
                jQuery("input.custom-color").prop('disabled', !this.checked);
                var activeCell = jQuery("#" + me.activeColorCell + "ColorCell");
                if (this.checked) {
                    activeCell.css('border', '1px solid #000000');
                } else {
                    activeCell.css('border', '3px solid #ffffff');
                }
                me._updatePreview(dialogContent);
            });
            content.prepend(colorCheckbox);

            // if the color is not picked from selection, it must be users own color
            // select user colors checkbox
            if (!statedChosenColor) {
                colorCheckbox.checked = true;
                content.find("input.color-source").prop('disabled', false).attr('checked', 'checked');
            }

            content = dialogContent.find('.custom-colors');
            var customColorEditor = this.templateCustomColor.clone();
            content.append(customColorEditor);

            var redValue = me.templateColorValue.clone();
            redValue.addClass('custom-red-value');
            dialogContent.find('.colorcolumn1').append(redValue);
            dialogContent.find('label.custom-red-value').text('R');

            var greenValue = me.templateColorValue.clone();
            greenValue.addClass('custom-green-value');
            dialogContent.find('.colorcolumn21').append(greenValue);
            dialogContent.find('label.custom-green-value').text('G');

            var blueValue = me.templateColorValue.clone();
            blueValue.addClass('custom-blue-value');
            dialogContent.find('.colorcolumn22').append(blueValue);
            dialogContent.find('label.custom-blue-value').text('B');

            // if the color is not picked from selection, it must be users own color
            // add color values to the input fields
            if (!statedChosenColor) {
                var rgb = me.creator.hexToRgb(me.values.color);

                dialogContent.find('input.custom-color.custom-red-value').val(rgb.r);
                dialogContent.find('input.custom-color.custom-green-value').val(rgb.g);
                dialogContent.find('input.custom-color.custom-blue-value').val(rgb.b);
                dialogContent.find('input.custom-color').prop('disabled', false);
            }

            dialogContent.find('.custom-color').change(function () {
                var values = [],
                    i,
                    intValue;
                values[0] = jQuery('input.custom-color.custom-red-value').val();
                values[1] = jQuery('input.custom-color.custom-green-value').val();
                values[2] = jQuery('input.custom-color.custom-blue-value').val();
                // From integer to hex values
                for (i = 0; i < 3; i++) {
                    intValue = parseInt(values[i], 10);
                    if ((intValue < 0) || (intValue > 255)) {
                        return;
                    }
                    values[i] = intValue.toString(16);
                    if (values[i].length === 1) {
                        values[i] = '0' + values[i];
                    }
                }
                me.values.color = values.join('');
                me._updatePreview();
            });

            this._updatePreview(dialogContent);

            var saveBtn = Oskari.clazz.create('Oskari.userinterface.component.Button');
            saveBtn.setTitle(me.loc.buttons.save);
            saveBtn.addClass('primary showSelection');
            saveBtn.setHandler(function () {
                renderDialog.close();
            });

            var cancelBtn = Oskari.clazz.create('Oskari.userinterface.component.Button');
            cancelBtn.setTitle(me.loc.buttons.cancel);
            cancelBtn.setHandler(function () {
                me.values.size = me.defaultValues.size;
                me.values.color = me.defaultValues.color;
                me.values.shape = me.defaultValues.shape;
                renderDialog.close();
            });
            renderDialog.show(title, dialogContent, [saveBtn, cancelBtn]);
            renderDialog.moveTo(renderButton, 'top');
            return renderDialog;
        },

        /**
         * @method _selectButton
         * Selects the chosen button
         * @param {String} selectedButton Name of the selected button
         * @private
         */
        _selectButton: function (selectedButton) {
            var buttonName,
                button,
                container;
            for (buttonName in this.symbolButtons) {
                if (this.symbolButtons.hasOwnProperty(buttonName)) {
                    button = this.symbolButtons[buttonName];
                    container = jQuery("div#" + button.iconId + "marker.icon-button");
                    if (button.iconId.toString() === selectedButton.toString()) {
                        container.css("border", "2px solid");
                    } else {
                        container.css("border", "1px solid");
                    }
                }
            }
        },

        _updatePreview: function (dialog) {
            var me = this;
            var view = dialog === undefined || dialog === null ? jQuery(".pointform") : dialog;
            var content = view.find('.preview');
            var preview;
            if (content.length > 0) {
                preview = content.get(0);
                if (preview.children.length === 0) {
                    this.paper = Raphael(preview,50,50);
                }
            } else {
                return;
            }

            var charIndex = 0;
            var offset = [0,0];
            var scale = 0;
            for (var buttonName in me.symbolButtons) {
                if (me.symbolButtons.hasOwnProperty(buttonName)) {
                    var button = me.symbolButtons[buttonName];
                    if (button.iconId.toString() === me.values.shape.toString()) {
                        charIndex = button.iconId;
                        offset = button.offset;
                        scale = button.scale;
                        break;
                    }
                }
            }
            // Preview uses icons from the JSON based font below. A copy of identical ttf
            // file is needed by back end renderer (e.g. GeoServer). Conversion from
            // ttf to js is achieved by cufon at http://cufon.shoqolate.com/generate/.
            Raphael.registerFont({"w":512,"face":{"font-family":"dot-markers","font-weight":400,"font-stretch":"normal","units-per-em":"512","panose-1":"2 0 5 3 0 0 0 0 0 0","ascent":"480","descent":"-32","bbox":"0 -480 512 32","underline-thickness":"0","underline-position":"0","unicode-range":"U+E000-U+F000"},"glyphs":{" ":{},"\ue000":{"d":"288,-426v-21,-4,-35,-2,-42,5v-2,2,-2,4,-1,7v2,5,5,10,9,18v4,8,6,13,7,15v-3,3,-9,9,-18,17v-13,12,-13,12,-19,18v-7,7,-1,15,18,24v8,4,17,7,26,8v23,5,39,3,49,-5v3,-3,4,-6,3,-9r-9,-18v-4,-9,-4,-10,-8,-18v-3,-6,-4,-9,-5,-11v2,-2,2,-3,11,-11v9,-8,9,-8,15,-14v6,-5,1,-12,-15,-20v-7,-3,-14,-5,-21,-6xm262,-256r9,-48r-12,-2r-9,50r12,0"},"\ue001":{"d":"320,-427r-127,0r0,126r35,0r28,45r28,-45r36,0r0,-126"},"\ue002":{"d":"256,-429v-17,0,-30,5,-42,17v-12,12,-18,26,-18,43v0,10,5,24,15,43v10,19,20,35,30,48r15,21v40,-53,60,-90,60,-112v0,-17,-6,-31,-18,-43v-12,-12,-25,-17,-42,-17xm256,-344v-7,0,-12,-2,-17,-7v-5,-5,-7,-10,-7,-17v0,-7,2,-13,7,-18v5,-5,10,-7,17,-7v7,0,13,2,18,7v5,5,7,11,7,18v0,7,-2,12,-7,17v-5,5,-11,7,-18,7"},"\ue003":{"d":"262,-257r17,-71r-12,-2r-17,73r12,0xm240,-380v0,12,4,22,12,31v8,9,19,13,31,13v12,0,22,-4,31,-13v9,-9,13,-19,13,-31v0,-12,-4,-22,-13,-30v-9,-8,-19,-13,-31,-13v-12,0,-23,5,-31,13v-8,8,-12,18,-12,30"},"\ue004":{"d":"262,-257r41,-169r-13,0r-40,169r12,0xm164,-427r18,45r-38,44r115,0r21,-89r-116,0"},"\ue005":{"d":"196,-256v0,17,6,30,18,42v12,12,25,18,42,18v17,0,30,-6,42,-18v12,-12,18,-25,18,-42v0,-17,-6,-30,-18,-42v-12,-12,-25,-18,-42,-18v-17,0,-30,6,-42,18v-12,12,-18,25,-18,42"},"\ue006":{"d":"284,-331r0,-93r-56,0r0,93r-39,0r67,75r67,-75r-39,0"},"\uf000":{"d":"0,-480r512,512r-512,0r0,-512","w":0},"\u00a0":{}}});
            var font = this.paper.getFont("dot-markers");
            var baseFontIndex = 57344;
            this.paper.clear();
            var x = offset[0]-this.values.size*5;
            var y = offset[1]+this.values.size*scale;
            var size = 40+this.values.size*10;
            this.paper.print(x,y,String.fromCharCode(charIndex+baseFontIndex),font,size).attr({"stroke-width": 1, fill: "#"+me.values.color, "stroke": "#b4b4b4"});
            this.paper.circle(0,0,0); // IE8 refresh work-around
        },

        /**
         * @method _getOnScreenForm
         * Returns reference to the on screen version shown by OpenLayers
         * @private
         */
        _getOnScreenForm: function () {
            return jQuery('div.renderdialog');
        }

    });