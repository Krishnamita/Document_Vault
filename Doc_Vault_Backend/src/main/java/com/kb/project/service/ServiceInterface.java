package com.kb.project.service;
import com.kb.project.model.Doc;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

// TODO: Auto-generated Javadoc
/**
 * The Interface ServiceInterface.
 */
public interface ServiceInterface {
	
    /**
     * Save file.
     *
     * @param file the file
     * @param details the details
     * @return the doc
     */
    Doc saveFile(MultipartFile file, String details);
    
    /**
     * Gets the file.
     *
     * @param fileId the file id
     * @return the file
     */
    Optional<Doc> getFile(Integer fileId);
    
    /**
     * Gets the files.
     *
     * @return the files
     */
    List<Doc> getFiles();
    
    /**
     * Delete doc.
     *
     * @param id the id
     * @return the string
     */
    String deleteDoc(int id);
    
}