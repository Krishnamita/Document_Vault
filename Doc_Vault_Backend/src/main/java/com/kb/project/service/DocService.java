package com.kb.project.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.kb.project.model.Doc;
import com.kb.project.model.User;
import com.kb.project.repository.DocRepository;
import com.kb.project.repository.UserRepository;

// TODO: Auto-generated Javadoc
/**
 * The Class DocService.
 */
@Service
public class DocService {
	
	/** The doc repository. */
	@Autowired
	private DocRepository docRepository;
	
	/** The user repository. */
	@Autowired
	private UserRepository userRepository;

	/**
	 * Save file.
	 *
	 * @param file the file
	 * @param details the details
	 * @param userId the user id
	 * @return the doc
	 * @throws IOException Signals that an I/O exception has occurred.
	 */
	public Doc saveFile(MultipartFile file, String details,int userId) throws IOException {
		Doc doc = new Doc();
		Optional<User> data=userRepository.findById(userId);
		User user=data.get();
		
		try {
			doc = new ObjectMapper().readValue(details, Doc.class);
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		try {
			doc.setData(file.getBytes());
		} catch (IOException e) {
			e.printStackTrace();
		}
		doc.setDocName(file.getOriginalFilename());
		doc.setDocType(file.getContentType());
		doc.setUser(user);
		docRepository.save(doc);
		return doc; // Save file

	}

	/**
	 * Gets the file.
	 *
	 * @param fileId the file id
	 * @return the file
	 */
	public Optional<Doc> getFile(Integer fileId) {
		return docRepository.findById(fileId); // To get particular document
	}

	/**
	 * Gets the files.
	 *
	 * @return the files
	 */
	public List<Doc> getFiles() {
		return docRepository.findAll(); // To get list of documents
	}

	/**
	 * Gets the user files.
	 *
	 * @param userId the user id
	 * @return the user files
	 */
	public List<Doc> getUserFiles(int userId) {
		return docRepository.findAllByUserId(userId); // To get list of documents
	}
	
	/**
	 * Update file.
	 *
	 * @param file the file
	 * @param details the details
	 * @param id the id
	 * @return the doc
	 * @throws IOException Signals that an I/O exception has occurred.
	 */
	public Doc updateFile(MultipartFile file, String details, Integer id) throws IOException {
		  Doc doc = new Doc();
		  doc.setId(id);
		  try {
				doc = new ObjectMapper().readValue(details, Doc.class);
			} catch (JsonMappingException e) {
						e.printStackTrace();
			} catch (JsonProcessingException e) {
					e.printStackTrace();
			} 
			try {
				doc.setData(file.getBytes());
			} catch (IOException e) {
				e.printStackTrace();
			}
		  doc.setDocName(file.getOriginalFilename());
		  doc.setDocType(file.getContentType());
		  docRepository.save(doc); 
		  return doc;   //Save file
		 
	  }

	/**
	 * Delete doc.
	 *
	 * @param id the id
	 * @return the string
	 */
	public String deleteDoc(int id) {
		docRepository.deleteById(id);
		return "Successfully Deleted!"; // Delete the document
	}

	/**
	 * Validate user.
	 *
	 * @param emailId the email id
	 * @param password the password
	 * @return the optional
	 */
	public Optional<User> validateUser(String emailId, String password) {
		return userRepository.getByEmailIdAndPassword(emailId, password);
	}

	/**
	 * Register user.
	 *
	 * @param user the user
	 * @return the optional
	 */
	public Optional<User> registerUser(User user) {
		User user1 = userRepository.save(user);

		return userRepository.findById(user1.getUserId());
	}

}
