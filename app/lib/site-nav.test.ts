import { describe, expect, it } from "vitest";
import {
  homeSectionIds,
  isGuideChildActive,
  isGuidesNavActive,
  isNavLinkActive,
} from "./site-nav";

describe("homeSectionIds", () => {
  it("lists the homepage anchor ids from the nav hashes", () => {
    expect(homeSectionIds).toEqual(["services", "process"]);
  });
});

describe("isNavLinkActive", () => {
  it("activates hash links only on the homepage", () => {
    expect(isNavLinkActive("/", "#services", "/#services")).toBe(true);
    expect(isNavLinkActive("/", "#contact", "/#contact")).toBe(true);
    expect(isNavLinkActive("/about", "#services", "/#services")).toBe(false);
    expect(isNavLinkActive("/", "", "/#services")).toBe(false);
  });

  it("activates route links by pathname", () => {
    expect(isNavLinkActive("/about", "", "/about")).toBe(true);
    expect(isNavLinkActive("/guides", "", "/about")).toBe(false);
  });

  it("activates guides hub and child routes", () => {
    expect(isNavLinkActive("/guides", "", "/guides")).toBe(true);
    expect(
      isNavLinkActive(
        "/guides/express-entry-2026",
        "",
        "/guides",
      ),
    ).toBe(true);
  });
});

describe("isGuidesNavActive", () => {
  it("matches guides index and nested paths", () => {
    expect(isGuidesNavActive("/guides")).toBe(true);
    expect(isGuidesNavActive("/guides/oinp-2026-niagara")).toBe(true);
    expect(isGuidesNavActive("/about")).toBe(false);
  });
});

describe("isGuideChildActive", () => {
  it("matches exact guide paths and avoids prefix false positives", () => {
    expect(
      isGuideChildActive(
        "/guides/express-entry-2026",
        "/guides/express-entry-2026",
      ),
    ).toBe(true);
    expect(isGuideChildActive("/guides", "/guides")).toBe(true);
    expect(
      isGuideChildActive("/guides/other", "/guides/express-entry-2026"),
    ).toBe(false);
  });
});
