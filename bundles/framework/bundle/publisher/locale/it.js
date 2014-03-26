Oskari.registerLocalization({
    "lang": "it",
    "key": "Publisher",
    "value": {
        "title": "Crea mappa",
        "flyouttitle": "Crea mappa",
        "desc": "",
        "published": {
            "title": "La tua mappa e' stata creata",
            "desc": "Inserisci la mappa nel tuo sito aggiungendo il seguente codice HTML."
        },
        "edit": {
            "popup": {
                "title": "Modifica mappa",
                "msg": "I dati della mappa verranno aggiornati"
            }
        },
        "BasicView": {
            "title": "Mappe embedded",
            "titleEdit": "Modifica mappa embedded",
            "domain": {
                "title": "Pagina web dove la mappa e' inserita",
                "label": "Sito web dove la mappa e' inserita",
                "placeholder": "senza i prefissi http o www",
                "tooltip": "Scrivi il nome della pagina indice del tuo sito, ovvero il nome del dominio senza i prefissi http o www, oppure l'indirizzo di una sotto-pagina. Es. miosito.it"
            },
            "name": {
                "label": "Il nome della mappa",
                "placeholder": "obbligatorio",
                "tooltip": "Dai alla mappa un nome descrittivo. Fai attenzione alla lingua dell'interfaccia."
            },
            "language": {
                "label": "Lingua",
                "options": {
                    "fi": "Finnish",
                    "sv": "Swedish",
                    "en": "English",
					"it": "Italiano"
                },
                "tooltip": "Scegli la lingua della mappa e dell'interfaccia."
            },
            "size": {
                "label": "Dimensione",
                "tooltip": "Scegli o definisci la dimensione della mappa da inserire nel tuo sito. La preview della mappa sara' aggiornata di conseguenza."
            },
            "tools": {
                "label": "Strumenti",
                "tooltip": "Seleziona gli strumenti da visualizzare nella mappa. Their placement is displayed in the map preview.",
                "ScaleBarPlugin": "Linea della scala",
                "IndexMapPlugin": "Indice della mappa",
                "PanButtons": "Strumenti di movimento",
                "Portti2Zoombar": "Scrollbar della scala",
                "ControlsPlugin": "Panning attivo",
                "SearchPlugin": "Ricerca per nome di indirizzi e luoghi",
                "FeaturedataPlugin": "Dati delle feature",
                "GetInfoPlugin": "Strumenti di interrogazioen sui dati",
                "PublisherToolbarPlugin": "Strumenti della mappa",
                "selectDrawLayer" : "Selezione del layer di disegno"
            },
            "toolbarToolNames": {
                "history_back": "Indietro",
                "history_forward": "Avanti",
                "measureline": "Misura distanza",
                "measurearea": "Misura area",
                "point" : "Consenti punti",
                "line" : "Consenti linee",
                "area" : "Consenti aree"
            },
            "toollayout": {
                "label": "Layout degli strumenti",
                "tooltip": "Scegli un layout per gli strumenti della mappa",
                "lefthanded": "Sinistrofilo",
                "righthanded": "Destrofilo",
                "userlayout": "Layout personalizzato",
                "usereditmode": "Attiva modolita' di modifica",
                "usereditmodeoff": "Disattiva modolita' di modifica"
            },
            "data": {
                "label": "Statistiche",
                "tooltip": "Mostra i dati relativi alla mappa.",
                "grid": "Mostra la griglia delle statistiche",
                "allowClassification": "Consenti le classificazioni"
            },
            "layout": {
                "label": "Layout",
                "fields": {
                    "colours": {
                        "label": "Combinazione di colori",
                        "placeholder": "Scegli la combinazione di colori",
                        "buttonLabel": "Cambia",
                        "light_grey": "Grigio chiaro",
                        "dark_grey": "Grigio scuro",
                        "blue": "Blue",
                        "red": "Rosso",
                        "green": "Verde",
                        "yellow": "Giallo",
                        "custom": "Colori personalizzati",
                        "customLabels": {
                            "bgLabel": "Sfondo etichette",
                            "titleLabel": "Testo etichette",
                            "headerLabel": "Testo intestazioni",
                            "iconLabel": "Icona",
                            "iconCloseLabel": "Scuro",
                            "iconCloseWhiteLabel": "Ciaro"
                        }
                    },
                    "fonts": {
                        "label": "Scegli il font"
                    },
                    "toolStyles": {
                        "label": "Stile degli strumenti",
                        "default": "Stile di default",
                        "rounded-dark": "Rotondo (scuro)",
                        "rounded-light": "Rotondo (chiaro)",
                        "sharp-dark": "Poligonale (scuro)",
                        "sharp-light": "Poligonale (chiaro)",
                        "3d-dark": "3D (scuro)",
                        "3d-light": "3D (chiaro)"
                    }
                },
                "popup": {
                    "title": "Scegli la combinazione di colori",
                    "close": "Chiudi",
                    "gfiDialog": {
                        "title": "Preview",
                        "featureName": "Preview",
                        "featureDesc": "La combinazione di colori scelta si applica solo alle feature di informazione ed al layer di selezione"
                    }
                }
            },
            "layers": {
                "add": "Aggiungi layer",
                "label": "Layer",
                "defaultLayer": "(Layer di default)",
                "useAsDefaultLayer": "Usa come layer di default"
            },
            "myplaces": {
                "label": "I miei layer"
            },
            "sizes": {
                "small": "Piccolo",
                "medium": "Medio",
                "large": "Grande",
                "custom": "Dimensione personalizzata",
                "width": "larghezza",
                "height": "altezza"
            },
            "buttons": {
                "save": "Salva",
                "saveNew": "Salva come...",
                "ok": "OK",
                "replace": "Rimpiazza",
                "cancel": "Annulla",
                "add": "Aggiungi layer"
            },
            "confirm": {
                "replace": {
                    "title": "Vuoi rimpiazzare la mappa embedded?",
                    "msg": "Usa 'Rimpiazza' per vedere le modifiche alla mappa senza ritardi. Non e' necessario modificare il codice HTML nella tua pagina web."
                }
            },
            "layerselection": {
                "label": "Mostra i layer nel menu",
                "info": "Seleziona la mappa di sfondo. Puoi selezionare la mappa di default nella finetra di preview..",
                "tooltip": "La mappa di sfondo e' mostrato come layer piu' basso della mappa. Quando selezioni alcuni layer di mappa come piu' bassi, solo un layer e' visibile per volta, ma tuo puoi scambiarli di posto. Puoi selezionare la mappa di sfondo nella finestra di preview.",
                "promote": "Mostra ortofoto?"
            },
            "preview": "Preview della mappa da inserire.",
            "location": "Posizione e livello di scala",
            "zoomlevel": "Livello di zoom",
            "help": "Aiuto",
            "error": {
                "title": "Errore!",
                "size": "Errore nella definizione della dimensione",
                "domain": "Il nome del sito web e' obbligatorio",
                "domainStart": "I prefissi htpp e www vanno omessi",
                "name": "Il campo nome e' obbligatorio",
                "nohelp": "Nessuno puo' aiutarti",
                "saveFailed": "Pubblicazione della mappa fallita; riprova piu' tardi.",
                "nameIllegalCharacters": "Il nome contiene caratteri non validi. I caratteri previsti sono le lettere, le cifre, il sottolineato ed il trattino.",
                "domainIllegalCharacters": "Il nome del sito web contiene caratteri non validi. I caratteri previsti sono le lettere, le cifre, il sottolineato ed il trattino."
            }
        },
        "NotLoggedView": {
            "text": "Per utilizzare le funzioni di inserimento devi fare login.",
            "signup": "Login",
            "signupUrl": "/web/en/login",
            "register": "Registrati",
            "registerUrl": "/web/en/login?p_p_id=58&p_p_lifecycle=1&p_p_state=maximized&p_p_mode=view&p_p_col_id=column-1&p_p_col_count=1&saveLastPath=0&_58_struts_action=%2Flogin%2Fcreate_account"
        },
        "StartView": {
            "text": "Puoi inserire la mappa appena creata nel tuo sito.",
            "touLink": "Mostra le condizioni di utilizzo delle mappa embedded",
            "layerlist_title": "Layers inseribili",
            "layerlist_empty": "I layers che hai scelto non sono inseribili. Il menu' di scelta mostra per ogni layer se sia inseribile oppure no.",
            "layerlist_denied": "Non puo' essere inserito",
            "denied_tooltip": "Il fornitore di questi dati non ha rilasciato il permesso di pubblicarli su altri siti. Controlla i diritti di pubblicazione nel menu dei layer prima di inserirli.",
            "myPlacesDisclaimer": "Nota bene: stai per pubblicare il tuo layer.",
            "buttons": {
                "continue": "Continua",
                "continueAndAccept": "Accetta le condizione di utilizzo e continua",
                "cancel": "Annulla",
                "close": "Chiudi"
            },
            "tou": {
                "notfound": "Non si trovano i termini di utilizzo",
                "reject": "Rifiuta",
                "accept": "Accetta"
            }
        },
        "layer": {
            "show": "Mostra",
            "hide": "Nascondi",
            "hidden": "La mappa e' stata temporaneamente nasconsta.",
            "rights": {
                "can_be_published_map_user": {
                    "label": "La pubblicazione e' concessa",
                    "tooltip": "Il layer di mappa puo' essere pubblicato in un'altra mappa ma il numero di utenti per settimana potrebbe avere un limite."
                }
            }
        }
    }
});
