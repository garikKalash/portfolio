package com.gk.portfolio.services;

import com.gk.portfolio.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {
    @Autowired ProjectRepository projectRepository;
}
