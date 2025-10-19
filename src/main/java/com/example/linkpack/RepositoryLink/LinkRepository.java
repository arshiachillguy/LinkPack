package com.example.linkpack.RepositoryLink;

import com.example.linkpack.Models.LinkModelWithDataBase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;



@Repository
public interface LinkRepository extends JpaRepository<LinkModelWithDataBase, Long> {

Optional<LinkModelWithDataBase> findByShortCode(String shortCode);

boolean existsByShortCode(String shortCode);



}
