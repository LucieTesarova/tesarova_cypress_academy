import { LoginPage } from "../../page-objects/pmtool/login_page";
import { ProjectsPage } from "../../page-objects/pmtool/projects_page";

describe("Projects Page Atomic Tests", { testIsolation: false }, () => {
  const projectPage = new ProjectsPage();

  before(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();

    new LoginPage()
      .openPmtool()
      .login(Cypress.env("pmtool_username"), Cypress.env("pmtool_password"));
    projectPage.visit();
  });

  context("Title Tests", () => {
    it("Check title is visible", () => {
      projectPage.projectsHeader.isVisible();
    });
    it("Title has text", () => {
      projectPage.projectsHeader.containText("Projects");
    });
  });

  context("Filters Table Tests", () => {
    it("Filters section is visible", () => {
      projectPage.clickFiltersHeader();
      projectPage.filtersTableBody.isVisible();
    });
    it("Hide Filters section, it is not visible", () => {
      projectPage.clickFiltersHeader();
      projectPage.filtersTableBody.isNotVisible();
    });

    it("Filters Add button is visible", () => {
      projectPage.addFilterButton.isVisible();
    });

    it("Filters Add button is clickable", () => {
      projectPage.addFilterButton.click();
    });

    it("Filters Header is visible", () => {
      projectPage.filtersTableHeader.isVisible();
    });

    it("Filters Header has text", () => {
      projectPage.filtersTableHeader.containText("Applied Filters");
    });
  });

  context("Table Controls Tests", () => {
    context("Add Project button", () => {
      it("Add Project button is visible", () => {
        projectPage.addProjectButton.isVisible();
      });
      it("Add Project button have text", () => {
        projectPage.addProjectButton.containText("Add Project");
      });
    });

    context("Dropdown With Selected", () => {
      it("Dropdown With Selected is visible", () => {
        projectPage.withSelectedDropdown.isVisible();
      });
      it("Dropdown With Selected have text", () => {
        projectPage.withSelectedDropdown.containText("With Selected");
      });
    });

    context("Upload button", () => {
      it("Upload button is visible", () => {
        projectPage.uploadButton.isVisible();
      });
    });

    context("Search", () => {
      it("Input Search is visible", () => {
        projectPage.searchInput.isVisible();
      });
      it("Input Search have placeholder", () => {
        projectPage.searchInput.havePlaceholder("Search");
      });
      it("Search button is visible", () => {
        projectPage.searchButton.isVisible();
      });
    });
  });

  context("Data table Tests", () => {
    context("Table Header", () => {
      context("Action", () => {
        it("Action is visible", () => {
          projectPage.tableHeaderAction.isVisible();
        });
        it("Action have text", () => {
          projectPage.tableHeaderAction.containText("Action");
        });
      });
      context("ID", () => {
        it("ID is visible", () => {
          projectPage.tableHeaderID.isVisible();
        });
        it("ID have text", () => {
          projectPage.tableHeaderID.containText("ID");
        });
      });
      context("Priority", () => {
        it("Priority is visible", () => {
          projectPage.tableHeaderPriority.isVisible();
        });
        it("Priority have text", () => {
          projectPage.tableHeaderPriority.containText("Priority");
        });
      });
      context("Name", () => {
        it("Name is visible", () => {
          projectPage.tableHeaderName.isVisible();
        });
        it("Name have text", () => {
          projectPage.tableHeaderName.containText("Name");
        });
      });
      context("Status", () => {
        it("Status is visible", () => {
          projectPage.tableHeaderStatus.isVisible();
        });
        it("Status have text", () => {
          projectPage.tableHeaderStatus.containText("Status");
        });
      });
      context("Start Date", () => {
        it("Start Date is visible", () => {
          projectPage.tableHeaderStartDate.isVisible();
        });
        it("Start Date have text", () => {
          projectPage.tableHeaderStartDate.containText("Start Date");
        });
      });
      context("Date Added", () => {
        it("Date Added is visible", () => {
          projectPage.tableHeaderDateAdded.isVisible();
        });
        it("Date Added have text", () => {
          projectPage.tableHeaderDateAdded.containText("Date Added");
        });
      });
      context("Created by", () => {
        it("Created by is visible", () => {
          projectPage.tableHeaderCreatedBy.isVisible();
        });
        it("Created by have text", () => {
          projectPage.tableHeaderCreatedBy.containText("Created By");
        });
      });
    });
  });
});
