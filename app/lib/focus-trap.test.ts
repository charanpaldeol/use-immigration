import { describe, expect, it } from "vitest";
import { getFocusableElements, trapTabKey } from "./focus-trap";

describe("focus trap", () => {
  it("collects focusable elements inside a container", () => {
    document.body.innerHTML = `
      <div id="trap">
        <a href="/">Home</a>
        <button type="button">Menu</button>
        <button type="button" disabled>Disabled</button>
      </div>
    `;
    const trap = document.getElementById("trap") as HTMLDivElement;
    const focusable = getFocusableElements(trap);
    expect(focusable).toHaveLength(2);
    expect(focusable[0]?.tagName).toBe("A");
    expect(focusable[1]?.tagName).toBe("BUTTON");
  });

  it("wraps Tab from last to first focusable element", () => {
    document.body.innerHTML = `
      <div id="trap">
        <a href="/">Home</a>
        <button type="button" id="last">Menu</button>
      </div>
    `;
    const trap = document.getElementById("trap") as HTMLDivElement;
    const last = document.getElementById("last") as HTMLButtonElement;
    last.focus();

    const event = new KeyboardEvent("keydown", {
      key: "Tab",
      bubbles: true,
      cancelable: true,
    });
    trapTabKey(trap, event);

    expect(event.defaultPrevented).toBe(true);
    expect(document.activeElement?.tagName).toBe("A");
  });
});
