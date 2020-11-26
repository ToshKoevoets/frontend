// <reference types="Cypress" />
import { CATEGORIES } from '../../support/selectorsSettings';
import * as createSignal from '../../support/commandsCreateSignal';
import { CONTAINERS, CREATE_SIGNAL } from '../../support/selectorsCreateSignal';
import { MANAGE_SIGNALS } from '../../support/selectorsManageIncidents';
import questions from '../../fixtures/questions/questions.json';
import { generateToken } from '../../support/jwt';

const fixturePath = '../fixtures/signals/changeCategory.json';

describe('Create signal and choose other subcategory than proposed', () => {
  describe('Set up testdata', () => {
    beforeEach(() => {
      localStorage.setItem('accessToken', generateToken('Admin', 'signals.admin@example.com'));
    });
    it('Set description for category', () => {
      cy.server();
      cy.getManageSignalsRoutes();
      cy.getCategoriesRoutes();

      cy.visitFetch('/manage/incidents/');
      cy.waitForManageSignalsRoutes();
      cy.openMenu();
      cy.contains('Instellingen').click();
      cy.contains('Categorieën').click();

      cy.waitForCategoriesRoutes();
      cy.url().should('include', '/instellingen/categorieen/');

      cy.contains('Container is kapot').click();
      cy.url().should('include', 'instellingen/categorie/');
      cy.wait('@getCategories');

      // Change category
      cy.get(CATEGORIES.inputDescription).clear().type('Een verhaal over een kapotte container');
      cy.get(CATEGORIES.buttonOpslaan).click();

      // Wait for saving the data
      cy.wait('@patchCategory');
      cy.wait('@getCategories');

      // Check if Categorieën page opens again
      cy.url().should('include', '/instellingen/categorieen/page/1');
    });
  });
  describe('Create signal animals', () => {
    beforeEach(() => {
      cy.server();
      localStorage.setItem('accessToken', generateToken('Admin', 'signals.admin@example.com'));
    });
    it('Should initiate create signal from manage', () => {
      cy.getManageSignalsRoutes();
      cy.visitFetch('/manage/incidents/');
      cy.waitForManageSignalsRoutes();
      cy.openMenu();
      cy.contains('Melden').click();
      cy.checkHeaderText('Beschrijf uw melding');
    });
    it('Should create the signal', () => {
      cy.route2('**/locatieserver/v3/suggest?fq=*').as('getAddress');
      cy.route2('**/maps/topografie?bbox=**').as('map');
      cy.route2('POST', '**/signals/v1/private/signals/').as('postSignalPrivate');

      createSignal.setDescriptionPage(fixturePath);
      cy.get(CREATE_SIGNAL.dropdownSubcategory).select('Container is kapot (AEG)');
      cy.get(CREATE_SIGNAL.descriptionInfo).should('contain', 'Subcategorie voorstel: Wespen').and('be.visible');
      cy.get(CREATE_SIGNAL.infoText).should('contain', 'Een verhaal over een kapotte container').and('be.visible');
      cy.contains('Volgende').click();

      createSignal.checkSpecificInformationPage(fixturePath);

      // Select container soort and number
      cy.contains(questions.afval.extra_container_kind.label).should('be.visible');
      cy.get(CONTAINERS.inputContainerSoort).eq(0).type('Een papiercontainer');
      cy.contains(questions.afval.extra_container_number.label).should('be.visible');
      cy.get(CONTAINERS.inputContainerNummer).eq(1).type('Nummertje 911');
      cy.contains('Volgende').click();

      createSignal.setPhonenumber(fixturePath);
      cy.contains('Volgende').click();

      createSignal.setEmailAddress(fixturePath);
      cy.contains('Volgende').click();

      cy.wait('@map');
      createSignal.checkSummaryPage(fixturePath);
      createSignal.checkQuestions(fixturePath);
      cy.contains('Verstuur').click();
      cy.wait('@postSignalPrivate');
      cy.get(MANAGE_SIGNALS.spinner).should('not.exist');

      createSignal.checkThanksPage();
      createSignal.saveSignalId();
    });
  });
  describe('Check data created signal', () => {
    before(() => {
      localStorage.setItem('accessToken', generateToken('Admin', 'signals.admin@example.com'));
      cy.server();
      cy.getManageSignalsRoutes();
      cy.getSignalDetailsRoutesById();
      cy.visitFetch('/manage/incidents/');
      cy.waitForManageSignalsRoutes();
    });

    it('Should show the signal details', () => {
      createSignal.openCreatedSignal();
      cy.waitForSignalDetailsRoutes();

      createSignal.checkAllDetails(fixturePath);
    });
  });
});
