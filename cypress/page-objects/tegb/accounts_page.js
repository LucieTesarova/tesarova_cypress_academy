import { customElement } from "../../helpers/custom_element.js";

export class AccountsPage {
  constructor() {
    this.titleHeader = customElement('[data-testid="title"]');
    this.balance = customElement('[data-testid="account_balance"]');
  }

  headerHaveText(headerText) {
    this.titleHeader.haveText(headerText);
    return this;
  }

  balanceContainText(balance) {
    this.balance.containText(balance);
    return this;
  }
}
