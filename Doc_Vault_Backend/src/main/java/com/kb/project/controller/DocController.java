package com.kb.project.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.kb.project.exception.InvalidDetailsException;
import com.kb.project.model.Doc;
import com.kb.project.model.Response;
import com.kb.project.model.User;
import com.kb.project.service.DocService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")/**The list of allowed origins that be specific origins**/
@RequestMapping(path = "doc")/** The path mapping URIs**/
public class DocController {

	@Autowired 
	private DocService docStorageService;
		
	//Create Documents
	@PostMapping(value="/uploadFiles/{userId}", consumes=MediaType.MULTIPART_FORM_DATA_VALUE)/** For mapping HTTP {@code POST} requests onto specific handler methods.**/
	public Doc uploadMultipleFiles(@PathVariable("userId")int userId,@RequestParam("file") MultipartFile file,
    		@RequestParam("details") String details ) throws IOException, InvalidDetailsException {
		/**indicates that a method parameter should be bound to a web request parameter.**/
		System.out.println("user id"+userId);
			Doc doc = docStorageService.saveFile(file,details,userId); //File and user will be saved
			if(doc!=null)
	    	{
	    		return doc;    //Returns Uploaded Document
	    	}
	    	else
	    	{
	    		throw new InvalidDetailsException("Document Not uploaded");
	    	}
	}
	
	@ExceptionHandler(InvalidDetailsException.class)
	public ResponseEntity<Response> usernotfound1(InvalidDetailsException e)
	{
		return new ResponseEntity<Response>( new Response(e.getMessage()),HttpStatus.OK);
	}

	//Get Particular Document data
	@GetMapping("/getFile/{fileId}")             /**for mapping HTTP {@code GET} requests onto specific handler methods.**/
	public ResponseEntity<ByteArrayResource> getDocById(@PathVariable Integer fileId){
		Doc doc = docStorageService.getFile(fileId).get();
		return ResponseEntity.ok()
				.contentType(MediaType.parseMediaType(doc.getDocType()))
				.header(HttpHeaders.CONTENT_DISPOSITION,"attachment:filename=\""+doc.getDocName()+"\"")
				.body(new ByteArrayResource(doc.getData()));//Particular document is displayed
	}
	
	//Get All Document data
	@GetMapping("/getFiles")
	public ResponseEntity<List<Doc>> getDocs(){
		//System.out.println("in get console");
		List<Doc> doc = docStorageService.getFiles();
		return new ResponseEntity<List<Doc>>(doc,new HttpHeaders(),HttpStatus.OK);//List of all documents are displayed
	}
	//Get All Document data
	@GetMapping("/getUserFiles/{userId}")
	public ResponseEntity<List<Doc>> getDocsByUser(@PathVariable Integer userId){
		System.out.println("controller"+userId);
		List<Doc> doc = docStorageService.getUserFiles(userId);
		return new ResponseEntity<List<Doc>>(doc,new HttpHeaders(),HttpStatus.OK);//List of all documents are displayed
	}
	
	/**
	 * Update doc.
	 *
	 * @param file the file
	 * @param details the details
	 * @param id the id
	 * @return the doc
	 * @throws IOException Signals that an I/O exception has occurred.
	 * @throws InvalidDetailsException the invalid details exception
	 */
	@PutMapping(value="/UpdateDoc/{id}", consumes=MediaType.MULTIPART_FORM_DATA_VALUE)
	public Doc UpdateDoc(@RequestParam("file") MultipartFile file,
    		@RequestParam("details") String details , @PathVariable Integer id ) throws IOException, InvalidDetailsException {
		/**indicates that a method parameter should be bound to a web request parameter.**/
			Doc doc = docStorageService.updateFile(file,details, id);  //File and user will be saved
			if(doc!=null)
	    	{
	    		return doc;    //Returns Uploaded Document
	    	}
	    	else
	    	{
	    		throw new InvalidDetailsException("Document Not uploaded");
	    	}
	}
		
	//Deleting Document data
	@DeleteMapping("/DeleteDoc/{id}")    /**for mapping HTTP {@code DELETE} requests onto specific handler methods.**/
	public ResponseEntity<String> delDoc(@PathVariable("id") int id) 
	{
		String message= docStorageService.deleteDoc(id);
		return new ResponseEntity<String>(message,new HttpHeaders(),HttpStatus.OK);//Document deleted message will be displayed
	}
	
	@GetMapping("/validate_user/{emailId}/{password}")
	public ResponseEntity<User> validateUser(@PathVariable("emailId") String emailId, @PathVariable("password") String password){
		System.out.println(emailId+" "+password);
		Optional<User> user = docStorageService.validateUser(emailId, password);
		if(user.isPresent()) {
	    return new ResponseEntity<>(user.get(), HttpStatus.OK);}
		else
		{
			return new ResponseEntity<>(null, HttpStatus.OK);
		}
	}
	@PostMapping("/register_user")
	public ResponseEntity<Boolean> RegisterUser(@RequestBody User user){
		Optional<User> user1 = docStorageService.registerUser(user);
		if(user1.isPresent()) {
	    return new ResponseEntity<>(true, HttpStatus.OK);
		}else
		{
			 return new ResponseEntity<>(false, HttpStatus.OK);
		}
	}
}
