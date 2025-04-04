import newProjectData from "../../fixtures/new_project_data.json";
import { faker } from "@faker-js/faker";
import moment from "moment";
import { LoginPage } from "../../page-objects/pmtool/login_page";
import { CreateProjectModal } from "../../page-objects/pmtool/create_project_modal";

describe("Data Driven Tests", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .login(Cypress.env("pmtool_username"), Cypress.env("pmtool_password"))
      .openProjects()
      .clickAddNewProject();
  });
  newProjectData.forEach((projectData) => {
    it(`DDT Project: ${projectData.description}`, () => {
      const projectName =
        projectData.name_prefix + faker.number.int({ min: 10000, max: 99999 });
      const startDate = generateStartDate(projectData.start_date, "YYYY-MM-DD");

      new CreateProjectModal()
        .selectPriority(projectData.priority)
        .selectStatus(projectData.status)
        .typeName(projectName)
        .typeStartDate(startDate)
        .clickSave()
        .clickProjectInfo()
        .priorityHaveText(projectData.priority)
        .projectTitleHaveText(projectName)
        .startDateHaveText(
          generateStartDate(projectData.start_date, "DD/MM/YYYY")
        );
    });
  });
});

function generateStartDate(startDate, format) {
  let generatedDate;
  switch (startDate) {
    case "today":
      generatedDate = moment().format(format);
      break;
    case "tomorrow":
      generatedDate = moment().add(1, "day").format(format);
      break;
    case "yesterday":
      generatedDate = moment().subtract(1, "day").format(format);
      break;
    default:
      throw new Error("Nevalidni startDate");
  }
  return generatedDate;
}
