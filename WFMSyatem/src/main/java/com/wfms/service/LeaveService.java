package com.wfms.service;

import com.wfms.model.Leave;
import com.wfms.repository.LeaveRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LeaveService {
    @Autowired
    private LeaveRepo leaveRepo;

    public Leave fetchLeaveByReason(String reason){
        return leaveRepo.findByReason(reason);
    }


    public Leave saveLeave(Leave leave){return leaveRepo.save(leave);}


    public List<Leave> getAllLeave(){
        return leaveRepo.findAll();
    }

    public void deleteLeave(Long leaveId){
        this.leaveRepo.deleteById(leaveId);
    }
}
