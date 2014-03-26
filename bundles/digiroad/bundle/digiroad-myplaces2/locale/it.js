Oskari.registerLocalization({
  "lang": "it",
  "key": "DigiroadMyPlaces2",
  "value": {
    "title": "Luoghi",
    "desc": "",
    "category": {
      "defaultName": "Crea segmenti",
      "organization": "Miei luoghi",
      "inspire": "Luoghi"
    },
    "guest": {
      "loginShort": "Fai login"
    },
    "tools": {
      "point": {
        "tooltip": "Aggiungi un punto",
        "new": "Aggiungi un punto cliccando sulla mappa.",
        "edit": "Sposta un punto cliccando e trascinando il mouse.",
        "save": "Salva il punto"
      },
      "line": {
        "tooltip": "Aggiungi una linea",
        "new": "Aggiungi un breakpoint cliccando sulla mappa. Arreta il disegna facendo doppio click o selezionando 'Arresta disegno'.",
        "edit": "Modifica la linea ciccando e trascinando i breakpoint.",
        "save": "Salva la linea"
      },
      "area": {
        "tooltip": "Aggiungi un'area",
        "new": "Aggiungi i breakpoint al poligono cliccando sulla mappa. Arresta il disegno facendo doppio click o selezionando 'Arresta disegno'.",
        "edit": "Modifica l'area cliccando e trascinado i breakpoint.",
        "save": "Salva l'area"
      },
      "restriction": {
          "title": "Vincoli",
          "firstElemLabel": "Il primo elemento",
          "lastElemLabel": "L'ultimo elemento",
          "typeLabel": "Tipo",
          "tooltip": "Aggiungi un nuovo vincolo",
          "new": "Clicca sulla mappa l'elemento iniziale e finale",
          "save": "Salva i vincoli",
          "success": "Vincoli registrato.",
          "failure": "Impossibile salvare."
        }
    },
    "buttons": {
      "ok": "OK",
      "cancel": "Annulla",
      "finish": "Arresta disegno",
      "finishRestriction": "Salva",
      "save": "Salva",
      "movePlaces": "Sposta e cancella i punti",
      "deleteCategory": "Cancella",
      "deleteCategoryAndPlaces": "Cancella le categorie",
      "changeToPublic": "Rendi pubblico",
      "changeToPrivate": "Rendi privato"
    },
    "placeform": {
      "title": "Pizza uno straccio di dato",
      "tooltip": "I luoghi della mappa possono essere salvati in Miei Luoghi. Dai un nome al luogo e descrivilo. Puoi selezionare il layer dove piazzare il luogo, o scegliere un nuovo layer selezionando 'Nuovo layer' nel menu' dei layer.",
      "placename": {
        "placeholder": "Dai un nome al luogo"
      },
      "placedesc": {
        "placeholder": "Descrivi il luogo"
      },
      "placedyntype": {
        "label": "Tipo dei dati",
        "values": {
          "Veicoli ammessi": 1,
          "Aprie il boom": 3,
          "Antigelo": 6,
          "Larghezza della strada": 8,
          "Limite di velocità": 11,
          "Percorso bloccato": 16,
          "Altezza massima veicolo": 18,
          "Combinazione di lunghezza massima": 19,
          "Peso massimo": 20,
          "Carico massimo per asse": 21,
          "Peso massimo del veicolo": 22,
          "Larghezza massima del veicolo": 23,
          "Carico massimo per carrello ferroviario": 24,
          "Passaggio a livello": 25,
          "Asfaltato": 26,
          "Illuminato": 27,
          "Divieto di transito ai veicoli": 29,
          "Conurbazione": 30,
          "Limitazione di velocita' in inverno": 31,
          "Volume di traffico": 33
        }
      },
      "placedynvalue": {
        "placeholder": "Dammelo da DYN_VALUE"
      },
      "category": {
        "label": "Layer di mappa",
        "new": "Nuovo layer..."
      }
    },
    "feedbackform": {
        "title": "Feedback",
        "tooltip": "Disegna un poligono per il feekback libero. Puoi dare al poligono un nome ed una descrizione.",
        "feedbackname": {
          "placeholder": "Dati un nome al luogo"
        },
        "feedbackdesc": {
          "placeholder": "Descrivi il luogo"
        },
        "category": {
          "label": "Layer di mappa",
          "new": "Nuovo layer..."
        }
    },
    "categoryform": {
      "name": {
        "label": "Nome",
        "placeholder": "Dai un nome al layer"
      },
      "drawing": {
        "label": "Stile",
        "point": {
          "label": "Punto",
          "color": "Colore",
          "size": "Dimensione"
        },
        "line": {
          "label": "Linea",
          "color": "Colore",
          "size": "Spessore"
        },
        "area": {
          "label": "Area",
          "fillcolor": "Colore di riempimento",
          "linecolor": "Colore del bordo",
          "size": "Spessore del bordo"
        }
      },
      "edit": {
        "title": "Modifica il layer",
        "save": "Salva",
        "cancel": "Annulla"
      }
    },
    "notification": {
      "placeAdded": {
        "title": "Il luogo e' stato salvato",
        "message": "Il luogo puo' essere ritrovato nel menu' Miei Dati"
      },
      "categorySaved": {
        "title": "Layer salvato",
        "message": "Le modifiche al layer sono state salvate"
      },
      "categoryDelete": {
        "title": "Cancella il layer",
        "deleteConfirmMove": "Il layer {0} contiene {1} oggetti. Vuoi cancellare il layer e spostare i dati in quello di defalt {2} ?",
        "deleteConfirm": "Vuoi cancellare il layer {0}?",
        "deleted": "Layer cancellato"
      },
      "categoryToPublic": {
        "title": "Rendi pubblico il layer",        
        "message": "Stai rendendo pubblico il layer \"{0}\". Puoi condividere i link ad un layer pubblico su internet oppure inserirlo nella mappa di un altro sito."
      },
      "categoryToPrivate": {
        "title": "Rendi privato il layer",        
        "message": "Stai per rendere privato il layer \"{0}\". Dopo cio' non sara' piu' possibile inserirlo in altre mappe. Gli altri utenti non potranno piu' riferirlo."
      },
      "error": {
        "addCategory": "Il layer non puo' essere salvato (ed anche i luoghi).",
        "editCategory": "Il layer non puo' essere salvato.",
        "savePlace": "Il luogo non puo' essere salvato.",
        "title": "Errore!",
        "generic": "Errore di sistema: riprova piu' tardi.",
        "deleteCategory": "Errore durante la cancellazione!",
        "deleteDefault": "Il layer di default non puo' essere cancellato."
      }
    },
    "validation": {
      "title": "I dati contegono errori:",
      "dynType": "DYN_TYYPPI errato!!!",
      "dynValue": "DYN_ARVO errato!!!",
      "placeName": "Manca il nome del luogo.",
      "placeDescription": "Manca il test di feedback!",
      "categoryName": "Manca il nome del layer.",
      "placeNameIllegal": "Il nome dell'oggetto contiene caratteri vietati. I caratteri ammessi sono le lettere, i numeri, undescore e trattino.",
      "descIllegal": "La descrizione dell'oggetto contiene caratteri vietati. I caratteri ammessi sono le lettere, i numeri, undescore e trattino.",
      "categoryNameIllegal": "La descrizione del layer contiene caratteri vietati. I caratteri ammessi sono le lettere, i numeri, undescore e trattino.",
      "dotSize": "La dimensione del punto non e' nell'intervallo ammesso (1-50).",
      "dotColor": "Colore del punto errato.",
      "lineSize": "La dimensione della linea non e' nell'intervallo ammesso (1-50).",
      "lineColor": "Colore della linea errato.",
      "areaLineSize": "Lo spessore del bordo non e' nell'intervallo ammesso (0-50).",
      "areaLineColor": "Errore nella definizione del colore di bordo.",
      "areaFillColor": "Errore nella definizione del colore di riempimento."
    }
  }
});
