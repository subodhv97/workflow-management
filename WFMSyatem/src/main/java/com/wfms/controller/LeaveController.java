package com.wfms.controller;

import com.wfms.model.Leave;
import com.wfms.service.LeaveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/leave")
@CrossOrigin("*")
public class LeaveController {
    @Autowired
    private LeaveService leaveService;

    @PostMapping("/")
    public Leave askedLeave(@RequestBody Leave leave){
      return this.leaveService.saveLeave(leave);
    }
    @GetMapping("/leaveData")
    public List<Leave> getAllLeave(){
        return (List<Leave>) leaveService.getAllLeave();
    }

    @DeleteMapping("/{leaveId}")
    public void deleteLeave(@PathVariable("leaveId")long leaveId){
        this.leaveService.deleteLeave(leaveId);
    }
}
