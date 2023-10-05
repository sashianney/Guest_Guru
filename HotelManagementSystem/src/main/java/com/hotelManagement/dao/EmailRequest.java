package com.hotelManagement.dao;

public class EmailRequest 
{
	private String customername;
	private String customeremail;
	private String to;
	private String subject;
	private String body;
	public EmailRequest() {
		super();
	}
	
	public EmailRequest(String customername, String customeremail,String to, String subject, String body) {
		super();
		this.customername = customername;
		this.customeremail = customeremail;
		this.to=to;
		this.subject = subject;
		this.body = body;
	}
	public String getCustomername() {
		return customername;
	}
	public void setCustomername(String customername) {
		this.customername = customername;
	}
	public String getCustomeremail() {
		return customeremail;
	}
	public void setCustomeremail(String customeremail) {
		this.customeremail = customeremail;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getBody() {
		return body;
	}
	public void setBody(String body) {
		this.body = body;
	}
	public String getTo() {
		return to;
	}
	public void setTo(String to) {
		this.to = to;
	}
	
	
}