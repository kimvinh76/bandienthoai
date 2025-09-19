package com.example.projectnextspring.dto;

public class UserDTO {
    private Long id;
    private String name;
    private String email;
    private String phone;
    private String address;
    private String roles;

    public UserDTO() {}

    public UserDTO(Long id, String name, String email, String phone, String address, String roles) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.roles = roles;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }
    public String getRoles() { return roles; }
    public void setRoles(String roles) { this.roles = roles; }
}
