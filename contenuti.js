/* ─────────────────────────────────────────────────────────────
   CONTENUTI DEL SITO. Modifica solo questo file.
   Il nome dello studio si cambia qui, in un punto solo: campo "nome".
   Nei testi {nome} viene sostituito con il nome dello studio.
   Ciò che è tra [parentesi quadre] è un segnaposto: il sito lo evidenzia
   in giallo finché non viene sostituito con il testo vero. Con "mostraSegnaposto": false
   i segnaposto restano nascosti; con true tornano visibili.
   Le persone sono in ordine alfabetico per cognome. "cv": sezioni brevi (Formazione, Esperienze),
   ogni voce con "anni", "testo" (ruolo) e "dove" (ente e città, su una riga sotto); una voce che è solo segnaposto resta nascosta.
   Progetti, ordine: Ghersi, Parroccini, Telve, ripetuto. Sulla griglia ogni
   colonna è una persona: prima riga le tre tesi, terza riga i tre progetti su via Clementina.
   alta: ["nome", ...] elenca le immagini con il file nome-alta.webp, caricato quando si ingrandisce.
   coperturaIntera: true mostra la copertina intera su fondo nero, senza ritagliarla.
   copertinaRitaglio: immagine usata solo in griglia, diversa da quella della scheda.
   ───────────────────────────────────────────────────────────── */
window.SITO = {
  "nome": "Studio X",
  "anno": 2026,
  "mostraSegnaposto": false,
  "presentazione": {
    "it": "{nome} è uno studio di architettura con sede a Roma, fondato da Alessandro Ghersi, Pietro Parroccini e Giovanni Telve.",
    "en": "{nome} is an architecture practice based in Rome, founded by Alessandro Ghersi, Pietro Parroccini and Giovanni Telve."
  },
  "avvisoProgetti": {
    "it": "Sono progetti universitari individuali, svolti prima della fondazione dello studio.",
    "en": "These are individual university projects, carried out before the practice was founded."
  },
  "approccio": {
    "it": "[Approccio dello studio: 3-5 righe scritte da voi]",
    "en": "[The practice's approach: 3-5 lines written by you]"
  },
  "soci": [
    {
      "id": "ghersi",
      "nome": "Alessandro Ghersi",
      "bio": {
        "it": "Si è avvicinato all'architettura attraverso la scenografia artistica, da cui viene il suo interesse per le sequenze spaziali e i giochi di luce, a cui affianca l'attenzione per gli aspetti costruttivi. Si è laureato con lode alla Sapienza Università di Roma, con uno scambio all'Universitat Politècnica de València, ed è abilitato alla professione.",
        "en": "He came to architecture through artistic set design, the source of his interest in spatial sequences and plays of light, alongside close attention to construction. He graduated with honours from Sapienza Università di Roma, with an exchange at Universitat Politècnica de València, and is qualified to practise."
      },
      "cv": [
        {
          "titolo": {
            "it": "Formazione",
            "en": "Education"
          },
          "voci": [
            {
              "anni": "2019–2025",
              "testo": {
                "it": "Laurea magistrale con lode in Architettura",
                "en": "Master's degree with honours in Architecture"
              },
              "dove": {
                "it": "Sapienza Università di Roma",
                "en": "Sapienza Università di Roma"
              }
            },
            {
              "anni": "2022–2023",
              "testo": {
                "it": "Erasmus",
                "en": "Erasmus"
              },
              "dove": {
                "it": "Universitat Politècnica de València",
                "en": "Universitat Politècnica de València"
              }
            }
          ]
        },
        {
          "titolo": {
            "it": "Esperienze",
            "en": "Experience"
          },
          "voci": [
            {
              "anni": {
                "it": "dal 2026",
                "en": "since 2026"
              },
              "testo": {
                "it": "Architetto",
                "en": "Architect"
              },
              "dove": {
                "it": "V.A.M.S. Ingegneria Srl, Roma",
                "en": "V.A.M.S. Ingegneria Srl, Rome"
              }
            },
            {
              "anni": "2025–2026",
              "testo": {
                "it": "Architetto",
                "en": "Architect"
              },
              "dove": {
                "it": "Forconia Engineering, Roma",
                "en": "Forconia Engineering, Rome"
              }
            },
            {
              "anni": "2025",
              "testo": {
                "it": "Partecipante al workshop MEDS",
                "en": "Participant, MEDS workshop"
              },
              "dove": {
                "it": "",
                "en": ""
              }
            },
            {
              "anni": "2024",
              "testo": {
                "it": "Borsa di progettazione",
                "en": "Design scholarship"
              },
              "dove": {
                "it": "Academy of Architectural Culture, Amburgo",
                "en": "Academy of Architectural Culture, Hamburg"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "parroccini",
      "nome": "Pietro Parroccini",
      "bio": {
        "it": "Si interessa ai processi di progetto, dalle nuove costruzioni alla riconversione di edifici dismessi attraverso il riuso adattivo, dalla composizione al dettaglio costruttivo, e lavora tra disegno a mano, modelli fisici e modellazione tridimensionale. Si è laureato con lode alla Sapienza Università di Roma, con un Erasmus all'Instituto Superior Técnico di Lisbona, ed è abilitato alla professione.",
        "en": "He is interested in design processes, from new construction to the conversion of disused buildings through adaptive reuse, and from composition to construction detail, working across hand drawing, physical models and three-dimensional modelling. He graduated with honours from Sapienza Università di Roma, with an Erasmus at Instituto Superior Técnico in Lisbon, and is qualified to practise."
      },
      "cv": [
        {
          "titolo": {
            "it": "Formazione",
            "en": "Education"
          },
          "voci": [
            {
              "anni": "2019–2025",
              "testo": {
                "it": "Laurea magistrale con lode in Architettura",
                "en": "Master's degree with honours in Architecture"
              },
              "dove": {
                "it": "Sapienza Università di Roma",
                "en": "Sapienza Università di Roma"
              }
            },
            {
              "anni": "2022–2023",
              "testo": {
                "it": "Erasmus",
                "en": "Erasmus"
              },
              "dove": {
                "it": "Instituto Superior Técnico, Lisbona",
                "en": "Instituto Superior Técnico, Lisbon"
              }
            }
          ]
        },
        {
          "titolo": {
            "it": "Esperienze",
            "en": "Experience"
          },
          "voci": [
            {
              "anni": "2025–2026",
              "testo": {
                "it": "Architetto",
                "en": "Architect"
              },
              "dove": {
                "it": "Forconia Engineering, Roma",
                "en": "Forconia Engineering, Rome"
              }
            },
            {
              "anni": "2024–2025",
              "testo": {
                "it": "Assistente ai corsi di progettazione",
                "en": "Teaching assistant, design courses"
              },
              "dove": {
                "it": "Sapienza Università di Roma",
                "en": "Sapienza Università di Roma"
              }
            },
            {
              "anni": "2024",
              "testo": {
                "it": "Borsa di progettazione",
                "en": "Design scholarship"
              },
              "dove": {
                "it": "Academy of Architectural Culture, Amburgo",
                "en": "Academy of Architectural Culture, Hamburg"
              }
            },
            {
              "anni": "2024",
              "testo": {
                "it": "Tirocinio",
                "en": "Internship"
              },
              "dove": {
                "it": "Leonardo Palla Architetto, Roma",
                "en": "Leonardo Palla Architetto, Rome"
              }
            },
            {
              "anni": "2023",
              "testo": {
                "it": "Tirocinio",
                "en": "Internship"
              },
              "dove": {
                "it": "Appleton & Domingos Arquitectos, Lisbona",
                "en": "Appleton & Domingos Arquitectos, Lisbon"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "telve",
      "nome": "Giovanni Telve",
      "bio": {
        "it": "Si interessa al modo in cui gli spazi urbani definiscono le relazioni sociali e dedica attenzione alla rappresentazione grafica e visuale del progetto. Ha studiato alla Sapienza Università di Roma, dove si è laureato con lode, alla TU Darmstadt nel 2022 e alla TU München nel 2025. È abilitato alla professione.",
        "en": "He is interested in how urban spaces shape social relationships and pays close attention to the graphic and visual representation of a project. He studied at Sapienza Università di Roma, where he graduated with honours, at TU Darmstadt in 2022 and at TU München in 2025. He is qualified to practise."
      },
      "cv": [
        {
          "titolo": {
            "it": "Formazione",
            "en": "Education"
          },
          "voci": [
            {
              "anni": "2019–2025",
              "testo": {
                "it": "Laurea magistrale con lode in Architettura",
                "en": "Master's degree with honours in Architecture"
              },
              "dove": {
                "it": "Sapienza Università di Roma",
                "en": "Sapienza Università di Roma"
              }
            },
            {
              "anni": "2023–2025",
              "testo": {
                "it": "Erasmus e ricerca di tesi",
                "en": "Erasmus and thesis research"
              },
              "dove": {
                "it": "TU München",
                "en": "TU München"
              }
            },
            {
              "anni": "2021–2022",
              "testo": {
                "it": "Erasmus",
                "en": "Erasmus"
              },
              "dove": {
                "it": "TU Darmstadt",
                "en": "TU Darmstadt"
              }
            }
          ]
        },
        {
          "titolo": {
            "it": "Esperienze",
            "en": "Experience"
          },
          "voci": [
              {
                "anni": {
                  "it": "dal 2026",
                  "en": "since 2026"
                },
                "testo": {
                  "it": "Architetto",
                  "en": "Architect"
                },
                "dove": {
                  "it": "Supervoid, Roma",
                  "en": "Supervoid, Rome"
                }
              },
            {
              "anni": "2024–2025",
              "testo": {
                "it": "Tirocinio",
                "en": "Internship"
              },
              "dove": {
                "it": "City Meta Lab, Roma",
                "en": "City Meta Lab, Rome"
              }
            },
            {
              "anni": "2024",
              "testo": {
                "it": "Tutor di workshop",
                "en": "Workshop tutor"
              },
              "dove": {
                "it": "EASA, Benidorm",
                "en": "EASA, Benidorm"
              }
            },
            {
              "anni": "2023",
              "testo": {
                "it": "Tirocinio, concorso Europan 17",
                "en": "Internship, Europan 17 competition"
              },
              "dove": {
                "it": "SDB architettura, Roma",
                "en": "SDB architettura, Rome"
              }
            },
            {
              "anni": "2023",
              "testo": {
                "it": "Mostra personale di disegno Taccuini",
                "en": "Solo drawing exhibition Taccuini"
              },
              "dove": {
                "it": "Sinestetica Expo, Roma",
                "en": "Sinestetica Expo, Rome"
              }
            },
            {
              "anni": "2022–2023",
              "testo": {
                "it": "Graphic designer",
                "en": "Graphic designer"
              },
              "dove": {
                "it": "E23 Startup, Roma",
                "en": "E23 Startup, Rome"
              }
            }
          ]
        }
      ]
    }
  ],
  "progetti": [
    {
      "id": "palermo",
      "socio": "ghersi",
      "titolo": {
        "it": "Waterfront a Palermo",
        "en": "Waterfront in Palermo"
      },
      "luogo": {
        "it": "Palermo",
        "en": "Palermo"
      },
      "anno": 2025,
      "tipologia": {
        "it": "Masterplan",
        "en": "Masterplan"
      },
      "stato": {
        "it": "Universitario",
        "en": "Academic"
      },
      "contesto": {
        "it": "Tesi di laurea, Sapienza Università di Roma",
        "en": "Degree thesis, Sapienza Università di Roma"
      },
      "docenti": "Anna Giovannelli",
      "descrizione": {
        "it": "Rispetto agli interventi recenti, rivolti soprattutto al turismo e agli spazi commerciali, la tesi propone per il porto di Palermo un progetto pensato innanzitutto per i cittadini, che restituisce spazi ad uso civile e mette al centro la vita quotidiana della comunità. Il sito si trova all'incrocio di tre tessuti urbani distinti. Il progetto si articola in quattro grandi isolati residenziali su un basamento con spazi per il lavoro, laboratori e nuove imprese giovanili. Si aggiungono un palazzetto della musica, un mercato coperto, una scuola primaria e media, un centro sportivo e un padiglione dell'ombra come luogo d'incontro. Il masterplan si sviluppa in una sequenza nord-sud che alterna spazi quieti e attivi, dalla residenza fino ai volumi pubblici aperti verso il mare.",
        "en": "Unlike recent interventions aimed mainly at tourism and retail, the thesis proposes a project for the port of Palermo designed first of all for its citizens, returning spaces to civic use and placing the daily life of the community at the centre. The site lies at the intersection of three distinct urban fabrics. The project is organised into four large residential blocks on a base with workspaces, workshops and space for new young businesses. These are joined by a music hall, a covered market, a primary and middle school, a sports centre and a shade pavilion as a meeting place. The masterplan unfolds in a north-south sequence alternating quiet and active spaces, from housing to public volumes opening towards the sea."
      },
      "cartella": "palermo",
      "copertina": "viste-1",
      "immagini": [
        [
          "viste-1",
          1600,
          1063,
          "Vista a volo d'uccello del porto",
          "Bird's-eye view of the port"
        ],
        [
          "modello-4",
          1600,
          1600,
          "Modello degli isolati e del mercato coperto",
          "Model of the blocks and the covered market"
        ],
        [
          "viste-c",
          1600,
          1131,
          "Vista dello spazio pubblico verso il mercato",
          "View of the public space towards the market"
        ],
        [
          "planivolumetrico",
          1590,
          1600,
          "Planivolumetrico",
          "Site plan"
        ],
        [
          "masterplan",
          1589,
          1600,
          "Masterplan",
          "Masterplan"
        ],
        [
          "esploso",
          1340,
          1600,
          "Esploso assonometrico",
          "Exploded axonometric view"
        ]
      ],
      "copertinaRitaglio": [
        "copertina",
        1200,
        799,
        "Vista a volo d'uccello del porto",
        "Bird's-eye view of the port"
      ],
      "mappa": "https://earth.google.com/web/search/Porto%20di%20Palermo",
      "alta": [
        "viste-1",
        "modello-4",
        "viste-c",
        "planivolumetrico",
        "masterplan",
        "esploso"
      ]
    },
    {
      "id": "celio",
      "socio": "parroccini",
      "titolo": {
        "it": "Centro per le Arti al Celio",
        "en": "Centre for the Arts on the Celio"
      },
      "luogo": {
        "it": "Roma",
        "en": "Rome"
      },
      "anno": 2025,
      "tipologia": {
        "it": "Edificio pubblico",
        "en": "Public building"
      },
      "stato": {
        "it": "Universitario",
        "en": "Academic"
      },
      "contesto": {
        "it": "Tesi di laurea, Sapienza Università di Roma",
        "en": "Degree thesis, Sapienza Università di Roma"
      },
      "docenti": "Anna Giovannelli",
      "descrizione": {
        "it": "Il progetto per il Centro per le Arti al Celio amplia l'Antiquarium, affacciato sulla Valle del Colosseo. Un vestibolo accoglie i visitatori, mentre gli ipogei ospitano i servizi dello spazio museale e l'emiciclo funge da spazio espositivo e distributivo. Una basilica ipostila può accogliere conferenze e collega i diversi ambienti, e un propileo con caffetteria segna l'ingresso. Gli horrea sono dedicati alla produzione e all'esibizione artistica, un teatro e un odeon alle rappresentazioni, e il foro alla conservazione e catalogazione dei reperti. Il pecile è un terrapieno panoramico sulla valle.",
        "en": "The design for the Centro per le Arti al Celio extends the Antiquarium, overlooking the Colosseum valley. A vestibule welcomes visitors, the underground spaces house the museum's services, and the hemicycle serves for exhibition and circulation. A hypostyle basilica can host conferences and links the different rooms, while a propylaeum with a café marks the entrance. The horrea are devoted to artistic production and display, a theatre and an odeon to performances, and the forum to conserving and cataloguing finds. The pecile is a panoramic embankment over the valley."
      },
      "cartella": "celio",
      "copertina": "viste-piazza",
      "immagini": [
        [
          "viste-piazza",
          1600,
          1065,
          "Vista dello spazio aperto verso il Colosseo",
          "View of the open space towards the Colosseum"
        ],
        [
          "viste-sezione",
          1600,
          860,
          "Sezione prospettica",
          "Perspective section"
        ],
        [
          "inquadramento",
          1600,
          1136,
          "Planimetria del Colosseo e del Celio",
          "Site plan of the Colosseum and the Celio"
        ],
        [
          "pianta-terra",
          1600,
          1136,
          "Pianta del piano terra",
          "Ground floor plan"
        ],
        [
          "assonometria",
          924,
          1600,
          "Esploso assonometrico",
          "Exploded axonometric view"
        ],
        [
          "sezioni",
          1507,
          1600,
          "Sezioni prospettiche",
          "Perspective sections"
        ]
      ],
      "copertinaRitaglio": [
        "copertina",
        1200,
        899,
        "Vista dello spazio aperto verso il Colosseo",
        "View of the open space towards the Colosseum"
      ],
      "mappa": "https://earth.google.com/web/search/Celio%2C%20Roma",
      "alta": [
        "viste-piazza",
        "viste-sezione",
        "inquadramento",
        "pianta-terra",
        "assonometria",
        "sezioni"
      ]
    },
    {
      "id": "tuscolano",
      "socio": "telve",
      "titolo": {
        "it": "Riuso del quartiere Tuscolano",
        "en": "Reuse of the Tuscolano district"
      },
      "luogo": {
        "it": "Roma",
        "en": "Rome"
      },
      "anno": 2025,
      "tipologia": {
        "it": "Residenziale",
        "en": "Residential"
      },
      "stato": {
        "it": "Universitario",
        "en": "Academic"
      },
      "contesto": {
        "it": "Tesi di laurea, Sapienza Università di Roma",
        "en": "Degree thesis, Sapienza Università di Roma"
      },
      "docenti": {
        "it": "Barbara Pizzo, Dina Nencini, con il supporto di Maria Clara Ghia",
        "en": "Barbara Pizzo, Dina Nencini, with the support of Maria Clara Ghia"
      },
      "descrizione": {
        "it": "Nel contesto denso e stratificato del quartiere INA-Casa Tuscolano II, progettato nel secondo dopoguerra da Muratori e De Renzi, il progetto di riuso propone il frazionamento di alcuni appartamenti in unità più piccole ed adeguate alle esigenze abitative attuali, accompagnando questo intervento con una serie di inserimenti puntuali di spazi semipubblici nel quartiere. Sostenuta da servizi di carattere pubblico o collettivo, la densificazione resta controllata e avviene senza consumo di suolo o di cubatura: gli interventi sugli appartamenti riguardano il ridisegno delle partizioni interne e l'aggiunta di corpi distributivi esterni leggeri.",
        "en": "Within the dense, layered context of the INA-Casa Tuscolano II district, designed in the postwar period by Muratori and De Renzi, this reuse project proposes subdividing some of the apartments into smaller units better suited to today's housing needs, paired with a series of targeted insertions of semi-public spaces throughout the neighbourhood. This densification is supported by public or collective-use facilities, achieving controlled growth without consuming new land or additional volume: the interventions on the apartments concern the redesign of internal partitions and the addition of lightweight external circulation elements."
      },
      "cartella": "16-tuscolano",
      "copertina": "foto-2",
      "immagini": [
        [
          "foto-2",
          960,
          640,
          "Modello visto dall'alto",
          "Model seen from above"
        ],
        [
          "disegno-1",
          1112,
          1112,
          "Planimetria",
          "Site plan"
        ],
        [
          "foto-4",
          960,
          640,
          "Modello, dettaglio degli edifici in linea",
          "Model, detail of the housing blocks"
        ],
        [
          "disegno-3",
          1112,
          866,
          "Sezione prospettica a mano",
          "Hand-drawn perspective section"
        ],
        [
          "foto-1",
          960,
          640,
          "Modello sul cavalletto",
          "Model on its trestle"
        ],
        [
          "disegno-2",
          867,
          699,
          "Piante degli appartamenti",
          "Plans of the apartments"
        ]
      ],
      "mappa": "https://earth.google.com/web/search/Largo+Spartaco%2C+Roma"
    },
    {
      "id": "livraria",
      "socio": "ghersi",
      "titolo": {
        "it": "Caffetteria e libreria a Maputo",
        "en": "Café and bookshop in Maputo"
      },
      "luogo": {
        "it": "Maputo, Mozambico",
        "en": "Maputo, Mozambique"
      },
      "anno": 2023,
      "tipologia": {
        "it": "Edificio pubblico",
        "en": "Public building"
      },
      "stato": {
        "it": "Universitario",
        "en": "Academic"
      },
      "contesto": {
        "it": "Corso di Architettura degli Interni, Sapienza Università di Roma",
        "en": "Interior Architecture course, Sapienza Università di Roma"
      },
      "docenti": "Andrea Grimaldi",
      "descrizione": {
        "it": "Dopo la riapertura del museo di scienze naturali è nata l'esigenza di dotare l'edificio di uno spazio al servizio di visitatori e cittadini. Il progetto riusa un muro in blocchi di cemento sul retro dell'edificio e vi interviene con il legno, il materiale più conosciuto sul posto. La permeabilità è il tema principale: le superfici che dividono l'interno dal giardino e dal patio sono porose ed effimere, e pareti pieghevoli a persiana aprono completamente la vista sul patio. Gli elementi che danno unità allo spazio sono orizzontali. La grande copertura piana protegge dai monsoni equatoriali, mentre il piano di calpestio è rialzato di 45 cm su una piattaforma in legni locali come ebano e padouk, che distingue gli spazi di sosta da quelli di passaggio e aggiunge un carattere percussivo all'attraversamento.",
        "en": "After the natural science museum reopened, the building needed a space to serve visitors and citizens. The project reuses a concrete block wall at the back of the building and works on it with wood, the material best known locally. Permeability is the main theme: the surfaces dividing the interior from the garden and patio are porous and ephemeral, and folding shutter walls open the view completely onto the patio. The elements that give the space its unity are horizontal. The large flat roof protects from the equatorial monsoons, while the floor is raised 45 cm on a platform of local woods such as ebony and paduk, which separates spaces of rest and passage and adds a percussive character to crossing the building."
      },
      "cartella": "livraria",
      "copertina": "modello-1",
      "immagini": [
        [
          "modello-1",
          1489,
          1117,
          "Modello visto dall'alto",
          "Model seen from above"
        ],
        [
          "modello-4",
          1600,
          1200,
          "Modello, interno verso la scala",
          "Model, interior towards the stair"
        ],
        [
          "modello-5",
          1496,
          1122,
          "Modello, il patio",
          "Model, the patio"
        ],
        [
          "pianta",
          1600,
          1295,
          "Pianta del piano terra",
          "Ground floor plan"
        ],
        [
          "sezioni",
          1600,
          1139,
          "Prospetto e sezione",
          "Elevation and section"
        ],
        [
          "schizzi",
          1600,
          916,
          "Schizzi di sezione e dettagli",
          "Section sketches and details"
        ]
      ],
      "mappa": "https://earth.google.com/web/search/Rua%20dos%20Lusiadas%2C%20Maputo",
      "alta": [
        "modello-4",
        "pianta",
        "sezioni",
        "schizzi"
      ]
    },
    {
      "id": "casa-crinale",
      "socio": "parroccini",
      "titolo": {
        "it": "Casa sul crinale a Scandriglia",
        "en": "House on the ridge in Scandriglia"
      },
      "luogo": {
        "it": "Scandriglia",
        "en": "Scandriglia"
      },
      "anno": 2020,
      "tipologia": {
        "it": "Residenziale",
        "en": "Residential"
      },
      "stato": {
        "it": "Universitario",
        "en": "Academic"
      },
      "contesto": {
        "it": "Laboratorio di Progettazione I, Sapienza Università di Roma",
        "en": "Design Studio I, Sapienza Università di Roma"
      },
      "docenti": "Anna Giovannelli",
      "descrizione": {
        "it": "Progetto per una villa di campagna su un crinale di montagna, nei pressi del Convento di San Nicola. Il progetto assume come principio fondativo l'accentuata e inospitale conformazione del suolo, cercando di trasformarla nel punto di forza della composizione. Un sistema di percorsi pedonali, intervallato da soste panoramiche, conduce verso la casa attraverso il bosco. La villa è composta da un piano terra che si staglia sul versante e da un piano ipogeo con le camere da letto. Un sentiero all'aperto porta a una piccola dependance, pensata come luogo di riflessione.",
        "en": "Design for a country villa on a mountain ridge, near the Convent of San Nicola. The project takes the steep, inhospitable shape of the ground as its founding principle and tries to make it the strength of the composition. A system of footpaths, punctuated by panoramic stops, leads to the house through the woods. The villa has a ground floor standing out against the slope and a basement level with the bedrooms. An open-air path leads to a small annexe, conceived as a place for reflection."
      },
      "cartella": "casa-crinale",
      "copertina": "modello-alto",
      "immagini": [
        [
          "modello-alto",
          1011,
          1007,
          "Modello visto dall'alto",
          "Model seen from above"
        ],
        [
          "modello-bosco",
          1009,
          469,
          "Modello, la casa tra gli alberi",
          "Model, the house among the trees"
        ],
        [
          "planimetria",
          718,
          1035,
          "Planimetria",
          "Site plan"
        ],
        [
          "modello-pendio",
          867,
          1600,
          "Modello, il versante",
          "Model, the slope"
        ],
        [
          "modello-viste",
          1600,
          990,
          "Modello, tre viste dall'alto",
          "Model, three views from above"
        ],
        [
          "assonometria",
          921,
          1263,
          "Assonometria",
          "Axonometric view"
        ]
      ],
      "mappa": "https://earth.google.com/web/search/Scandriglia%20RI"
    },
    {
      "id": "quadraro",
      "socio": "telve",
      "titolo": {
        "it": "Social housing al Quadraro",
        "en": "Social housing in the Quadraro district"
      },
      "luogo": {
        "it": "Roma",
        "en": "Rome"
      },
      "anno": 2020,
      "tipologia": {
        "it": "Residenziale",
        "en": "Residential"
      },
      "stato": {
        "it": "Universitario",
        "en": "Academic"
      },
      "contesto": {
        "it": "Sapienza Università di Roma",
        "en": "Sapienza Università di Roma"
      },
      "docenti": "Fabrizio Toppetti",
      "descrizione": {
        "it": "Inserendosi in un lotto che rappresenta uno dei margini del quartiere Quadraro, il progetto si pone come ricucitura di un importante vuoto urbano attraverso la definizione di corpi abitativi e spazi pubblici urbani. Una linea spezzata di edifici a ballatoio divide il lotto in uno spazio urbano più aperto al dialogo con il contesto a sud e uno più riservato a nord. L'arredo urbano, distinto tra spazi di seduta e pocket parks, disegna un gradiente ampio di tipologie di spazio, dall'ambito quasi domestico fino ad un carattere di piazza.",
        "en": "Set within a plot that marks one of the edges of the Quadraro district, the project positions itself as the stitching together of a significant urban void through the definition of housing blocks and urban public spaces. A broken line of gallery-access buildings divides the plot into a more open urban space in dialogue with the context to the south, and a more reserved one to the north. The urban furnishing, distinguished between seating areas and pocket parks, traces a broad gradient of spatial typologies, ranging from an almost domestic character to that of a piazza."
      },
      "cartella": "01-quadraro",
      "copertina": "foto-1",
      "immagini": [
        [
          "foto-1",
          732,
          945,
          "Modello visto dall'alto",
          "Model seen from above"
        ],
        [
          "foto-2",
          960,
          695,
          "Modello visto di scorcio",
          "Model, oblique view"
        ],
        [
          "foto-3",
          960,
          960,
          "Modello, viste a livello del suolo",
          "Model, views at ground level"
        ],
        [
          "disegno-1",
          1112,
          1112,
          "Assonometria",
          "Axonometric view"
        ],
        [
          "disegno-2",
          1112,
          982,
          "Assonometria nel contesto",
          "Axonometric view in context"
        ],
        [
          "disegno-3",
          1076,
          1043,
          "Assonometria e piante",
          "Axonometric view and plans"
        ]
      ],
      "mappa": "https://earth.google.com/web/search/quadraro/@41.87453161,12.5496949,42.8152743a,624.34978126d,35y,10.43704314h,0.22766645t,0r/data=CiwiJgokCUVCK2NEnUVAEYcDkfbW0kRAGQ0PsT0rnS1AIf7GDxHoySRAQgIIAToDCgEwSg0I____________ARAA"
    },
    {
      "id": "clementina",
      "socio": "ghersi",
      "titolo": {
        "it": "Centro culturale in via Clementina",
        "en": "Cultural centre on Via Clementina"
      },
      "luogo": {
        "it": "Roma",
        "en": "Rome"
      },
      "anno": 2021,
      "tipologia": {
        "it": "Edificio pubblico",
        "en": "Public building"
      },
      "stato": {
        "it": "Universitario",
        "en": "Academic"
      },
      "contesto": {
        "it": "Laboratorio di Progettazione II, Sapienza Università di Roma",
        "en": "Design Studio II, Sapienza Università di Roma"
      },
      "docenti": "Anna Giovannelli",
      "descrizione": {
        "it": "In un contesto in cui apprendimento e lavoro non sono più confinati a luoghi specifici, gli spazi al servizio della comunità diventano un tema sempre più importante per le città. Il centro di via Clementina, nel centro di Roma, ospita spazi di apprendimento aperti, laboratori, sale studio e un auditorium. Il passo strutturale deriva dallo studio dell'isolato: tre campate da nove metri, separate da una campata di servizio di tre metri e mezzo. L'attacco a terra reinterpreta il dislivello di due metri e mezzo della strada, con un ingresso centrale aperto, simile a una piazza coperta, e un ingresso laterale vetrato. Ai piani superiori gli spazi nascono dall'intersezione di piani, in una sequenza di ambienti concavi e convessi.",
        "en": "In a changing context where learning and working are no longer confined to specific places, spaces serving the community are an increasingly important theme for cities. The centre on Via Clementina, in central Rome, houses open learning spaces, workshops, study rooms and an auditorium. The structural spacing comes from a study of the block: three nine-metre bays, separated by a three-and-a-half-metre service bay. The ground floor reinterprets the street's two-and-a-half-metre change in level, with an open central entrance resembling a covered square and a glazed side entrance. On the upper floors, spaces arise from the intersection of planes, in a sequence of concave and convex rooms."
      },
      "cartella": "clementina",
      "copertina": "modello-alto",
      "coperturaIntera": true,
      "immagini": [
        [
          "modello-alto",
          1600,
          929,
          "Modello visto dall'alto",
          "Model seen from above"
        ],
        [
          "modello-corte",
          1600,
          1311,
          "Modello, lato della corte",
          "Model, courtyard side"
        ],
        [
          "modello-interni",
          1600,
          818,
          "Modello, gli spazi interni",
          "Model, the interior"
        ],
        [
          "tavola",
          1600,
          1195,
          "Prospetto, pianta e sezioni",
          "Elevation, plan and sections"
        ],
        [
          "esploso",
          1200,
          1600,
          "Esploso assonometrico",
          "Exploded axonometric view"
        ],
        [
          "griglia",
          1600,
          1012,
          "Griglia dei diagrammi",
          "Grid of diagrams"
        ]
      ],
      "alta": [
        "modello-alto",
        "modello-corte",
        "modello-interni",
        "tavola",
        "esploso",
        "griglia"
      ],
      "mappa": "https://earth.google.com/web/search/Via%20Clementina%2C%20Roma"
    },
    {
      "id": "monti",
      "socio": "parroccini",
      "titolo": {
        "it": "Centro culturale in via Clementina",
        "en": "Cultural centre on Via Clementina"
      },
      "luogo": {
        "it": "Roma",
        "en": "Rome"
      },
      "anno": 2021,
      "tipologia": {
        "it": "Edificio pubblico",
        "en": "Public building"
      },
      "stato": {
        "it": "Universitario",
        "en": "Academic"
      },
      "contesto": {
        "it": "Laboratorio di Progettazione II, Sapienza Università di Roma",
        "en": "Design Studio II, Sapienza Università di Roma"
      },
      "docenti": "Anna Giovannelli",
      "descrizione": {
        "it": "Progetto per un centro culturale nel Rione Monti, con aule studio, biblioteca, caffetteria e auditorium. L'edificio in via Clementina parte dalla comprensione delle dinamiche che hanno portato la città a svilupparsi in quest'area, tra questioni amministrative e commerciali che hanno determinato i tipi edilizi. Il principio insediativo del lotto gotico è la regola che governa la composizione: come nella città storica, una successione di setti divide idealmente il lotto in porzioni spaziali, che possono slittare e svilupparsi da una parte e dall'altra del fronte urbano.",
        "en": "Design for a cultural centre in the Rione Monti, with study rooms, a library, a café and an auditorium. The building on Via Clementina starts from understanding the forces that shaped the city's growth in this area, from the administrative and commercial questions that determined its building types. The settlement principle of the Gothic plot is the rule governing the composition: as in the historic city, a succession of walls ideally divides the plot into spatial portions, which can shift and extend on either side of the urban front."
      },
      "cartella": "monti",
      "copertina": "modello-alto",
      "coperturaIntera": true,
      "immagini": [
        [
          "modello-alto",
          1600,
          740,
          "Modello visto dall'alto",
          "Model seen from above"
        ],
        [
          "modello-piani",
          778,
          1600,
          "Modello, i tre livelli",
          "Model, the three levels"
        ],
        [
          "modello-contesto",
          1600,
          729,
          "Modello nel contesto",
          "Model in its context"
        ],
        [
          "tavola",
          1600,
          1139,
          "Prospetti, sezione prospettica e assonometrie",
          "Elevations, perspective section and axonometric views"
        ],
        [
          "esploso",
          1200,
          1600,
          "Esploso assonometrico",
          "Exploded axonometric view"
        ],
        [
          "griglia",
          1600,
          1012,
          "Griglia dei diagrammi",
          "Grid of diagrams"
        ]
      ],
      "alta": [
        "modello-alto",
        "modello-piani",
        "tavola",
        "esploso",
        "griglia"
      ],
      "mappa": "https://earth.google.com/web/search/Via%20Clementina%2C%20Roma"
    },
    {
      "id": "rionale",
      "socio": "telve",
      "titolo": {
        "it": "Centro culturale in via Clementina",
        "en": "Cultural centre on Via Clementina"
      },
      "luogo": {
        "it": "Roma",
        "en": "Rome"
      },
      "anno": 2021,
      "tipologia": {
        "it": "Edificio pubblico",
        "en": "Public building"
      },
      "stato": {
        "it": "Universitario",
        "en": "Academic"
      },
      "contesto": {
        "it": "Laboratorio di Progettazione II, Sapienza Università di Roma",
        "en": "Design Studio II, Sapienza Università di Roma"
      },
      "docenti": "Anna Giovannelli",
      "descrizione": {
        "it": "Il progetto si pone come un edificio pubblico a servizio del complesso monumentale Angelo Mai nel Rione Monti. I temi approfonditi sono il linguaggio dell'inserimento nel contesto storico, esplicitato nei prospetti verso la strada e il cortile, insieme al dialogo tra spazi di uso collettivo (laboratori e biblioteca) con spazi di carattere pubblico. Il carattere degli isolati di Monti, con un rapporto con la strada netto e definito, genera un forte contrasto tra la facciata esterna chiusa e l'interno aperto verso il cortile tramite svuotamenti di volume. Il piano terra, quasi pubblico, ospita lo spazio espositivo, la libreria e la caffetteria.",
        "en": "The project is conceived as a public building serving the Angelo Mai monumental complex in the Monti district. The themes explored include the language of insertion into the historic context, made explicit in the elevations facing the street and the courtyard, together with the dialogue between spaces of collective use (workshops and a library) and spaces of a public character. The character of the Monti city blocks, with a sharp, well-defined relationship to the street, generates a strong contrast between the closed external façade and the interior, opened toward the courtyard through volumetric voids. The ground floor, almost public in nature, houses the exhibition space, the library and the café."
      },
      "cartella": "02-rionale",
      "copertina": "foto-3",
      "coperturaIntera": true,
      "immagini": [
        [
          "foto-3",
          960,
          788,
          "Modello visto dall'alto",
          "Model seen from above"
        ],
        [
          "foto-1",
          960,
          532,
          "Modello visto di fronte",
          "Model, front view"
        ],
        [
          "disegno-1",
          1112,
          689,
          "Prospetto a mano",
          "Hand-drawn elevation"
        ],
        [
          "disegno-2",
          1038,
          806,
          "Assonometria",
          "Axonometric view"
        ],
        [
          "esploso",
          1200,
          1600,
          "Esploso assonometrico",
          "Exploded axonometric view"
        ],
        [
          "griglia",
          1600,
          693,
          "Griglia dei diagrammi",
          "Grid of diagrams"
        ]
      ],
      "mappa": "https://earth.google.com/web/@41.89596263,12.49241558,44.4674897a,94.70249472d,35y,221.79231323h,0t,0r/data=CgRCAggBOgMKATBKDQj___________8BEAA"
    }
  ]
};
