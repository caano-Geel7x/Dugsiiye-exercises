enum UserRole {
  Superadmin = "superadmin",
  Moderator = "moderator",
  Viewer = "viewer",
}

function canEdit(role: UserRole): boolean {
  return role !== UserRole.Viewer;
}

console.log(canEdit(UserRole.Superadmin));
console.log(canEdit(UserRole.Moderator));
console.log(canEdit(UserRole.Viewer));

const button = document.querySelector("button") as HTMLButtonElement | null;

if (button) {
  button.disabled = true;
}