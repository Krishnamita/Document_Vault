package com.project.service;
import org.springframework.web.multipart.MultipartFile;

import com.project.model.Doc;

import java.util.List;
import java.util.Optional;

public interface ServiceInterface {
	
    Doc saveFile(MultipartFile file, String details);
    
    Optional<Doc> getFile(Integer fileId);
    
    List<Doc> getFiles();
    
    String deleteDoc(int id);
    
}