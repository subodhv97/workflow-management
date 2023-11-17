package com.wfms.controller;

import com.wfms.model.AddedUser;
import com.wfms.service.AddedUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/addedUser")
@CrossOrigin("*")
public class AddedUserController {
    @Autowired
    private AddedUserService addedUserService;

    @PostMapping("/")
    public AddedUser registerAddedUser(@RequestBody AddedUser addedUser) throws Exception {
        String tempEmail = addedUser.getEmail();
        String tempRole = addedUser.getRole();
        if ((tempEmail != null && !"".equals(tempEmail)) && (tempRole !=null && !"".equals("principal"))){
            AddedUser addUserObj = addedUserService.fetchAddedUserByEmailAndRole(tempEmail,tempRole);
            if (addUserObj != null){
                throw new Exception("Either Role or Email Already exist");
            }
        }
        AddedUser addedUserObj = null;
        addedUserObj  = addedUserService.saveAddedUser(addedUser);
        return addedUserObj;
    }
    @PostMapping("/addedLogin")
    public AddedUser loginUser(@RequestBody AddedUser addedUser) throws Exception {
        String tempEmailId = addedUser.getEmail();
        String tempPass = addedUser.getPassword();
        String tempRole = addedUser.getRole();
        AddedUser userObj = null;
        if (tempEmailId != null && tempPass != null && tempRole!=null){
            userObj = addedUserService.fetchUserByEmailPassRole(tempEmailId,tempPass,tempRole);
        }
        if (userObj ==null){
            throw  new Exception("Invalid Credentials");
        }
        return userObj;
    }

    @GetMapping("/addedUserData")
    public List<AddedUser> getAllAddedUser(){
        return (List<AddedUser>) addedUserService.getAllAddedUser();
    }

    @DeleteMapping("/{addedUserId}")
    public void deleteUser(@PathVariable("addedUserId") long addedUserId){
        this.addedUserService.deleteUser(addedUserId);
    }

}
