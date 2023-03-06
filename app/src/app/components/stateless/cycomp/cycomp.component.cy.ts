import { CycompComponent } from "./cycomp.component";

describe("CyComp", () => {
    it("Mounts and start with ten", () => {
        cy.mount(CycompComponent);
        cy.get("span[data-cy='timer']").should("have.text", "10");
    });
});