package com.wfms.repository;

import com.wfms.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface UserRepo extends JpaRepository<User,Long> {
     public User findByEmail(String email);

     public User findByEmailAndPasswordAndRole(String email,String password,String role);

     //     to fetch all the records
     public List<User> findAll();

     public void deleteById(Long id);

//     public void  findById(Long id);


}
