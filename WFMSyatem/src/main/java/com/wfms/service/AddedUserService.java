package com.wfms.service;

import com.wfms.model.AddedUser;
import com.wfms.model.User;
import com.wfms.repository.AddedUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddedUserService {
    @Autowired
    private AddedUserRepo addedUserRepo;

    public AddedUser saveAddedUser(AddedUser addedUser){
        return addedUserRepo.save(addedUser);
    }

    public AddedUser fetchAddedUserByEmailAndRole(String email,String role){
        return addedUserRepo.findByEmailAndRole(email,role);
    }

    public AddedUser fetchAddedUderByEmailId(String email){
        return addedUserRepo.findByEmail(email);
    }

    public AddedUser fetchUserByEmailPassRole(String email,String pass,String role){
        return addedUserRepo.findByEmailAndPasswordAndRole(email,pass,role);

    }

    public List<AddedUser> getAllAddedUser(){
        return addedUserRepo.findAll();
    }
    public void deleteUser(Long userId){
        this.addedUserRepo.deleteById(userId);
    }
}
