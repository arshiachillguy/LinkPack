package com.example.linkpack.security.Repository;

import com.example.linkpack.security.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // with these i can find user with username from database
    Optional<User> findByUsername(String username);

}

