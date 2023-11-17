package com.wfms.service;

import com.wfms.model.User;
import com.wfms.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;


    static List<User> user1;
    public User saveUser(User user){
       return userRepo.save(user);
    }

    public User fetchUserByEmailId(String email){
      return userRepo.findByEmail(email);
    }

    public User fetchUserEmailPassRole(String email,String pass,String role){
        return userRepo.findByEmailAndPasswordAndRole(email,pass,role);
    }

    public List<User > getAllUsers(){
        return userRepo.findAll();
    }

    public void deleteUser(Long userId){
        this.userRepo.deleteById(userId);
    }



}
