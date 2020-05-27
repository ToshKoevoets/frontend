export const CREATE_SIGNAL = {
  autoSuggest: '[data-testid="autoSuggest"]',
  buttonUploadFile: '#formUpload',
  dropdownDag: '#incident_date-select-day',
  dropdownUur: '#incident_date-select-time-hours',
  dropdownMinuten: '#incident_date-select-time-minutes',
  errorList: '.header__errors',
  imageAddressMarker: 'div[class="leaflet-pane leaflet-marker-pane"]',
  inputPhoneNumber: '[type=tel]',
  inputEmail: '[type=email]',
  imageFileUpload: '[class*=Image__ImageContainer]',
  linkChangeEmailAddress: '[class*=IncidentPreview__LinkContainer] > [href="/incident/email"]',
  linkChangePhoneNumber: '[class*=IncidentPreview__LinkContainer] > [href="/incident/telefoon"]',
  linkChangeSignalInfo: '[class*=IncidentPreview__LinkContainer] > [href="/incident/beschrijf"]',
  mapContainer: '.leaflet-container',
  mapStaticImage:'[data-testid=mapStaticImage]',
  mapStaticMarker:'[data-testid=mapStaticMarker]', 
  mapPreview: '[data-testid=map-preview]',
  radioButtonTijdstipNu: '#datetime-Nu1',
  radioButtonTijdstipEerder: '#datetime-Eerder1',
};

export const BEDRIJVEN_HORECA = {
  checkBoxDronken: '#extra_bedrijven_horeca_personen-dronken_bezoekers1',
  checkBoxSchreeuwen: '#extra_bedrijven_horeca_personen-schreeuwende_bezoekers1',
  checkBoxWildplassen: '#extra_bedrijven_horeca_personen-wildplassen1',
  inputWieWat: '[class*=Input__StyledInput]',
  inputAdres: '[class*=Input__StyledInput]',
  inputDatum: '[class*=Input__StyledInput]',
  radioButtonHoreca: '#extra_bedrijven_horeca_wat-horecabedrijf1',
  radioButtonAnderBedrijf: '#extra_bedrijven_horeca_wat-ander_soort_bedrijf1',
  radioButtonVakerJa: '#extra_bedrijven_horeca_vaker-ja1',
  radioButtonVakerNee: '#extra_bedrijven_horeca_vaker-nee1',
};

export const BOTEN = {
  inputNaamBoot: '[class*=Input__StyledInput]',
  inputNogMeer: '[class*=TextArea__StyledArea]',
  radioButtonRondvaartbootJa: '#extra_boten_snelheid_rondvaartboot-ja1',
};

export const CONTAINERS = {
  inputContainerSoort: '[class*=Input__Styled]',
  inputContainerNummer: '[class*=Input__Styled]',
};

export const JONGEREN = {
  checkBoxVaker: '#extra_personen_overig_vaker-ja1',
  inputMoment: '[class*=TextArea__StyledArea]',
  radioButtonAantalPersonen: '#extra_personen_overig-4-61',
};

export const LANTAARNPAAL = {
  mapSelectLamp: '[data-testid=map-base]',
  radioButtonAanrijding: '#extra_straatverlichting-is_gevolg_van_aanrijding1',
  radioButtonAantalLichtenpunten: '#extra_straatverlichting_hoeveel-meerdere_lichtpunten1',
  radioButtonOpGrond: '#extra_straatverlichting-lamp_op_grond_of_scheef1',
  radioButtonDeur: '#extra_straatverlichting-deurtje_weg_of_open1',
  radioButtonLosseKabels: '#extra_straatverlichting-losse_kabels_zichtbaar_of_lamp_los1',
  radioButtonNietGevaarlijk: '#extra_straatverlichting-niet_gevaarlijk1',
  radioButtonEenLichtpunt: '#extra_straatverlichting_hoeveel-1_lichtpunt1',
};

// Selectors for stankoverlast
export const STANK_OVERLAST = {
  inputGeur: '[class*=Input__StyledInput]',
  inputOorzaakGeur: '[class*=Input__StyledInput]',
  inputWeersomstandigheden: '[class*=Input__StyledInput]',
  radioButtonRaamOpen: '#extra_bedrijven_horeca_stank_ramen-ja1',
  radioButtonRaamGesloten: '#extra_bedrijven_horeca_stank_ramen-nee1',
};

export const VERKEERSLICHT = {
  inputNummerVerkeerslicht: '[class*=Input__StyledInput]',
  inputRijrichting: '[class*=Input__StyledInput]',
  radioButtonAanrijding: '#extra_verkeerslicht-is_gevolg_van_aanrijding1',
  radioButtonOpGrond: '#extra_verkeerslicht-verkeerslicht_op_grond_of_scheef1',
  radioButtonDeur: '#extra_verkeerslicht-deurtje_weg_of_open1',
  radioButtonLosseKabels: '#extra_verkeerslicht-losse_kabels_zichtbaar_of_lamp_los1',
  radioButtonNietGevaarlijk: '#extra_verkeerslicht-niet_gevaarlijk1',
  radioButtonEenLichtpunt: '#extra_verkeerslicht_hoeveel-1_lichtpunt1',
  radioButtonTypeAuto: '#extra_verkeerslicht_welk-auto1',
  radioButtonTypeFiets: '#extra_verkeerslicht_welk-fiets1',
  radioButtonTypeTramBus: '#extra_verkeerslicht_welk-tram_bus1',
  radioButtonTypeVoetganger: '#extra_verkeerslicht_welk-voetganger1',
};

export const WEGDEK = {
  inputSoortWegdek: '[class*=Input__Styled]',
};

export const WONEN_LEEGSTAND = {
  inputEigenaar: '[class*=Input__StyledInput]',
  inputGeenContact: '[class*=Input__StyledInput]',
  inputLink: '[class*=Input__StyledInput]',
  inputNaam: '[class*=Input__StyledInput]',
  inputTijdstip: '[class*=Input__StyledInput]',
  inputWatDoetPersoon: '[class*=Input__StyledInput]',
  radioButtonBewonerJa: '#extra_wonen_woonkwaliteit_bewoner-ja1',
  radioButtonBewonerNee: '#extra_wonen_woonkwaliteit_bewoner-nee1',
  radioButtonBewoningJa: '#extra_wonen_vakantieverhuur_bewoning-ja1',
  radioButtonBewoningNee: '#extra_wonen_vakantieverhuur_bewoning-nee1',
  radioButtonBewoningWeetIkNiet: '#extra_wonen_vakantieverhuur_bewoning-weet_ik_niet1',
  radioButtonContactJa: '#extra_wonen_woonkwaliteit_toestemming_contact-ja1',
  radioButtonContactNee: '#extra_wonen_woonkwaliteit_toestemming_contact-nee1',
  radioButtonGebruiktJa: '#extra_wonen_leegstand_woning_gebruik-ja1',
  radioButtonGebruiktNee: '#extra_wonen_leegstand_woning_gebruik-nee1',
  radioButtonGebruiktWeetIkNiet: '#extra_wonen_leegstand_woning_gebruik-weet_ik_niet1',
  radioButtonLeegMinderDanZesMaanden: '#extra_wonen_leegstand_periode-korter_dan_zes_maanden1',
  radioButtonLeegPeriodeWeetIkNiet: '#extra_wonen_leegstand_periode-weet_ik_niet1',
  radioButtonLeegZesMaandenOfLanger: '#extra_wonen_leegstand_periode-langer_dan_zes_maanden1',
};

export const WONEN_ONDERVERHUUR = {
  inputAdresHuurder: '[class*=Input__StyledInput]',
  inputHuurder: '[class*=Input__StyledInput]',
  inputNamen: '[class*=TextArea__StyledArea]',
  inputTijdstip: '[class*=Input__StyledInput]',
  radioButtonAantalPersonen1: '#extra_wonen_onderhuur_aantal_personen-een_persoon1',
  radioButtonAantalPersonen2: '#extra_wonen_onderhuur_aantal_personen-twee_personen1',
  radioButtonAantalPersonen3: '#extra_wonen_onderhuur_aantal_personen-drie_personen1',
  radioButtonAantalPersonen4: '#extra_wonen_onderhuur_aantal_personen-vier_personen1',
  radioButtonAantalPersonen5: '#extra_wonen_onderhuur_aantal_personen-vijf_of_meer_personen1',
  radioButtonAantalPersonenWeetNiet: '#extra_wonen_onderhuur_aantal_personen-weet_ik_niet1',
  radioButtonAdresHuurderJaZelfde: '#extra_wonen_onderhuur_huurder_woont-aangegeven_adres1',
  radioButtonAdresHuurderJaAnder: '#extra_wonen_onderhuur_huurder_woont-ander_adres1',
  radioButtonAdresHuurderNee: '#extra_wonen_onderhuur_huurder_woont-weet_ik_niet1',
  radioButtonFamilieJa: '#extra_wonen_onderhuur_bewoners_familie-ja1',
  radioButtonFamilieNee: '#extra_wonen_onderhuur_bewoners_familie-nee1',
  radioButtonFamilieWeetNiet: '#extra_wonen_onderhuur_bewoners_familie-weet_ik_niet1',
  radioButtonHoeLangMinderZesMaanden: '#extra_wonen_onderhuur_woon_periode-korter_dan_zes_maanden1',
  radioButtonHoeLangLangerZesMaanden: '#extra_wonen_onderhuur_woon_periode-langer_dan_zes_maanden1',
  radioButtonHoeLangWeetNiet: '#extra_wonen_onderhuur_woon_periode-weet_ik_niet1',
};

export const WONEN_OVERIG = {
  radioButtonAchterstalligOnderhoud: '#wonen_overig-woningkwaliteit1',
  radioButtonCrimineleBewoning: '#wonen_overig-crimineleBewoning1',
  radioButtonIllegaleOnderhuur: '#wonen_overig-onderhuur1',
  radioButtonLeegstand: '#wonen_overig-leegstand1',
  radioButtonToeristischeVerhuur: '#wonen_overig-vakantieverhuur1',
  radioButtonWoningdelen: '#wonen_overig-woningdelen1',
};

export const WONEN_VAKANTIEVERHUUR = {
  inputBewoner: '[class*=Input__StyledInput]',
  inputLink: '[class*=Input__StyledInput]',
  radioButtonBewoningJa: '#extra_wonen_vakantieverhuur_bewoning-ja1',
  radioButtonBewoningNee: '#extra_wonen_vakantieverhuur_bewoning-nee1',
  radioButtonBewoningWeetIkNiet: '#extra_wonen_vakantieverhuur_bewoning-weet_ik_niet1',
  radioButtonHoeVaakDagelijks: '#extra_wonen_vakantieverhuur_hoe_vaak-dagelijks1',
  radioButtonHoeVaakEersteKeer: '#extra_wonen_vakantieverhuur_hoe_vaak-eerste_keer1',
  radioButtonHoeVaakMaandelijks: '#extra_wonen_vakantieverhuur_hoe_vaak-maandelijks1',
  radioButtonHoeVaakWekelijks: '#extra_wonen_vakantieverhuur_hoe_vaak-wekelijks1',
  radioButtonHoeveelVierOfMinder: '#extra_wonen_vakantieverhuur_aantal_mensen-vier_of_minder1',
  radioButtonHoeveelVijfOfMeer: '#extra_wonen_vakantieverhuur_aantal_mensen-vijf_of_meer1',
  radioButtonKlachtGemeldJa: '#extra_wonen_woonkwaliteit_gemeld_bij_eigenaar-ja1',
  radioButtonKlachtGemeldNee: '#extra_wonen_woonkwaliteit_gemeld_bij_eigenaar-nee1',
  radioButtonLeegMinderDanZesMaanden: '#extra_wonen_leegstand_periode-korter_dan_zes_maanden1',
  radioButtonLeegPeriodeWeetIkNiet: '#extra_wonen_leegstand_periode-weet_ik_niet1',
  radioButtonLeegZesMaandenOfLanger: '#extra_wonen_leegstand_periode-langer_dan_zes_maanden1',
  radioButtonNamensBewonerJa: '#extra_wonen_woonkwaliteit_namens_bewoner-ja1',
  radioButtonNamensBewonerNee: '#extra_wonen_woonkwaliteit_namens_bewoner-nee1',
  radioButtonOnlineJa: '#extra_wonen_vakantieverhuur_online_aangeboden-ja1',
  radioButtonOnlineNee: '#extra_wonen_vakantieverhuur_online_aangeboden-nee1',
  radioButtonToeristenJa: '#extra_wonen_vakantieverhuur_toeristen_aanwezig-ja1',
  radioButtonToeristenNee: '#extra_wonen_vakantieverhuur_toeristen_aanwezig-nee1',
  radioButtonToeristenWeetIkNiet: '#extra_wonen_vakantieverhuur_toeristen_aanwezig-weet_ik_niet1',
  radioButtonVerderMeldformulier: '#extra_wonen_vakantieverhuur_bellen_of_formulier-formulier1',
  radioButtonVerderTelefonisch: '#extra_wonen_vakantieverhuur_bellen_of_formulier-bellen1',
  radioButtonWanneerDoordeweeks: '#extra_wonen_vakantieverhuur_wanneer-doordeweeks1',
  radioButtonWanneerWeekend: '#extra_wonen_vakantieverhuur_wanneer-weekend1',
  radioButtonWanneerWisselend: '#extra_wonen_vakantieverhuur_wanneer-wisselend1',
};

export const WONEN_WONINGDELEN = {
  inputEigenaar: '[class*=Input__StyledInput]',
  inputTijdstip: '[class*=Input__StyledInput]',
  inputWatSpeeltZichAf: '[class*=Input__StyledInput]',
  radioButtonAantalPersonen1: '#extra_wonen_woningdelen_aantal_personen-een_persoon1',
  radioButtonAantalPersonen2: '#extra_wonen_woningdelen_aantal_personen-twee_personen1',
  radioButtonAantalPersonen3: '#extra_wonen_woningdelen_aantal_personen-drie_personen1',
  radioButtonAantalPersonen4: '#extra_wonen_woningdelen_aantal_personen-vier_personen1',
  radioButtonAantalPersonen5: '#extra_wonen_woningdelen_aantal_personen-vijf_of_meer_personen1',
  radioButtonAantalPersonenWeetNiet: '#extra_wonen_woningdelen_aantal_personen-weet_ik_niet1',
  radioButtonAdresHuurderJaZelfde: '#extra_wonen_woningdelen_adres_huurder-zelfde_adres1',
  radioButtonAdresHuurderJaAnder: '#extra_wonen_woningdelen_adres_huurder-ander_adres1',
  radioButtonAdresHuurderNee: '#extra_wonen_woningdelen_adres_huurder-weet_ik_niet1',
  radioButtonAndereBewonersJa: '#extra_wonen_woningdelen_wisselende_bewoners-ja1',
  radioButtonAndereBewonersNee: '#extra_wonen_woningdelen_wisselende_bewoners-nee1',
  radioButtonAndereBewonersWeetNiet: '#extra_wonen_woningdelen_wisselende_bewoners-weet_ik_niet1',
  radioButtonFamilieJa: '#extra_wonen_woningdelen_bewoners_familie-ja1',
  radioButtonFamilieNee: '#extra_wonen_woningdelen_bewoners_familie-nee1',
  radioButtonFamilieWeetNiet: '#extra_wonen_woningdelen_bewoners_familie-weet_ik_niet1',
  radioButtonTegelijkJa: '#extra_wonen_woningdelen_samenwonen-ja1',
  radioButtonTegelijkNee: '#extra_wonen_woningdelen_samenwonen-nee1',
  radioButtonTegelijkWeetNiet: '#extra_wonen_woningdelen_samenwonen-weet_ik_niet1',
};

export const WONEN_WONINGKWALITEIT = {
  inputGeenContact: '[class*=Input__StyledInput]',
  radioButtonBewonerJa: '#extra_wonen_woonkwaliteit_bewoner-ja1',
  radioButtonBewonerNee: '#extra_wonen_woonkwaliteit_bewoner-nee1',
  radioButtonContactJa: '#extra_wonen_woonkwaliteit_toestemming_contact-ja1',
  radioButtonContactNee: '#extra_wonen_woonkwaliteit_toestemming_contact-nee1',
  radioButtonGevaarJa: '#extra_wonen_woonkwaliteit_direct_gevaar-ja1',
  radioButtonGevaarNee: '#extra_wonen_woonkwaliteit_direct_gevaar-nee1',
  radioButtonKlachtGemeldJa: '#extra_wonen_woonkwaliteit_gemeld_bij_eigenaar-ja1',
  radioButtonKlachtGemeldNee: '#extra_wonen_woonkwaliteit_gemeld_bij_eigenaar-nee1',
  radioButtonNamensBewonerJa: '#extra_wonen_woonkwaliteit_namens_bewoner-ja1',
  radioButtonNamensBewonerNee: '#extra_wonen_woonkwaliteit_namens_bewoner-nee1',
};