package com.wfms.model;

import javax.persistence.*;

@Entity
@Table(name = "addedUser")
public class AddedUser {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String role;
    private String name;
    private String username;
    private String email;
    private String phone;
    private String subject;
    private String education;
    private String dob;
    private String gender;
    private String password;
    private String profile;

    public AddedUser() {
    }

    public AddedUser(Long id, String role, String name, String username, String email, String phone, String subject, String education, String dob, String gender, String password, String profile) {
        this.id = id;
        this.role = role;
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.subject = subject;
        this.education = education;
        this.dob = dob;
        this.gender = gender;
        this.password = password;
        this.profile = profile;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getEducation() {
        return education;
    }

    public void setEducation(String education) {
        this.education = education;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }
}
