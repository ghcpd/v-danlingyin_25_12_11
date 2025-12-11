import { getUserRole, calculateDiscount } from "../input";

describe("getUserRole", () => {
  it("should return 'guest' when user is undefined (line 4-5)", () => {
    expect(getUserRole()).toBe("guest");
  });

  it("should return 'unknown' when user exists but role is undefined (line 7-8)", () => {
    expect(getUserRole({})).toBe("unknown");
  });

  it("should return the user role when both user and role are provided (line 10)", () => {
    expect(getUserRole({ role: "admin" })).toBe("admin");
  });

  it("should return the user role when role is explicitly set", () => {
    expect(getUserRole({ role: "moderator" })).toBe("moderator");
  });
});

describe("calculateDiscount", () => {
  it("should throw error for negative price (line 13-15)", () => {
    expect(() => calculateDiscount(-10, "gold")).toThrow("Invalid price");
  });

  it("should apply gold discount of 20% (line 17-18)", () => {
    expect(calculateDiscount(100, "gold")).toBe(80);
  });

  it("should apply silver discount of 10% (line 20-21)", () => {
    expect(calculateDiscount(100, "silver")).toBe(90);
  });

  it("should return original price for unknown level (line 23)", () => {
    expect(calculateDiscount(100, "bronze")).toBe(100);
  });

  it("should return original price for empty level string", () => {
    expect(calculateDiscount(100, "")).toBe(100);
  });

  it("should correctly calculate discounts for different prices", () => {
    expect(calculateDiscount(200, "gold")).toBe(160);
    expect(calculateDiscount(50, "silver")).toBe(45);
  });
});
