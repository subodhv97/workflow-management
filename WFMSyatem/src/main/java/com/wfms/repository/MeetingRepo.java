package com.wfms.repository;

import com.wfms.model.Meeting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface MeetingRepo extends JpaRepository<Meeting,Long> {

    public Meeting findBySubject(String subject);

//    to fetch all the Meeting
    public List<Meeting> findAll();

//    to delete the meeting
    public void deleteById(Long id);
}
