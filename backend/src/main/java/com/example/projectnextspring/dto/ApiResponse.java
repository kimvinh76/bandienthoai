package com.example.projectnextspring.dto;

public class ApiResponse {
    private String message;
    private Object data;
    private boolean success;
    
    public ApiResponse() {}
    
    public ApiResponse(String message, Object data, boolean success) {
        this.message = message;
        this.data = data;
        this.success = success;
    }
    
    public static ApiResponse success(String message, Object data) {
        return new ApiResponse(message, data, true);
    }
    
    public static ApiResponse success(String message) {
        return new ApiResponse(message, null, true);
    }
    
    public static ApiResponse error(String message) {
        return new ApiResponse(message, null, false);
    }
    
    // Getters and Setters
    public String getMessage() {
        return message;
    }
    
    public void setMessage(String message) {
        this.message = message;
    }
    
    public Object getData() {
        return data;
    }
    
    public void setData(Object data) {
        this.data = data;
    }
    
    public boolean isSuccess() {
        return success;
    }
    
    public void setSuccess(boolean success) {
        this.success = success;
    }
}