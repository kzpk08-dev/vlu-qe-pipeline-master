const { login } = require("./auth");

describe("Regression Test - Chức năng đăng nhập", () => {

    test("Đăng nhập với mật khẩu sai", () => {
        expect(login("admin", "456")).toBe(false);
    });

    test("Username rỗng", () => {
        expect(login("", "123")).toBe(false);
    });

    test("Username chỉ chứa khoảng trắng", () => {
        expect(login("   ", "123")).toBe(false);
    });

    test("Mật khẩu rỗng", () => {
        expect(login("admin", "")).toBe(false);
    });

    test("Mật khẩu chỉ chứa khoảng trắng", () => {
        expect(login("admin", "   ")).toBe(false);
    });

    test("Mật khẩu chứa ký tự đặc biệt", () => {
        expect(login("admin", "123@")).toBe(false);
    });

    test("Mật khẩu chứa nhiều ký tự đặc biệt", () => {
        expect(login("admin", "@#$%")).toBe(false);
    });

    test("Username không tồn tại", () => {
        expect(login("user", "123")).toBe(false);
    });

    test("Tài khoản bị khóa", () => {
        expect(login("locked", "123")).toBe(false);
    });

    test("Tài khoản bị khóa với mật khẩu sai", () => {
        expect(login("locked", "456")).toBe(false);
    });

    test("Username viết hoa không hợp lệ", () => {
        expect(login("ADMIN", "123")).toBe(false);
    });

    test("Mật khẩu viết hoa không hợp lệ", () => {
        expect(login("admin", "ABC")).toBe(false);
    });

    test("Username và password đều sai", () => {
        expect(login("user", "456")).toBe(false);
    });
});
