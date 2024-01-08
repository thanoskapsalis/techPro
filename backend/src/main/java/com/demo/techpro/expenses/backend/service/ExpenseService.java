package com.demo.techpro.expenses.backend.service;

import com.demo.techpro.expenses.backend.dto.ExpenseCreateDTO;
import com.demo.techpro.expenses.backend.dto.ExpenseDTO;
import com.demo.techpro.expenses.backend.dto.ExpenseUpdateDTO;
import com.demo.techpro.expenses.backend.entity.Expense;
import com.demo.techpro.expenses.backend.mapper.ExpenseMapper;
import com.demo.techpro.expenses.backend.repository.ExpenseRepository;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.apache.logging.log4j.util.Strings;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Date;
import java.util.List;

@Service
@Getter
@Setter
@RequiredArgsConstructor
public class ExpenseService {

    private final ExpenseRepository repository;
    private final ExpenseMapper mapper;

    public List<ExpenseDTO> getAllExpenses() {
        return repository.findAll().stream().map(mapper::toDTO).toList();
    }

    public ExpenseDTO getExpenseById(Long id) {
        return mapper.toDTO(repository.findById(id).orElseThrow());
    }

    public ExpenseDTO createExpense(ExpenseCreateDTO expenseCreateDTO) {
        Expense expense = mapper.toEntity(expenseCreateDTO);
        expense.setTimestamp(Date.from(Instant.now()));
        return mapper.toDTO(repository.save(expense));
    }

    public ExpenseDTO updateExpense(Long id, ExpenseUpdateDTO updateDTO) {
        Expense expense = repository.findById(id).orElseThrow();
        if (Strings.isNotBlank(updateDTO.getProduct())) {
            expense.setProduct(updateDTO.getProduct());
        }
        if (updateDTO.getCost() != null) {
            expense.setCost(updateDTO.getCost());
        }
        if (updateDTO.getCategory() != null) {
            expense.setCategory(updateDTO.getCategory());
        }
        expense.setTimestamp(Date.from(Instant.now()));
        return mapper.toDTO(repository.save(expense));
    }

    public void deleteExpense(Long id) {
        repository.deleteById(id);
    }
}
