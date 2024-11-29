import newUsersData from "../../fixtures/create_user_data.json";
import { LoginPage } from "../../page-objects/pmtool/login_page";
import { CreateNewUserModal } from "../../page-objects/pmtool/users/create_new_user_modal";
import { faker } from "@faker-js/faker";

describe("DDT tests - create users", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .login(Cypress.env("pmtool_username"), Cypress.env("pmtool_password"))
      .openUsers()
      .clickAddUser();
  });
  newUsersData.forEach((userData) => {
    it(`DDT Create Users: ${userData.role}`, () => {
      const username =
        userData.username_prefix + faker.number.int({ min: 10000, max: 99999 });
      const firstname = faker.person.firstName();
      const lastname = faker.person.lastName();
      const email = faker.internet.exampleEmail({
        firstName: firstname,
        lastName: lastname,
      });

      new CreateNewUserModal()
        .typeUsername(username)
        .selectRole(userData.role)
        .typePassword(userData.password)
        .typeFirstName(firstname)
        .typeLastName(lastname)
        .typeEmail(email)
        .clickSave()
        .clickProfile()
        .clickLogout()
        .login(username, userData.password)
        .userNameHaveText(firstname, lastname);
    });
  });
});
