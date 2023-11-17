package com.wfms.controller;

import com.wfms.model.Forum;
import com.wfms.service.ForumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/forum")
@CrossOrigin("*")
public class ForumController {

    @Autowired
    private ForumService forumService;


    @PostMapping("/")
    public Forum registerUser(@RequestBody Forum forum){
        return forumService.saveForum(forum);
    }

    @GetMapping("/forumData")
    public List<Forum> getAllForum(){return (List<Forum>) forumService.getAllForum();}

    @DeleteMapping("/{forumId}")
    public void deleteForum(@PathVariable("forumId") long forumId){this.forumService.deleteForum(forumId);}
}
