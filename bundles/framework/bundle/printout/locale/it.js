Oskari.registerLocalization({
    "lang": "it",
    "key": "Printout",
    "value": {
        "title": "Stampa la vista",
        "flyouttitle": "Stampa la vista",
        "desc": "",
        "btnTooltip": "Stampa",
        "BasicView": {
            "title": "Stampa la vista",
            "name": {
                "label": "Nome della mappa",
                "placeholder": "obbligatorio",
                "tooltip": "Dai un nome descrittivo alla mappa. Fai attenzione alla lingua dell'interfaccia utente."
            },
            "language": {
                "label": "Lingua",
                "options": {
                    "fi": "Finnish",
                    "sv": "Swedish",
                    "en": "English",
					"it": "Italiano"
                },
                "tooltip": "Seleziona la lingua dell'interfaccia e dei dati."
            },
            "size": {
                "label": "Dimensione",
                "tooltip": "Scegli il layout di stampa. La preview sara' aggiornata di conseguenza.",
                "options": [{
                    "id": "A4",
                    "label": "A4 portrait",
                    "classForPreview": "preview-portrait",
                    "selected": true
                }, {
                    "id": "A4_Landscape",
                    "label": "A4 landscape",
                    "classForPreview": "preview-landscape"
                }, {
                    "id": "A3",
                    "label": "A3 portrait",
                    "classForPreview": "preview-portrait"
                }, {
                    "id": "A3_Landscape",
                    "label": "A3 landscape",
                    "classForPreview": "preview-landscape"
                }]
            },
            "preview": {
                "label": "Preview",
                "tooltip": "Clicca sulla preview piccola per averne una piu' grossa",
                "pending": "La preview sara' aggiornata a breve",
                "notes": {
                    "extent": "La preview puo' essere usata per avere un'idea dell'estensione dell'area stampata",
                    "restriction": "Non tutti i layer sono visualizzati nella preview"
                }

            },

            "buttons": {
                "save": "Stampa",
                "ok": "OK",
                "cancel": "Annulla"
            },
            "location": {
                "label": "Posizione e scala",
                "tooltip": "La scala di stampa corrisponde a quella del browser.",
                "zoomlevel": "Livello di zoom"
            },
            "settings": {
                "label": "Impostazioni aggiuntive",
                "tooltip": "Tipo: formato, titolo e scala"
            },
            "format": {
                "label": "Formato",
                "tooltip": "Seleziona un formato",
                "options": [{
                    "id": "png",
                    "format": "image/png",
                    "label": "immagine PNG"
                }, {
                    "id": "pdf",
                    "format": "application/pdf",
                    "selected": true,
                    "label": "documento PDF"
                }]
            },
            "mapTitle": {
                "label": "Aggiungi il titpolo",
                "tooltip": "... di questa mappa"
            },
            "content": {
                "options": [{
                    "id": "pageLogo",
                    "label": "Aggiungi un logo a Paikkatietoikkuna",
                    "tooltip": "Puoi anche nasconderlo se vuoi",
                    "checked": "checked"
                }, {
                    "id": "pageScale",
                    "label": "Aggiungi la scala alla mappa",
                    "tooltip": "Aggiunge la scala alla mappa",
                    "checked": "checked"
                }, {
                    "id": "pageDate",
                    "label": "Aggiungi data",
                    "tooltip": "Puoi aggiungere la data alla stampa",
                    "checked": "checked"
                }]
            },
            "legend": {
                "label": "Legenda",
                "tooltip": "Scegli la posizione della legenda",
                "options": [{
                    "id": "oskari_legend_NO",
                    "loca": "NO",
                    "label": "Nessuna legenda",
                    "tooltip": "La legenda non verra' visualizzata",
                    "selected": true

                }, {
                    "id": "oskari_legend_LL",
                    "loca": "LL",
                    "label": "In basso a sinistra ",
                    "tooltip": "La legenda verra' posizionata nell'angolo in basso a sinistra"

                }, {
                    "id": "oskari_legend_LU",
                    "loca": "LU",
                    "label": "In alto a sinistra ",
                    "tooltip": "La legenda verra' posizionata nell'angolo in alto a sinistra"

                }, {
                    "id": "oskari_legend_RU",
                    "loca": "RU",
                    "label": "In alto a destra ",
                    "tooltip": "La legenda verra' posizionata nell'angolo in alto a destra"

                }, {
                    "id": "oskari_legend_RL",
                    "loca": "RL",
                    "label": "In basso a destra ",
                    "tooltip": "La legenda verra' posizionata nell'angolo in basso a destra"

                }]
            },
            "help": "Aiuto",
            "error": {
                "title": "Errore",
                "size": "Errore nella definizione della dimensione di stampa",
                "name": "Il nome e' obbligatorio",
                "nohelp": "Nessun ti puo' aiutare",
                "saveFailed": "Stampa fallita; riprova domani l'altro.",
                "nameIllegalCharacters": "Il nome contiene caratteri illegali. I caratteri previsti sono le lettere, le cifre, il sottolineato e il trattino."
            }
        },
        "StartView": {
            "text": "Puoi stampare la mappa appena creata.",
            "info": {
                "maxLayers": "Si possono stampare al massimo 8 layer",
                "printoutProcessingTime": "Ci vorra' qualche secondo in piu'... (ci sono molti layer)"
            },
            "buttons": {
                "continue": "Continua",
                "cancel": "Annulla"
            }
        }
    }
});
