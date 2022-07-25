package com.wfms.service;

import com.wfms.model.Forum;
import com.wfms.repository.ForumRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ForumService {
    @Autowired
    private ForumRepo forumRepo;

    static List<Forum> forum1;



    public Forum saveForum(Forum forum){
        return forumRepo.save(forum);
    }
    public List<Forum> getAllForum(){
        return forumRepo.findAll();
    }

    public void deleteForum(Long userId){
        this.forumRepo.deleteById(userId);
    }
}
