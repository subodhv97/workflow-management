package com.wfms.repository;


import com.wfms.model.Leave;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface LeaveRepo extends JpaRepository<Leave,Long> {
    public Leave findByReason(String reason);

    public List<Leave> findAll();

    public void deleteById(Long id);

}
