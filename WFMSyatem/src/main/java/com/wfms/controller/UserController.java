package com.wfms.controller;

import com.wfms.model.User;
import com.wfms.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/")
    public User registerUser(@RequestBody User user) throws Exception {

        String tempEmailId = user.getEmail();
        if (tempEmailId !=null && !"".equals(tempEmailId)){
            User userObj = userService.fetchUserByEmailId(tempEmailId);
            if (userObj != null){
                throw new Exception("user with" + tempEmailId+ "already exist");
            }
        }

        User userObj = null;
        userObj = userService.saveUser(user);
        return userObj;
    }

    @PostMapping("/login")
    public User loginUser(@RequestBody User user) throws Exception {
        String tempEmailId = user.getEmail();
        String tempPass = user.getPassword();
        String tempRole = user.getRole();
        User userObj = null;
        if (tempEmailId != null && tempPass != null && tempRole!=null){
            userObj = userService.fetchUserEmailPassRole(tempEmailId,tempPass,tempRole);
        }
        if (userObj ==null){
            throw  new Exception("Bad Credentials");
        }
        return userObj;
    }



//to get the all user
    @GetMapping("/userData")
    public List<User> getAllUser(){
        return (List<User>) userService.getAllUsers();
    }

//    to delete the user
    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable("userId") long userid){
        this.userService.deleteUser(userid);
    }

//    @PutMapping("/")
//    public void updateUser(@PathVariable("userId") long userid){
//        this.userService.deleteUser(userid);
//    }

}
