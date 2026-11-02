// JavaScript - 没有这两个概念

// 1. Interface 可以重复声明（合并）
interface Person {
  name: string;
}
interface Person {
  age: number;    // 合并到一个 interface
}
const p: Person = { name: "张三", age: 25 };    // ✅ 需要两个属性都有

// Type 不能重复声明
// type Person2 = { name: string };
// type Person2 = { age: number };   // ❌ 报错：无法重新声明

// 2. Type 可以做更多事情（联合类型、映射类型等）
type ID = string | number;    // ✅ type 可以
// interface Id extends string | number ❌ interface 不行
// 最佳实践：用 interface 定义对象结构，用 type 定义联合类型、工具类型
