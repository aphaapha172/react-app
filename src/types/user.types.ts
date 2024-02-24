export type User = {
  id: string;
  name: string;
  roles: Roles;
  permissions: Permissions;
};
export type Roles = string[];
export type PermissionType = "one-of" | "all-of";
export type Permissions = string[];
