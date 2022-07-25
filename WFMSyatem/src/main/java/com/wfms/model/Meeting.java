package com.wfms.model;

import javax.persistence.*;

@Entity
@Table(name="meeting")
public class Meeting {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String subject;
    private String date;
    private String time;
    private String place;
    private String description;
    private String url;

//    Constructors

    public Meeting() {
    }

    public Meeting(Long id, String subject, String date, String time, String place, String description,String url) {
        this.id = id;
        this.subject = subject;
        this.date = date;
        this.time = time;
        this.place = place;
        this.description = description;
        this.url = url;
    }

    //    Getter And Setter Methods

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
