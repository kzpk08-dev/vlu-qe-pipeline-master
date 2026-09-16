function login(username, password) {
    // Kiểm tra username rỗng
    if (!username || username.trim() === "") {
        return false;
    }

    // Kiểm tra password rỗng
    if (!password || password.trim() === "") {
        return false;
    }

    // Kiểm tra mật khẩu chứa ký tự đặc biệt
    const specialCharRegex = /[^a-zA-Z0-9]/;

    if (specialCharRegex.test(password)) {
        return false;
    }

    // Tài khoản bị khóa
    if (username === "locked") {
        return false;
    }

    // Kiểm tra thông tin đăng nhập của tài khoản quản trị
    if (username === "admin" && password === "123") {
        return true;
    }

    return false;
}

module.exports = { login };
