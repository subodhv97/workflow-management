package com.wfms.repository;

import com.wfms.model.Forum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ForumRepo extends JpaRepository<Forum,Long> {



    public List<Forum> findAll();
    public void deleteById(Long id);
}
