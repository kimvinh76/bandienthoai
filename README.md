# User Management System - Next.js + Spring Boot

Dự án quản lý user với Spring Boot backend và Next.js frontend, sử dụng MySQL database thông qua phpMyAdmin.

## 🚀 Tính năng

- ✅ CRUD đầy đủ cho User (Tạo, Đọc, Cập nhật, Xóa)
- ✅ Spring Boot REST API backend
- ✅ Next.js với TypeScript frontend
- ✅ MySQL database integration
- ✅ Responsive UI với TailwindCSS
- ✅ Validation dữ liệu
- ✅ Error handling

## 🛠 Công nghệ sử dụng

### Backend
- **Spring Boot 3.2.1**
- **Spring Data JPA**
- **MySQL Connector**
- **Spring Validation**
- **Maven**

### Frontend
- **Next.js 14**
- **TypeScript**
- **TailwindCSS**
- **Axios**
- **React Hooks**

## 📋 Yêu cầu hệ thống

- Java 17 hoặc cao hơn
- Node.js 18 hoặc cao hơn
- MySQL 8.0
- phpMyAdmin (tùy chọn)
- Maven 3.6+

## 🔧 Cài đặt và chạy

### 1. Setup Database

#### Sử dụng phpMyAdmin:
1. Mở phpMyAdmin trong trình duyệt: `http://localhost/phpmyadmin`
2. Tạo database mới tên `projectnextspring_db`
3. Hoặc import file `backend/database_setup.sql`

#### Sử dụng MySQL command line:
```sql
mysql -u root -p
CREATE DATABASE projectnextspring_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
EXIT;
```

### 2. Chạy Backend (Spring Boot)

```bash
# Di chuyển vào thư mục backend
cd backend

# Cài đặt dependencies và build
mvn clean install

# Chạy ứng dụng
mvn spring-boot:run

# Hoặc chạy JAR file
java -jar target/projectnextspring-backend-0.0.1-SNAPSHOT.jar
```

Backend sẽ chạy trên: `http://localhost:8080`

### 3. Chạy Frontend (Next.js)

```bash
# Di chuyển vào thư mục frontend
cd frontend

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Hoặc build và chạy production
npm run build
npm run start
```

Frontend sẽ chạy trên: `http://localhost:3000`

## 📱 Sử dụng ứng dụng

1. Mở trình duyệt và truy cập `http://localhost:3000`
2. Bạn sẽ thấy giao diện quản lý User
3. Các chức năng có sẵn:
   - **Xem danh sách** tất cả users
   - **Thêm user mới** bằng cách nhấn nút "Thêm User Mới"
   - **Sửa user** bằng cách nhấn nút "Sửa" 
   - **Xóa user** bằng cách nhấn nút "Xóa"

## 🌐 API Endpoints

### User Management APIs

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/api/users` | Lấy tất cả users |
| GET | `/api/users/{id}` | Lấy user theo ID |
| POST | `/api/users` | Tạo user mới |
| PUT | `/api/users/{id}` | Cập nhật user |
| DELETE | `/api/users/{id}` | Xóa user |
| GET | `/api/users/email/{email}` | Tìm user theo email |

### Authentication APIs

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| POST | `/api/auth/register` | Đăng ký user mới |
| POST | `/api/auth/login` | Đăng nhập và nhận token |

### Ví dụ Request/Response:

#### Tạo user mới (POST /api/users):
```json
{
  "name": "Nguyễn Văn An",
  "email": "vanan@example.com",
  "phone": "0123456789",
  "address": "Hà Nội, Việt Nam"
}
```

#### Response:
```json
{
  "id": 1,
  "name": "Nguyễn Văn An",
  "email": "vanan@example.com",
  "phone": "0123456789", 
  "address": "Hà Nội, Việt Nam",
  "createdAt": "2024-01-01T10:00:00",
  "updatedAt": "2024-01-01T10:00:00"
}
```

#### Đăng ký user mới (POST /api/auth/register):
```json
{
  "name": "Nguyễn Văn B",
  "email": "vanb@example.com",
  "password": "matkhau123",
  "phone": "0987654321",
  "address": "Đà Nẵng, Việt Nam"
}
```

#### Response:
```json
{
  "id": 2,
  "name": "Nguyễn Văn B",
  "email": "vanb@example.com",
  "phone": "0987654321",
  "address": "Đà Nẵng, Việt Nam",
  "roles": ["USER"],
  "createdAt": "2024-01-02T10:00:00",
  "updatedAt": "2024-01-02T10:00:00"
}
```

#### Đăng nhập (POST /api/auth/login):
```json
{
  "email": "vanb@example.com",
  "password": "matkhau123"
}
```

#### Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "tokenType": "Bearer",
  "userId": 2,
  "email": "vanb@example.com"
}
```

## 🗂 Cấu trúc dự án

```
projectnextspring/
├── backend/                    # Spring Boot Backend
│   ├── src/main/java/com/example/projectnextspring/
│   │   ├── entity/            # JPA Entities
│   │   ├── repository/        # Data Repositories  
│   │   ├── service/           # Business Logic
│   │   ├── controller/        # REST Controllers
│   │   └── dto/               # Data Transfer Objects
│   ├── src/main/resources/
│   │   └── application.properties
│   ├── database_setup.sql     # Database setup script
│   ├── database_migration_add_auth.sql # SQL to add auth columns
│   └── pom.xml               # Maven dependencies
│
├── frontend/                  # Next.js Frontend
│   ├── src/
│   │   ├── app/              # Next.js App Router
│   │   ├── components/       # React Components
│   │   ├── services/         # API Services
│   │   └── types/            # TypeScript Types
│   ├── package.json
│   ├── next.config.js
│   ├── tailwind.config.js
│   └── tsconfig.json
│
└── README.md
```

## ⚙️ Cấu hình

### Backend Configuration (application.properties):
```properties
# Database
spring.datasource.url=jdbc:mysql://localhost:3306/projectnextspring_db?useSSL=false&serverTimezone=Asia/Ho_Chi_Minh
spring.datasource.username=root
spring.datasource.password=

# JPA
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

# Server
server.port=8080
```

### Frontend Configuration (next.config.js):
```javascript
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/api/:path*'
      }
    ]
  }
}
```

## 🔐 Authentication

Endpoints added:
- POST `/api/auth/register` - register new user with body {name, email, password, phone?, address?}
- POST `/api/auth/login` - login with {email, password} -> returns {token, tokenType, userId, email}

After adding auth, you must add `password` and `roles` columns to `users` table. See `backend/database_migration_add_auth.sql` for SQL to run or integrate with Flyway.

Use the returned Bearer token in `Authorization` header for protected endpoints.

## Frontend Auth (Next.js)

- Register page: `/auth/register` - creates account and stores returned Bearer token in localStorage.
- Login page: `/auth/login` - obtains Bearer token and stores it.

The frontend attaches the token automatically to API requests (axios interceptor). To test:
1. Start backend and frontend.
2. Visit `http://localhost:3000/auth/register` to create a user.
3. Visit `http://localhost:3000/auth/login` to login.

## 🐛 Troubleshooting

### Backend Issues:
1. **Database Connection Error**: Kiểm tra MySQL service đã chạy chưa
2. **Port 8080 bị chiếm**: Thay đổi port trong `application.properties`
3. **Maven Build Error**: Đảm bảo Java 17+ đã được cài đặt

### Frontend Issues:
1. **Module Not Found**: Chạy `npm install` để cài dependencies
2. **Port 3000 bị chiếm**: Next.js sẽ tự động chọn port khác
3. **API Connection Error**: Đảm bảo backend đang chạy trên port 8080

## 📝 Phát triển thêm

Để mở rộng dự án, bạn có thể:

1. **Thêm authentication/authorization**
2. **Thêm pagination cho danh sách user**  
3. **Thêm search và filter**
4. **Thêm upload avatar**
5. **Thêm role-based access control**
6. **Thêm unit tests**
7. **Deploy lên cloud (AWS, Heroku, Vercel)**

## 📄 License

Dự án này được phát triển cho mục đích học tập và demo.

## 👨‍💻 Tác giả

Được tạo bởi GitHub Copilot - AI Assistant cho việc phát triển phần mềm.

---

**Lưu ý**: Đảm bảo rằng MySQL service đang chạy trước khi khởi động backend. Nếu sử dụng phpMyAdmin, hãy đảm bảo XAMPP hoặc WAMP đã được khởi động.# bandienthoai
