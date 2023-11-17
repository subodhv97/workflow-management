package com.wfms.repository;

import com.wfms.model.AddedUser;
import com.wfms.service.AddedUserService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AddedUserRepo extends JpaRepository<AddedUser, Long> {

    public AddedUser findByEmail(String email);

    public AddedUser findByEmailAndPasswordAndRole(String email,String password,String role);

    public AddedUser findByEmailAndRole(String email,String role);
    public List<AddedUser> findAll();

    public  void deleteById(Long id);
}
