package com.wfms.model;


import javax.persistence.*;

@Entity
@Table(name = "leavee")
public class Leave {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;

    private String userType;
    private String subject;
    private String reason;
    private String dateFrom;
    private String dateTo;
    private Boolean status = false;

    public Leave(Long id, String name, String subject, String reason, String dateFrom, String dateTo, Boolean status ,String userType) {
        this.id = id;
        this.name = name;
        this.subject = subject;
        this.reason = reason;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.status = status;
        this.userType = userType;
    }

    public Leave() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getDateFrom() {
        return dateFrom;
    }

    public void setDateFrom(String dateFrom) {
        this.dateFrom = dateFrom;
    }

    public String getDateTo() {
        return dateTo;
    }

    public void setDateTo(String dateTo) {
        this.dateTo = dateTo;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }
}
