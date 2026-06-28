package com.example.linkpack.security.Repository;

import com.example.linkpack.security.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // با این می‌تونیم کاربر رو با ایمیل از دیتابیس پیدا کنیم
    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);
}