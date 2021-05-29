package com.kb.project.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.PrePersist;
import javax.persistence.Table;

@Entity /**Specifies that the class is an entity. This annotation is applied to the entity class.**/
@Table(name="docs")/**Specifies the primary table for the annotated entity.**/
public class Doc {
	@Id        /**Specifies the primary key of an entity.**/
	@GeneratedValue(strategy=GenerationType.IDENTITY) /**The primary key generation strategy that the persistence provider must use to generate the annotated entity primary key.**/
	private Integer id;
	private String docName;
	private String docType;
	private String title;
	private String category;
	
	@Column(name = "created_at") /**The name of the column. Defaults to  the property or field name.**/
	private Date createdAt;
	private byte[] data;
	@Lob /** Specifies that a persistent property or field should be persisted as a large object to a database-supported large object type.private byte[] data;**/
	
	
	@PrePersist /** Specifies a callback method for the corresponding  lifecycle event.**/ 
	  void createdAt() {
	    this.createdAt = new Date();
	  }
	

	public Date getCreatedAt() {
		return createdAt;
	}


	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}


	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Integer getId() {
		return id;
	}

	public Doc() {
		super();
	}

	public Doc(Integer id, String docName, String docType, String title, String category, byte[] data) {
		super();
		this.id = id;
		this.docName = docName;
		this.docType = docType;
		this.title = title;
		this.category = category;
		this.data = data;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDocName() {
		return docName;
	}

	public void setDocName(String docName) {
		this.docName = docName;
	}

	public String getDocType() {
		return docType;
	}

	public void setDocType(String docType) {
		this.docType = docType;
	}

	public byte[] getData() {
		return data;
	}

	public void setData(byte[] data) {
		this.data = data;
	}

}
