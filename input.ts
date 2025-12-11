// input.ts

export function getUserRole(user?: { role?: string }) {
  if (!user) {
    return "guest"; // fallback path
  }
  if (!user.role) {
    return "unknown"; // another fallback
  }
  return user.role;
}

export function calculateDiscount(price: number, level: string) {
  if (price < 0) {
    throw new Error("Invalid price"); // error branch
  }

  switch (level) {
    case "gold":
      return price * 0.8;
    case "silver":
      return price * 0.9;
    default:
      return price; // fallback
  }
}
