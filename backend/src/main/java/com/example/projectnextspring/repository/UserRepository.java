package com.example.projectnextspring.repository;

import com.example.projectnextspring.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    // Tìm user theo email
    Optional<User> findByEmail(String email);
    
    // Kiểm tra xem email đã tồn tại chưa
    boolean existsByEmail(String email);
    
    // Tìm user theo tên (không phân biệt hoa thường)
    Optional<User> findByNameIgnoreCase(String name);
}