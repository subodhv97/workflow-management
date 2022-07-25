package com.wfms.controller;


import com.wfms.model.Meeting;
import com.wfms.service.MeetingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/meeting")
@CrossOrigin("*")
public class MeetingController {

    @Autowired
    private MeetingService meetingService;

    @PostMapping("/")
    public Meeting registerMeeting(@RequestBody Meeting meeting) throws Exception {
        String tempMeetingSub = meeting.getSubject();
        if(tempMeetingSub != null && !"".equals(tempMeetingSub)){
            Meeting meetingObj = meetingService.fetchSubject(tempMeetingSub);
            if (meetingObj != null){
                throw new Exception("Meeting already Exist with subject "+tempMeetingSub);
            }
        }
        Meeting meetingObj = null;
        meetingObj = meetingService.saveMeeting(meeting);
        return meetingObj;
    }

    @GetMapping("/meetingData")
    public List<Meeting> getAllMeeting(){
        return (List<Meeting>) meetingService.getAllMeeting();
    }

    @DeleteMapping("/{meetingId}")
    public void deleteMeeting(@PathVariable("meetingId") long meetingId){
        this.meetingService.deleteMeeting(meetingId);
    }
}
