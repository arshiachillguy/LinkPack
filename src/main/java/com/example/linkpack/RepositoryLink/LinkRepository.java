package com.example.linkpack.RepositoryLink;

import com.example.linkpack.Models.LinkModelWithDataBase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;



@Repository
public interface LinkRepository extends JpaRepository<LinkModelWithDataBase, Long> {

    Optional<LinkModelWithDataBase> findByOriginalUrl(String originalUrl);

    Optional<LinkModelWithDataBase> findByShortCode(String shortCode);

    boolean existsByShortCode(String shortCode);

    // برای پیدا کردن پرکلیک‌ترین لینک
    @Query("SELECT l FROM LinkModelWithDataBase l ORDER BY l.clicks DESC LIMIT 1")
    Optional<LinkModelWithDataBase> findTopByOrderByClicksDesc();
}
