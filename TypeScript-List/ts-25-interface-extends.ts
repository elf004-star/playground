// JavaScript - 通过原型链或混入实现继承，没有类型保障
// function AdminUser(user) {
//   this.name = user.name;
//   this.age = user.age;
//   this.permissions = user.permissions || [];
// }

// TypeScript - interface 可以扩展
interface User {
  name: string;
  age: number;
}

interface AdminUser extends User {
  permissions: string[];
  role: "admin" | "superadmin";
}

interface VipUser extends User {
  level: number;
  discount: number;
}

// 使用场景：API 响应对象扩展
interface BaseResponse {
  code: number;
  timestamp: number;
}

interface SuccessResponse extends BaseResponse {
  data: unknown;
  message: "success";
}

interface ErrorResponse extends BaseResponse {
  error: string;
  message: string;
}
