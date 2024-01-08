package com.demo.techpro.expenses.backend.service;

import com.demo.techpro.expenses.backend.dto.ExpenseDTO;
import com.demo.techpro.expenses.backend.dto.SearchCriteriaDTO;
import com.demo.techpro.expenses.backend.mapper.ExpenseMapper;
import com.demo.techpro.expenses.backend.repository.ExpenseRepository;
import com.demo.techpro.expenses.backend.repository.specification.SearchSpecification;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SearchService {

    private final ExpenseRepository repository;
    private final SearchSpecification specification;
    private final ExpenseMapper mapper;

    public List<ExpenseDTO> getExpenseByCriteria(SearchCriteriaDTO searchCriteriaDTO) {

        return repository.findAll(Specification.where(specification.bySearchCriteria(searchCriteriaDTO)))
                .stream()
                .map(mapper::toDTO)
                .collect(Collectors.toList());
    }
}
