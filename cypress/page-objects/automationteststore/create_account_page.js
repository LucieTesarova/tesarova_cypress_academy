import { AccountPageSuccess } from "./account_page_success";

export class CreateAccountPage {
  constructor() {
    this.firstNameInput = "#AccountFrm_firstname";
    this.lastNameInput = "#AccountFrm_lastname";
    this.emailInput = "#AccountFrm_email";
    this.telephoneInput = "#AccountFrm_telephone";
    this.faxInput = "#AccountFrm_fax";

    this.companyInput = "#AccountFrm_company";
    this.address1Input = "#AccountFrm_address_1";
    this.address2Input = "#AccountFrm_address_2";
    this.cityInput = "#AccountFrm_city";
    this.regionStateSelect = "#AccountFrm_zone_id";
    this.zipCodeInput = "#AccountFrm_postcode";
    this.cityInput = "#AccountFrm_city";
    this.countryInput = "#AccountFrm_country_id";

    this.loginNameInput = "#AccountFrm_loginname";
    this.passwordInput = "#AccountFrm_password";
    this.confirmPasswordInput = "#AccountFrm_confirm";

    this.subscribeCheckbox = "input[name='newsletter']";
    this.subscribeCheckboxNo = "#AccountFrm_newsletter0";
    this.subscribeCheckboxYes = "#AccountFrm_newsletter1";
    this.privacyPolicyCheckbox = "#AccountFrm_agree";
    this.continueButton = "button[title='Continue']";
  }

  typeFirstName(firstName) {
    cy.get(this.firstNameInput).type(firstName);
    cy.get(this.firstNameInput).should("have.value", firstName);
    return this;
  }

  typeLastName(lastName) {
    cy.get(this.lastNameInput).type(lastName);
    cy.get(this.lastNameInput).should("have.value", lastName);
    return this;
  }

  typeEmail(email) {
    cy.get(this.emailInput).type(email);
    cy.get(this.emailInput).should("have.value", email);
    return this;
  }

  typeTelephone(telephone) {
    cy.get(this.telephoneInput).type(telephone);
    cy.get(this.telephoneInput).should("have.value", telephone);
    return this;
  }

  typeFax(fax) {
    cy.get(this.faxInput).type(fax);
    cy.get(this.faxInput).should("have.value", fax);
    return this;
  }

  typeCompany(company) {
    cy.get(this.companyInput).type(company);
    cy.get(this.companyInput).should("have.value", company);
    return this;
  }

  typeAddress1(address1) {
    cy.get(this.address1Input).type(address1);
    cy.get(this.address1Input).should("have.value", address1);
    return this;
  }

  typeAddress2(address2) {
    cy.get(this.address2Input).type(address2);
    cy.get(this.address2Input).should("have.value", address2);
    return this;
  }

  typeCity(city) {
    cy.get(this.cityInput).type(city);
    cy.get(this.cityInput).should("have.value", city);
    return this;
  }

  selectRegion(region) {
    cy.get(this.regionStateSelect).select(region);
    cy.get(this.regionStateSelect).should("have.value", 901);
    return this;
  }

  typeZipCode(zipCode) {
    cy.get(this.zipCodeInput).type(zipCode);
    cy.get(this.zipCodeInput).should("have.value", zipCode);
    return this;
  }

  selectCountry(country) {
    cy.get(this.countryInput).select(country);
    cy.get(this.countryInput).should("have.value", 56);
    return this;
  }

  typeLoginName(loginName) {
    cy.get(this.loginNameInput).type(loginName);
    cy.get(this.loginNameInput).should("have.value", loginName);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    cy.get(this.passwordInput).should("have.value", password);
    return this;
  }

  typePasswordConfirm(passwordConfirm) {
    cy.get(this.confirmPasswordInput).type(passwordConfirm);
    cy.get(this.confirmPasswordInput).should("have.value", passwordConfirm);
    return this;
  }

  checkSubscribe(subscribe) {
    cy.get(this.subscribeCheckbox).check(subscribe);
    if (subscribe == 0) {
      cy.get(this.subscribeCheckboxNo).should("be.checked");
      cy.get(this.subscribeCheckboxYes).should("not.be.checked");
    } else {
      cy.get(this.subscribeCheckboxNo).should("not.be.checked");
      cy.get(this.subscribeCheckboxYes).should("be.checked");
    }
    return this;
  }

  checkPrivacyPolicy() {
    cy.get(this.privacyPolicyCheckbox).check();
    cy.get(this.privacyPolicyCheckbox).should("be.checked");
    return this;
  }

  clickContinueButton() {
    cy.get(this.continueButton).click();
    return new AccountPageSuccess();
  }
}
