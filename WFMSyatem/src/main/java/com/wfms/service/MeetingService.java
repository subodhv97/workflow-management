package com.wfms.service;

import com.wfms.model.Meeting;
import com.wfms.repository.MeetingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MeetingService {

    @Autowired
    private MeetingRepo meetingRepo;

    static List<Meeting> meetings;

    public Meeting fetchSubject(String subject){
        return meetingRepo.findBySubject(subject);
    }

    public Meeting saveMeeting(Meeting meeting){
        return meetingRepo.save(meeting);
    }

    public List<Meeting> getAllMeeting(){
        return meetingRepo.findAll();
    }

    public void deleteMeeting(Long meetingId){
        this.meetingRepo.deleteById(meetingId);
    }
}
