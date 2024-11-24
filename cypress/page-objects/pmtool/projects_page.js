import { HeaderSection } from "./common/header_section.js";
import { CreateProjectModal } from "./create_project_modal.js";
import { customElement } from "../../helpers/custom_element";

export class ProjectsPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=21");
    this.addProjectButton = customElement('button[test_id="Add Project"]');
    this.projectsHeader = customElement(".page-title");

    this.projectsTable = customElement(".table-bordered");
    this.filtersTableBody = customElement(
      'div[test_id="Filters"] .portlet-body'
    );
    this.filtersTableHeader = customElement(
      'div[test_id="Filters"] .portlet-title'
    );
    this.addFilterButton = customElement("button[test_id='Add_filter']");
    this.addProjectButton = customElement("button[test_id='Add Project']");
    this.withSelectedDropdown = customElement(
      "button[test_id='with_selected_dropdown']"
    );
    this.uploadButton = customElement("a[test_id='import_button']");
    this.searchInput = customElement("input[test_id='search_input']");
    this.searchButton = customElement("button[test_id='search_button']");

    this.tableHeaderAction = customElement("th[test_id='Action']");
    this.tableHeaderID = customElement("th[test_id='ID']");
    this.tableHeaderPriority = customElement("th[test_id='Priority']");
    this.tableHeaderName = customElement("th[test_id='Name']");
    this.tableHeaderStatus = customElement("th[test_id='Status']");
    this.tableHeaderStartDate = customElement("th[test_id='Start Date']");
    this.tableHeaderDateAdded = customElement("th[test_id='Date Added']");
    this.tableHeaderCreatedBy = customElement("th[test_id='Created By']");
  }

  clickAddNewProject() {
    this.projectsHeader.isVisible();
    this.projectsHeader.containText("Projects");
    this.addProjectButton.click();
    return new CreateProjectModal();
  }

  clickFiltersHeader() {
    this.filtersTableHeader.get().click();
    return this;
  }
}
