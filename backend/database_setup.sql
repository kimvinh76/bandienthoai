-- Tạo database cho dự án Next.js + Spring Boot
CREATE DATABASE IF NOT EXISTS projectnextspring_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Sử dụng database
USE projectnextspring_db;

-- Tạo bảng users (Spring Boot JPA sẽ tự động tạo, nhưng đây là script tham khảo)
CREATE TABLE IF NOT EXISTS users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    phone VARCHAR(15),
    address TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Thêm dữ liệu mẫu
INSERT INTO users (name, email, phone, address) VALUES
('Nguyễn Văn An', 'vanan@example.com', '0123456789', 'Hà Nội, Việt Nam'),
('Trần Thị Bình', 'thibinh@example.com', '0987654321', 'Hồ Chí Minh, Việt Nam'),
('Lê Văn Cường', 'vancuong@example.com', '0369852147', 'Đà Nẵng, Việt Nam');