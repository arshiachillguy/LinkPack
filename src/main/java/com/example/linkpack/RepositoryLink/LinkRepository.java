package com.example.linkpack.RepositoryLink;

import com.example.linkpack.Models.LinkModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;



@Repository
public interface LinkRepository extends JpaRepository<LinkModel , Long> {

Optional<LinkModel> findByShortCode(String shortCode);

boolean existsByShortCode(String shortCode);



}
