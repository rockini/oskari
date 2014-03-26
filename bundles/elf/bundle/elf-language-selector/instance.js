/**
 * @class  Oskari.elf.LanguageSelector
 */
Oskari.clazz.define("Oskari.elf.languageselector.BundleInstance", function() {

}, {
    templates : {
        "fi" : {
            "content" : '<a href="?lang=fi#">suomi</a><br /><br /><a href="?lang=sv#">ruotsi</a><br />' + '<a href="?lang=en#">englanti</a><br /><br /><a href="?lang=de#">saksa</a><br />' + '<a href="?lang=es#">espanja</a><br /><br /><a href="?lang=cs#">tsekki</a><br />' + '<a href="?lang=it#">italialainen</a><br />'
        },
        "sv" : {
            "content" : '<a href="?lang=fi#">finska</a><br /><br /><a href="?lang=sv#">svenska</a><br />' + '<a href="?lang=en#">engelska</a><br /><br /><a href="?lang=de#">tyska</a><br />' + '<a href="?lang=es#">spanska</a><br /><br /><a href="?lang=cs#">tjeckiska</a><br />' + '<a href="?lang=it#">Italienska</a><br />'
        },
        "de" : {
            "content" : '<a href="?lang=fi#">Finnisch</a><br /><br /><a href="?lang=sv#">Schwedisch</a><br />' + '<a href="?lang=en#">Englisch</a><br /><br /><a href="?lang=de#">Deutsch</a><br />' + '<a href="?lang=es#">Spanisch</a><br /><br /><a href="?lang=cs#">Tschechisch</a><br />' + '<a href="?lang=it#">Italienisch</a><br />'
        },
        "en" : {
            "content" : '<a href="?lang=fi#">Finnish</a><br /><br /><a href="?lang=sv#">Swedish</a><br />' + '<a href="?lang=en#">English</a><br /><br /><a href="?lang=de#">German</a><br />' + '<a href="?lang=es#">Spanish</a><br /><br /><a href="?lang=cs#">Czech</a><br />' + '<a href="?lang=it#">Italian</a><br />'
        },
        "cs" : {
            "content" : '<a href="?lang=fi#">Finština</a><br /><br /><a href="?lang=sv#">Švédština</a><br />' + '<a href="?lang=en#">Angličtina</a><br /><br /><a href="?lang=de#">Němčina</a><br />' + '<a href="?lang=es#">Španělština</a><br /><br /><a href="?lang=cs#">Čeština</a><br />'  + '<a href="?lang=it#">italština</a><br />'
        },
        "es" : {
            "content" : '<a href="?lang=fi#">finés</a><br /><br /><a href="?lang=sv#">sueco</a><br />' + '<a href="?lang=en#">inglés</a><br /><br /><a href="?lang=de#">alemán</a><br />' + '<a href="?lang=es#">español</a><br /><br /><a href="?lang=cs#">checo</a><br />'  + '<a href="?lang=it#">italiano</a><br />'
        },
		"it" : {
            "content" : '<a href="?lang=fi#">Finlandese</a><br /><br /><a href="?lang=sv#">Svedese</a><br />' + '<a href="?lang=en#">Inglese</a><br /><br /><a href="?lang=de#">Tedesco</a><br />' + '<a href="?lang=es#">Spagnolo</a><br /><br /><a href="?lang=cs#">Ceco</a><br />' + '<a href="?lang=it#">Italiano</a><br />'
        }
    },

    locales : {
        "fi" : {
            "tile" : {
                "title" : "kieli"
            },
            "popover" : {
                "title" : "Valitse kieli"
            }
        },
        "sv" : {
            "tile" : {
                "title" : "språk"
            },
            "popover" : {
                "title" : "Välj språk"
            }
        },
        "en" : {
            "tile" : {
                "title" : "language"
            },
            "popover" : {
                "title" : "Change language"
            }
        },

        "es" : {
            "tile" : {
                "title" : "idioma"
            },
            "popover" : {
                "title" : "idioma"
            }
        },
        "de" : {
            "tile" : {
                "title" : "Sprache"
            },
            "popover" : {
                "title" : "Sprache"
            }
        },
        "cs" : {
            "tile" : {
                "title" : "Jazyk"
            },
            "popover" : {
                "title" : "Jazyk"
            }
        },
		"it" : {
            "tile" : {
                "title" : "Lingua"
            },
            "popover" : {
                "title" : "Cambia lingua"
            }
        }

    },

    startPlugin : function() {
        this.conf = {
            "name" : "elf-language-selector"
        };
        this._localization = this.locales[Oskari.getLang()];

        this.setDefaultTile(this._localization.tile.title);

        var content = jQuery(this.templates[Oskari.getLang()].content);
        this.popOver = Oskari.clazz.create('Oskari.userinterface.component.Popover', this.getLocalization().popover.title, content);
        this.popOver.setPlacement('right');

    },

    stopPlugin : function() {

    },

    displayContent : function(isOpen) {
        var container = jQuery(this.getTile().container);
        this.popOver.attachTo(container);
        if (isOpen) {
            this.popOver.show();
        } else {
            this.popOver.hide();
        }
    },

    eventHandlers : {
        /**
         * @method userinterface.ExtensionUpdatedEvent
         */
        'userinterface.ExtensionUpdatedEvent' : function(event) {

            var me = this;
            if (event.getExtension().getName() !== me.getName()) {
                return;
            }
            var isOpen = event.getViewState() !== "close";
            me.displayContent(isOpen);
        }
    }
}, {
    "extend" : ["Oskari.userinterface.extension.EnhancedExtension"]
});
